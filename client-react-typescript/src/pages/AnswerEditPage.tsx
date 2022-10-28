import React from "react";
import { defer, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri"
import AnswersService from "../services/AnswersService";
import NewAnswer from "../components/NewAnswer";
import Message from "../components/Message";

const AnswerEditPage = () => {
  const navigate = useNavigate();
  const { answer, id }: any = useLoaderData();
  const data: any = useActionData();

  let message: React.ReactElement | undefined = undefined;

  if (data && data.hasOwnProperty('result')) {
    if (data.result === true) {
      message = <Message messageType="info-message" message={data.message} />
    }
    if (data.result === false) {
      message = <Message messageType="alert-message" message={data.message} />
    }
  }

  const goBack = (): void => navigate(-1);

  return (
    <div className="faq_container">
      <div className="modal__title">
        <h3>Edit answer</h3>
        <div className="modal__row-buttons">
          <RiArrowGoBackLine className={"row-icons"} size={30} onClick={goBack} />
        </div>
      </div>
      {message}
      <NewAnswer
        _summary={answer.summary}
        _info={answer.info} _id={id}
        _action={`/answer/${id}`}
        submitting={false}
      />
    </div>
  );
};

const answerLoader = async ({ params }: any) => {
  const { id } = params;
  return defer({
    answer: await AnswersService.getAnswerById(id),
    id,
  })
}

const editAnswerAction = async ({ request }: any) => {

  const formData = await request.formData();

  const id: string | undefined = formData.get('id');
  const summary: string | undefined = formData.get('summary');
  const info: string | undefined = formData.get('info');

  if (!summary || !info) {
    return {
      message: `Invalid input...`,
      result: false,
    }
  }

  await AnswersService.editAnswer(String(id), summary, info);

  return {
    message: `Answer was successfully updated...`,
    result: true,
  }

}

export { AnswerEditPage, answerLoader, editAnswerAction };
