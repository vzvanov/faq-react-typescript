import React, { useState } from "react";
import { Form } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const NewAnswer = ({ _summary, _info, _id, _action, submitting }) => {
  const [summary, setSummary] = useState(_summary);
  const [info, setInfo] = useState(_info);

  const handleSummaryChange = (e) => {
    const { target: { value: textareaText } } = e;
    setSummary(textareaText);
  };

  const handleInfoChange = (e) => {
    const { target: { value: textareaText } } = e;
    setInfo(textareaText);
  };

  return (
    <Form method="post" action={_action}>
      <div className="modal__row">
        <div className="modal__row-summary">
          <textarea
            className="text"
            placeholder="Summary"
            value={summary}
            rows={2}
            onChange={handleSummaryChange}
            name="summary"
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
            name="info"
          >
          </textarea>
        </div>
      </div>
      {!submitting && <button type="submit" className="btn-input" disabled={submitting} >
        <FiEdit className={"row-icons"} size={30} />
      </button>}
      <input type="hidden" name="id" value={_id} />
    </Form>
  );
};

export default NewAnswer;