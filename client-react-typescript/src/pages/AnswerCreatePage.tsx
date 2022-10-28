import React from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri"
import NewAnswer from "../components/NewAnswer";
import Message from "../components/Message";
import AnswersService from "../services/AnswersService";

const AnswerCreatePage = () => {
  const navigate = useNavigate();
  const data: any = useActionData();

  const goBack = (): void => navigate(-1);

  let message: React.ReactElement | undefined = undefined;
  let submitting: boolean = false;

  if (data && data.hasOwnProperty('result')) {
    if (data.result === true) {
      submitting = true;
      message = <Message messageType="info-message" message={data.message} />
      setTimeout(() => navigate('/admin', { replace: true }), 1500);
    }
    if (data.result === false) {
      message = <Message messageType="alert-message" message={data.message} />
    }
  }

  return (
    <div className="faq_container">
      <div className="modal__title">
        <h3>Create new answer</h3>
        <div className="modal__row-buttons">
          <RiArrowGoBackLine className={"row-icons"} size={30} onClick={goBack} />
        </div>
      </div>
      {message}
      <NewAnswer
        _summary=''
        _info=''
        _id=''
        _action='/answers/new'
        submitting={submitting}
      />
    </div>
  );
};

const createAnswerAction = async ({ request }: any) => {
  const formData = await request.formData();

  const summary: string | undefined = formData.get('summary');
  const info: string | undefined = formData.get('info');

  if (!summary || !info) {
    return {
      message: `Invalid input...`,
      result: false,
    }
  }

  await AnswersService.createAnswer(summary, info);

  return {
    message: `Answer was successfully created...`,
    result: true,
  }

}

export { AnswerCreatePage, createAnswerAction };