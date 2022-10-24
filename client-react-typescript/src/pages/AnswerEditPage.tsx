import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { defer, json, useLoaderData, useNavigate } from "react-router-dom";
import AnswerService from "../services/AnswerService";
import { RiArrowGoBackLine } from "react-icons/ri"

interface Props {
  changeCount: number,
  setChangeCount: (count: number) => void,
}

const AnswerEditPage = ({ changeCount, setChangeCount }: Props) => {
  const { answer, id }: any = useLoaderData();

  const [summary, setSummary] = useState<string>(answer.summary);
  const [info, setInfo] = useState<string>(answer.info);

  const navigate = useNavigate();

  // const { id } = useParams();
  // useEffect(() => {
  //   AnswerService.getAnswerById(String(id), setFaqData);
  // }, []);
  // 
  // const setFaqData = ({ summary, info }: Answer) => {
  //   setSummary(summary);
  //   setInfo(info);
  // }

  const goBack = (): void => navigate('/', { replace: true });

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { target: { value: textareaText } } = e;
    setSummary(textareaText);
  };

  const handleInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { target: { value: textareaText } } = e;
    setInfo(textareaText);
  };

  const handleSave = (): void => {
    AnswerService.putAnswer(String(id), summary, info);
    setChangeCount(changeCount + 1);
    goBack();
  }

  return (
    <div className="faq_container">
      <div className="modal__title">
        <h3>Answer</h3>
        <div className="modal__row-buttons">
          <FiEdit className={"row-icons"} size={30} onClick={handleSave} />
          <RiArrowGoBackLine className={"row-icons"} size={30} onClick={goBack} />
        </div>
      </div>
      <div className="modal__row">
        <div className="modal__row-summary">
          <textarea
            className="text"
            placeholder="Summary"
            value={summary}
            rows={2}
            onChange={handleSummaryChange}
          >
          </textarea>
        </div>
        <div className="modal__row-info">
          <textarea
            className="text"
            placeholder="Info"
            value={info}
            rows={10}
            onChange={handleInfoChange}
          >
          </textarea>
        </div>
      </div>
    </div>
  );
};

const getAnswerById = async (id: string) => {
  try {
    const { data } = await AnswerService.fetchAnswerById(id);
    return data;
  } catch (error: any) {
    throw json({ message: error?.message, reason: error?.response.statusText }, { status: error?.response.status });
  }
}

const answerLoader = async ({ params }: any) => {
  const { id } = params;
  return defer({
    answer: await getAnswerById(id),
    id,
  })
}

export { AnswerEditPage, answerLoader };
