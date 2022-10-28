import React, { ReactElement } from "react";
import { FiDelete } from 'react-icons/fi';
import { Answer } from "../answers";
import { useNavigate } from "react-router-dom";
import AnswersService from "../services/AnswersService";


const AnswerListRow = ({ _id, summary, info }: Answer): ReactElement => {
  const navigate = useNavigate();

  const deleteFaq = async () => {
    await AnswersService.deleteAnswer(_id);
    navigate('/admin', { replace: true });
  }

  const handleRowClick = (): void => {
    navigate(`/answer/${_id}`);
  }

  return (
    <>
      <div className="list__row">
        <div className="list_row-left" onClick={handleRowClick} >
          <p className="list__row-summary">Summary: {summary}</p>
          <p className="list__row-info">Info: {info}</p>
        </div>
        <div className="list__row-buttons">
          <FiDelete className={"row-icons"} size={20} onClick={deleteFaq} />
        </div>
      </div>
      <div className="list_row-devider"></div>
    </>
  );
};

export default AnswerListRow;
