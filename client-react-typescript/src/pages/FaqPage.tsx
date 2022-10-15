import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { Faq } from "../faqs";
import FaqService from "../services/FaqService";

interface Props {
  changeCount: number,
  setChangeCount: (count: number) => void,
  isCreate: boolean,
}

const FaqPage = ({ changeCount, setChangeCount, isCreate }: Props) => {
  const [summary, setSummary] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isCreate) return;
    const _id = String(id);
    FaqService.getFaqById(_id, setFaqData);
  }, []);

  const setFaqData = ({ summary, info }: Faq) => {
    setSummary(summary);
    setInfo(info);
  }

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { target: { value: textareaText } } = e;
    setSummary(textareaText);
  };

  const handleInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { target: { value: textareaText } } = e;
    setInfo(textareaText);
  };

  const handleSave = (): void => {
    if (isCreate) {
      FaqService.postFaq(summary, info);
    } else {
      const _id = String(id);
      FaqService.putFaq(_id, summary, info);
    }
    setChangeCount(changeCount + 1);
    navigate('/admin');
  }

  return (
    <div className="faq_container">
      <div className="modal__title">
        <h3 >
          {isCreate ? "Create new" : "Edit"}
        </h3>
        <div className="modal__row-buttons">
          <FiEdit className={"row-icons"} size={30} onClick={handleSave} />
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

export default FaqPage;