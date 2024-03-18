import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Questions, QuestionsRequest } from 'src/app/models/Questions';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  url = environment.BASE_URL;
  flag = 'questions';

  constructor(
    private http: HttpClient
  ) { }

  getAllQuestionss() {
    return this.http.get<Questions[]>((`${this.url}/${this.flag}`));
  }

  questionsById(questions_id: number) {
    return this.http.get<Questions>(`${this.url}/${this.flag}/${questions_id}`);
  }

  questionsByProductId(product_id: number) {
    return this.http.get<Questions[]>(`${this.url}/${this.flag}/find/by-product?p=${product_id}`);
  }

  createQuestions(questions: QuestionsRequest) {
    return this.http.post<Questions>(`${this.url}/${this.flag}`, questions);
  }

  updateQuestions(id_questions: number, questions: Questions) {
    return this.http.put<Questions>(`${this.url}/${this.flag}/${id_questions}`, questions);
  }

  removeQuestions(id_questions: number) {
    return this.http.delete<Questions>(`${this.url}/${this.flag}/${id_questions}`);
  }
}
