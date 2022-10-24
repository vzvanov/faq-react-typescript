import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AnswerService from "../services/AnswerService";
import { RiArrowGoBackLine } from "react-icons/ri"

interface Props {
  changeCount: number,
  setChangeCount: (count: number) => void,
}

const AnswerCreatePage = ({ changeCount, setChangeCount }: Props) => {
  const [summary, setSummary] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const navigate = useNavigate();

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
    AnswerService.postAnswer(summary, info);
    setChangeCount(changeCount + 1);
    goBack();
  }

  return (
    <div className="faq_container">
      <div className="modal__title">
        <h3>Create new answer</h3>
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

export { AnswerCreatePage };