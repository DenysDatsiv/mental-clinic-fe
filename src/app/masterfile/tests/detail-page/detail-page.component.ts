import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { switchMap, takeUntil } from 'rxjs/operators';
import { TestService } from '../services/test.service';
import { Test } from '../models/test.model';
import { specializedTests } from '../constants/specialized-tests';
import { clinicContacts } from '../../shared/constants/contacts.constant';
import { ClinicContactsService } from '../../shared/components/clinic-contacts-dialog/clinic-contacts.service';
import { GoogleAnalyticsService } from '../../../ga/service/google-analytics.service';
import { ClearObservable } from "../../../ shared/unsubscribtion/ClearObservable";
import { TEST_ROUTES } from "../../../ shared/constants/routes";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent extends ClearObservable implements OnInit {
  data!: Test;

  answers: { [key: string]: number } = {};

  currentQuestionIndex = 0;
  showError = false;
  isTestCompleted = false;

  totalScore = 0;
  resultMessage = '';
  resultDescription = '';

  schemaScores: { [key: string]: number } = {};
  highestSchema = '';

  // HADS
  hadsAnxietyScore = 0;
  hadsDepressionScore = 0;
  hadsAnxietyResult = '';
  hadsDepressionResult = '';

  // RBQ
  rbqSpectraScores: { [key: string]: number } = {};
  rbqTotalScore = 0;

  // ASRS
  asrsPartAPositive = 0;
  asrsPartANegative = 0;
  asrsPartBPositive = 0;
  asrsPartBNegative = 0;
  asrsResult = '';

  protected readonly Object = Object;
  protected readonly specializedTests = specializedTests;

  constructor(
      private route: ActivatedRoute,
      private testService: TestService,
      private router: Router,
      private titleService: Title,
      private metaService: Meta,
      private contactsService: ClinicContactsService,
      private googleAnalyticsService: GoogleAnalyticsService
  ) {
    super();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.params
        .pipe(
            switchMap(params => this.testService.getTestById(params['id'])),
            takeUntil(this.destroy$)
        )
        .subscribe(response => {
          this.data = response;
          this.updatePageTitle(response.name);
          this.updateSEO(response.name, response.description);
        });
  }

  updatePageTitle(testName: string): void {
    this.titleService.setTitle(`${testName} | центр ментального здоров'я Євгена`);
  }

  nextQuestion(): void {
    const currentQuestion = this.data.questions[this.currentQuestionIndex];

    if (this.answers[currentQuestion._id] === undefined) {
      this.showError = true;
      return;
    }

    this.showError = false;

    if (this.currentQuestionIndex === this.data.questions.length - 1) {
      this.submitAnswers();
    } else {
      this.currentQuestionIndex++;
    }
  }

  submitAnswers(): void {
    if (!this.data) return;

    // reset common result fields
    this.resultMessage = '';
    this.resultDescription = '';

    // =============================
    // HADS
    // =============================
    if (this.data.specialTest === specializedTests.HADS) {
      this.hadsAnxietyScore = 0;
      this.hadsDepressionScore = 0;

      this.data.questions.forEach((question, index) => {
        const questionId = question._id;

        if (this.answers[questionId] !== undefined) {
          if (index <= 7) {
            this.hadsAnxietyScore += Number(this.answers[questionId]);
          } else {
            this.hadsDepressionScore += Number(this.answers[questionId]);
          }
        }
      });

      const anxietyInterpretation = this.data.resultInterpretation
          .filter(i => i.type === 'anxiety')
          .find(i =>
              this.hadsAnxietyScore >= i.range[0] &&
              (i.range[1] === null || this.hadsAnxietyScore <= i.range[1])
          );

      const depressionInterpretation = this.data.resultInterpretation
          .filter(i => i.type === 'depression')
          .find(i =>
              this.hadsDepressionScore >= i.range[0] &&
              (i.range[1] === null || this.hadsDepressionScore <= i.range[1])
          );

      this.hadsAnxietyResult = anxietyInterpretation?.result || 'Невизначено';
      this.hadsDepressionResult = depressionInterpretation?.result || 'Невизначено';
    }

        // =============================
        // RBQ-2A
    // =============================
    else if (this.data.specialTest === specializedTests.RBQ2A) {
      this.rbqSpectraScores = {};
      this.rbqTotalScore = 0;

      this.data.factor?.forEach(s => {
        let sum = 0;

        s.questions.forEach(qNumber => {
          const idx = qNumber - 1;
          const question = this.data.questions[idx];

          if (question) {
            const value = this.answers[question._id];

            if (value !== undefined) {
              sum += Number(value);
            }
          }
        });

        this.rbqSpectraScores[s.name] = sum;
        this.rbqTotalScore += sum;
      });

      const keys = Object.keys(this.rbqSpectraScores);

      if (keys.length) {
        this.highestSchema = keys.reduce((a, b) =>
            this.rbqSpectraScores[a] > this.rbqSpectraScores[b] ? a : b
        );
      }
    }

        // =============================
        // ASRS ADHD
    // =============================
    else if (this.data.specialTest === specializedTests.ASRS) {
      /**
       * Thresholds for ASRS questions.
       * Part A = first 6 questions
       * Part B = remaining 12 questions
       *
       * Positive symptom if answer >= threshold.
       */
      const thresholds = [
        2, 2, 2, 2, 3, 3,
        1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4
      ];

      this.asrsPartAPositive = 0;
      this.asrsPartANegative = 0;
      this.asrsPartBPositive = 0;
      this.asrsPartBNegative = 0;

      this.data.questions.forEach((question, index) => {
        const answer = this.answers[question._id];

        if (answer === undefined) {
          return;
        }

        const threshold = thresholds[index] ?? Number.MAX_SAFE_INTEGER;
        const isPositive = Number(answer) >= threshold;

        // Part A: questions 1-6
        if (index < 6) {
          if (isPositive) {
            this.asrsPartAPositive++;
          } else {
            this.asrsPartANegative++;
          }
        }
        // Part B: questions 7-18
        else {
          if (isPositive) {
            this.asrsPartBPositive++;
          } else {
            this.asrsPartBNegative++;
          }
        }
      });

      const interpretation = this.data.resultInterpretation.find(
          ({ range: [min, max] }) =>
              this.asrsPartAPositive >= min &&
              (max === null || this.asrsPartAPositive <= max)
      );

      this.asrsResult = interpretation?.result || 'Невизначено';
    }

        // =============================
        // SMI
    // =============================
    else if (this.data.specialTest === specializedTests.SMI) {
      this.schemaScores = {};

      this.data.resultInterpretation.forEach(({ name, questionIndex }) => {
        let total = 0;
        let count = 0;

        questionIndex.forEach(index => {
          const qId = this.data.questions[index - 1]?._id;

          if (qId && this.answers[qId] !== undefined) {
            total += Number(this.answers[qId]);
            count++;
          }
        });

        if (count > 0) {
          this.schemaScores[name] = total / count;
        }
      });

      this.highestSchema = Object.keys(this.schemaScores).reduce((a, b) =>
          this.schemaScores[a] > this.schemaScores[b] ? a : b
      );
    }

        // =============================
        // GENERAL TEST
    // =============================
    else {
      this.totalScore = Object.keys(this.answers)
          .map(key => this.answers[key])
          .reduce((sum, v) => sum + Number(v), 0);

      const interpretation = this.data.resultInterpretation.find(
          ({ range: [min, max] }) =>
              this.totalScore >= min &&
              (max === null || this.totalScore <= max)
      );

      this.resultMessage = interpretation?.result || 'Не вдалося визначити рівень.';
      this.resultDescription = interpretation['description'] || '';
    }

    this.isTestCompleted = true;
  }

  get asrsTotalPositive(): number {
    return this.asrsPartAPositive + this.asrsPartBPositive;
  }

  get asrsTotalNegative(): number {
    return this.asrsPartANegative + this.asrsPartBNegative;
  }

  openPdf(pdfLink: string | null | undefined): void {
    if (!pdfLink || pdfLink === 'null') {
      return;
    }

    window.open(pdfLink, '_blank');
  }

  clearError(): void {
    this.showError = false;
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  selectAnswer(questionId: string, value: number): void {
    this.answers[questionId] = value;
    this.showError = false;
  }

  restartTest(): void {
    this.currentQuestionIndex = 0;
    this.answers = {};
    this.isTestCompleted = false;

    this.totalScore = 0;
    this.resultMessage = '';
    this.resultDescription = '';

    this.schemaScores = {};
    this.highestSchema = '';

    this.rbqSpectraScores = {};
    this.rbqTotalScore = 0;

    this.hadsAnxietyScore = 0;
    this.hadsDepressionScore = 0;
    this.hadsAnxietyResult = '';
    this.hadsDepressionResult = '';

    this.asrsPartAPositive = 0;
    this.asrsPartANegative = 0;
    this.asrsPartBPositive = 0;
    this.asrsPartBNegative = 0;
    this.asrsResult = '';
  }

  goToAllTests(): void {
    this.router.navigate([TEST_ROUTES.LIST]);
  }

  openContacts(): void {
    this.contactsService.openDialog(clinicContacts);
  }

  updateSEO(title: string, description: string): void {
    this.titleService.setTitle(`${title} | центр ментального здоров'я`);

    this.metaService.updateTag({
      name: 'description',
      content: description
    });
  }
}