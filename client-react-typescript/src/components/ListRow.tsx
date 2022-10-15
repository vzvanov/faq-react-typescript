import React, { ReactElement } from "react";
import FaqService from "../services/FaqService";
import { FiDelete } from 'react-icons/fi';
import { Faq } from "../faqs";
import { useNavigate } from "react-router-dom";


interface Props extends Faq {
  onChangeList: () => void,
}

const ListRow = ({ _id, summary, info, onChangeList }: Props): ReactElement => {
  const navigate = useNavigate();

  const deleteFaq = (): void => {
    FaqService.deleteFaq(_id);
    onChangeList();
  }

  const handleRowClick = (): void => {
    navigate(`/faq/${_id}`);
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

export default ListRow;
