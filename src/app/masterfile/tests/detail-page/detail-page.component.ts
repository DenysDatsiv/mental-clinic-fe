import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {switchMap, takeUntil} from 'rxjs/operators';
import {TestService} from '../services/test.service';
import {Test} from '../models/test.model';
import {specializedTests} from '../constants/specialized-tests';
import {ClearObservable} from '../../../ shared/unsubscribtion/ClearObservable';
import {TEST_ROUTES} from '../../../ shared/constants/routes';

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
    private metaService: Meta
  ) {
    super();
  }

  ngOnInit(): void {
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
    this.currentQuestionIndex < this.data.questions.length - 1
      ? this.currentQuestionIndex++
      : this.submitAnswers();
  }

  submitAnswers(): void {
    if (!this.data || !this.data.resultInterpretation) return;

    if (this.data.specialTest !== specializedTests.SMI) {
      this.totalScore = Object.values(this.answers).reduce((sum, value) => sum + Number(value), 0);

      const interpretation = this.data.resultInterpretation.find(({range: [min, max]}) =>
        this.totalScore >= min && (max === null || this.totalScore <= max)
      );

      this.resultMessage = interpretation ? interpretation.result : 'Не вдалося визначити рівень.';
    } else {
      this.schemaScores = {};

      this.data.resultInterpretation.forEach(({name, questionIndex}) => {
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
    this.currentQuestionIndex = 0;
    this.answers = {};
    this.isTestCompleted = false;
    this.totalScore = 0;
    this.schemaScores = {};
    this.highestSchema = '';
    this.resultMessage = '';
  }

  openPdf(pdfUrl?: string): void {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else {
      console.warn('PDF посилання відсутнє');
    }
  }

  goToAllTests(): void {
    this.router.navigate([TEST_ROUTES.LIST]);
  }

  updateSEO(title: string, description: string): void {
    this.titleService.setTitle(`${title} | Клініка ментального здоров'я`);
    this.metaService.updateTag({name: 'description', content: description});
    this.metaService.updateTag({name: 'keywords', content: `ментальне здоров'я, ${title}, тест на психічний стан`});
  }
}
