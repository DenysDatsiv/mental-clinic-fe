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
import {ClearObservable} from "../../../ shared/unsubscribtion/ClearObservable";
import {TEST_ROUTES} from "../../../ shared/constants/routes";


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
  schemaScores: { [key: string]: number } = {};
  highestSchema = '';

  // HADS test properties
  hadsAnxietyScore: number = 0;
  hadsDepressionScore: number = 0;
  hadsAnxietyResult: string = '';
  hadsDepressionResult: string = '';

  // RBQ-2A spectra sums (added)
  rbqSpectraScores: { [key: string]: number } = {};
  rbqTotalScore: number = 0;  // Store the general sum for RBQ-2A


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
    this.route.params.pipe(
        switchMap(params => this.testService.getTestById(params['id'])),
        takeUntil(this.destroy$)
    ).subscribe(response => {
      this.data = response;
      this.updatePageTitle(response.name);
      this.updateSEO(response.name, response.description);
    });
  }

  updatePageTitle(testName: string): void {
    this.titleService.setTitle(`${testName} | Клініка ментального здоров'я Євгена`);
  }

  nextQuestion(): void {
    const currentQuestion = this.data.questions[this.currentQuestionIndex];
    if (this.answers[currentQuestion._id] === undefined) {
      this.showError = true;
      return;
    }
    this.showError = false;

    // If this is the last question, track the finish event and submit answers
    if (this.currentQuestionIndex === this.data.questions.length - 1) {
      this.googleAnalyticsService.trackEvent(
          'click',
          'Test Completion',
          'Finish Test',
          {
            test_name: this.data.name,
            total_score: this.totalScore
          }
      );
      this.submitAnswers();
    } else {
      this.currentQuestionIndex++;
    }
  }

  submitAnswers(): void {
    if (!this.data || !this.data.resultInterpretation) return;

    // HADS test: For anxiety, sum answers for questions with indexes 0–7;
    // for depression, sum answers for the remaining questions.
    if (this.data.specialTest === specializedTests.HADS) {
      this.hadsAnxietyScore = 0;
      this.hadsDepressionScore = 0;

      this.data.questions.forEach((question, index) => {
        const questionId = question._id;
        if (this.answers[questionId] !== undefined) {
          if (index >= 0 && index <= 7) {
            this.hadsAnxietyScore += Number(this.answers[questionId]);
          } else {
            this.hadsDepressionScore += Number(this.answers[questionId]);
          }
        }
      });

      const anxietyInterpretations = this.data.resultInterpretation.filter(item => item.type === 'anxiety');
      const depressionInterpretations = this.data.resultInterpretation.filter(item => item.type === 'depression');

      const anxietyInterpretation = anxietyInterpretations.find(item =>
          this.hadsAnxietyScore >= item.range[0] &&
          (item.range[1] === null || this.hadsAnxietyScore <= item.range[1])
      );
      const depressionInterpretation = depressionInterpretations.find(item =>
          this.hadsDepressionScore >= item.range[0] &&
          (item.range[1] === null || this.hadsDepressionScore <= item.range[1])
      );

      this.hadsAnxietyResult = anxietyInterpretation ? anxietyInterpretation.result : 'Невизначено';
      this.hadsDepressionResult = depressionInterpretation ? depressionInterpretation.result : 'Невизначено';

    }
    // RBQ-2A: sum according to each spectra’s "questions" array
    else if (this.data.specialTest === this.specializedTests.RBQ2A) {
      this.rbqSpectraScores = {};
      this.rbqTotalScore = 0;  // Reset the general sum

      // Iterate over each factor (spectra) to sum the answers for each factor
      this.data.factor?.forEach(s => {
        let sumForFactor = 0;

        // Iterate over questions of the spectra
        s.questions.forEach(qNumber => {
          const idx = qNumber - 1;  // Convert 1-based to 0-based index
          const questionObj = this.data.questions[idx];

          if (questionObj) {
            const questionId = questionObj._id;
            const answerVal = this.answers[questionId];

            if (answerVal !== undefined) {
              sumForFactor += Number(answerVal);
            }
          }
        });

        this.rbqSpectraScores[s.name] = sumForFactor;
        this.rbqTotalScore += sumForFactor;  // Add to the general total score
      });

      // Find the highest-scoring spectra
      const keys = Object.keys(this.rbqSpectraScores);
      if (keys.length) {
        this.highestSchema = keys.reduce((a, b) =>
            this.rbqSpectraScores[a] > this.rbqSpectraScores[b] ? a : b
        );
      }
    }
    // SMI specialized test branch remains unchanged
    else if (this.data.specialTest === specializedTests.SMI) {
      this.schemaScores = {};
      this.data.resultInterpretation.forEach(({ name, questionIndex }) => {
        let schemaTotal = 0;
        let schemaCount = 0;
        questionIndex.forEach(index => {
          const questionId = this.data.questions[index - 1]?._id;
          if (questionId && this.answers[questionId] !== undefined) {
            schemaTotal += Number(this.answers[questionId]);
            schemaCount++;
          }
        });
        if (schemaCount > 0) {
          this.schemaScores[name] = schemaTotal / schemaCount;
        }
      });
      this.highestSchema = Object.keys(this.schemaScores).reduce((a, b) =>
          this.schemaScores[a] > this.schemaScores[b] ? a : b
      );
    }
    // For general tests (non-SMI, non-HADS, non-RBQ2A)
    else {
      this.totalScore = Object.keys(this.answers)
          .map(key => this.answers[key])
          .reduce((sum, value) => sum + Number(value), 0);

      const interpretation = this.data.resultInterpretation.find(({ range: [min, max] }) =>
          this.totalScore >= min && (max === null || this.totalScore <= max)
      );

      this.resultMessage = interpretation ? interpretation.result : 'Не вдалося визначити рівень.';
    }

    this.isTestCompleted = true;
  }

  openPdf(pdfUrl?: string): void {
    if (pdfUrl) {
      this.googleAnalyticsService.trackEvent(
          'click',
          'External Resource',
          'Open PDF',
          { pdf_url: pdfUrl }
      );
      window.open(pdfUrl, '_blank');
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  selectAnswer(questionId: string, value: number): void {
    this.answers[questionId] = value;
    this.clearError();
  }

  clearError(): void {
    this.showError = false;
  }

  restartTest(): void {
    this.googleAnalyticsService.trackEvent(
        'click',
        'Test Interaction',
        'Restart Test',
        { test_name: this.data.name }
    );
    this.currentQuestionIndex = 0;
    this.answers = {};
    this.isTestCompleted = false;
    this.totalScore = 0;
    this.schemaScores = {};
    this.highestSchema = '';
    this.rbqSpectraScores = {};      // reset RBQ-2A sums
    this.hadsAnxietyScore = 0;
    this.hadsDepressionScore = 0;
    this.hadsAnxietyResult = '';
    this.hadsDepressionResult = '';
  }

  goToAllTests(): void {
    this.googleAnalyticsService.trackEvent(
        'click',
        'Navigation',
        'Go to All Tests',
        { destination: TEST_ROUTES.LIST }
    );
    this.router.navigate([TEST_ROUTES.LIST]);
  }

  openContacts(): void {
    this.googleAnalyticsService.trackEvent(
        'click',
        'Contact Button',
        'Open Contact Dialog',
        { label: 'Test Result Page' }
    );
    this.contactsService.openDialog(clinicContacts);
  }

  updateSEO(title: string, description: string): void {
    this.titleService.setTitle(`${title} | Клініка ментального здоров'я`);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: `ментальне здоров'я, ${title}, тест на психічний стан` });
  }
}
