import $api from "../axios";
import { Faq } from "../faqs";

export default class FaqService {

  static getAllFaqs(setFaqs: (data: Array<Faq>) => void): void {
    $api
      .get('/faqs')
      .then(({ data }) => setFaqs(data))
      .catch(error => {
        console.log(error);
      });
  }

  static async getFaqById(id: string, setFaq: (item: Faq) => void) {
    $api
      .get(`/faqs/${id}`)
      .then(({ data }) => setFaq(data))
      .catch(error => {
        console.log(error);
      });
  }

  static deleteFaq(id: string): void {
    $api
      .delete('/faqs', { data: { id } })
      .then(res => {
        //res.data contain deleted faq
      })
      .catch(error => {
        console.log(error);
      });
  }

  static postFaq(summary: string, info: string): void {
    $api
      .post('/faqs', { summary, info })
      .then(res => {
      })
      .catch(error => {
        console.log(error);
      });
  }

  static putFaq(id: string, summary: string, info: string): void {
    $api
      .put('/faqs', { id, summary, info })
      .then(res => {
        //res.data contain prev. faq
      })
      .catch(error => {
        console.log(error);
      });
  }
}
