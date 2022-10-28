import http from "../axios";
import { Answer } from "../answers";
import { json } from "react-router-dom";

export default class AnswersService {

  static async fetchAllAnswers() {
    return http.get('/faqs');
  }

  static async getAllAnswers() {
    try {
      const { data } = await AnswersService.fetchAllAnswers();
      return data;
    } catch (error: any) {
      throw json(
        {
          message: error?.message,
          reason: error?.response.statusText
        },
        { status: error?.response.status }
      );
    }
  }

  static async postAnswer(summary: string, info: string) {
    return http.post('/faqs', { summary, info });
  }

  static async createAnswer(summary: string, info: string) {
    try {
      const { data } = await AnswersService.postAnswer(summary, info);
      return data;
    } catch (error: any) {
      throw json(
        {
          message: error?.message,
          reason: error?.response.statusText
        },
        { status: error?.response.status }
      );
    }
  }

  static async fetchAnswerById(id: string) {
    return http.get<Answer>(`/faqs/${id}`);
  }

  static async getAnswerById(id: string) {
    try {
      const { data } = await AnswersService.fetchAnswerById(id);
      return data;
    } catch (error: any) {
      throw json({ message: error?.message, reason: error?.response.statusText }, { status: error?.response.status });
    }
  }

  static async putAnswer(id: string, summary: string, info: string) {
    return http.put('/faqs', { id, summary, info });
  }

  static async editAnswer(id: string, summary: string, info: string) {
    try {
      const { data } = await AnswersService.putAnswer(id, summary, info);
      return data;
    } catch (error: any) {
      throw json({ message: error?.message, reason: error?.response.statusText }, { status: error?.response.status });
    }
  }

  static async deleteAnswerById(id: string) {
    return http.delete('/faqs', { data: { id } });
  }

  static async deleteAnswer(id: string) {
    try {
      const { data } = await AnswersService.deleteAnswerById(id);
      return data;
    } catch (error: any) {
      throw json({ message: error?.message, reason: error?.response.statusText }, { status: error?.response.status });
    }
  }

}
