import http from "../axios";
import { Answer } from "../answers";
import { AxiosError } from "axios";

export default class AnswerService {

  static getAllAnswers(setAnswers: (data: Array<Answer>) => void): void {
    http
      .get<Array<Answer>>('/faqs')
      .then(({ data }) => setAnswers(data))
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }

  static getAnswerById(id: string, setAnswer: (item: Answer) => void) {
    http
      .get<Answer>(`/faqs/${id}`)
      .then(({ data }) => setAnswer(data))
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }

  static async fetchAnswerById(id: string) {
    return http.get<Answer>(`/faqs/${id}`);
  }

  static deleteAnswer(id: string): void {
    http
      .delete('/faqs', { data: { id } })
      .then(res => {
        //res.data contain deleted faq
      })
      .catch(error => {
        console.log(error);
      });
  }

  static postAnswer(summary: string, info: string): void {
    http
      .post('/faqs', { summary, info })
      .then(res => {
      })
      .catch(error => {
        console.log(error);
      });
  }

  static putAnswer(id: string, summary: string, info: string): void {
    http
      .put('/faqs', { id, summary, info })
      .then(res => {
        //res.data contain prev. faq
      })
      .catch(error => {
        console.log(error);
      });
  }
}
