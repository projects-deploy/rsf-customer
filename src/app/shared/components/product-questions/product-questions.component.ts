import { Component, Input, OnInit } from '@angular/core';
import { Questions } from 'src/app/models/Questions';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { DataRxjsService } from '../../services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-product-questions',
  templateUrl: './product-questions.component.html',
  styleUrls: ['./product-questions.component.scss']
})
export class ProductQuestionsComponent implements OnInit {

  @Input() product: number = 0;
  questions: Questions[] = [];

  constructor(
    private rxjs: DataRxjsService,
    private questionsService: QuestionsService,
  ) { }

  ngOnInit(): void {
    this.questionsByProductId();

    this.rxjs.reloadQuestions$.subscribe(data => {
      this.questionsByProductId();
    });
  }

  questionsByProductId() {
    this.questionsService.questionsByProductId(this.product).subscribe({
      next: (data) => {
        this.questions = data;
        console.log('GET ALL QUESTION BY PRODUCTS:', data);
      },
      error: (err) => {
        console.log('GET ALL QUESTION BY PRODUCTS ERR:', err);
      }
    });
  }
  

}
