import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { switchMap, takeUntil } from 'rxjs/operators';
import { TestService } from '../services/test.service';
import { Test } from '../models/test.model';
import { specializedTests } from '../constants/specialized-tests';
import { clinicContacts } from "../../shared/constants/contacts.constant";
import { ClinicContactsService } from "../../shared/components/clinic-contacts-dialog/clinic-contacts.service";
import { GoogleAnalyticsService } from "../../../ga/service/google-analytics.service";
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

    // If last question, track "Finish Test" event
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

    if (this.data.specialTest !== specializedTests.SMI) {
      this.totalScore = Object.values(this.answers).reduce((sum, value) => sum + Number(value), 0);

      const interpretation = this.data.resultInterpretation.find(({ range: [min, max] }) =>
          this.totalScore >= min && (max === null || this.totalScore <= max)
      );

      this.resultMessage = interpretation ? interpretation.result : 'Не вдалося визначити рівень.';
    } else {
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

      this.resultMessage = `Ваш домінуючий психологічний шаблон: ${this.highestSchema}`;
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
    if (this.currentQuestionIndex > 0) this.currentQuestionIndex--;
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
    this.resultMessage = '';
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

  openContacts() {
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
