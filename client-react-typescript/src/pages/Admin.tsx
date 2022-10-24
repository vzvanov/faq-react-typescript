import React from "react";
import AnswerListRow from "../components/AnswerListRow";
import { Answer } from "../answers";
import { CgAddR } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";

interface Props {
  answers: Array<Answer>,
  changeCount: number,
  setChangeCount: (changeCount: number) => void,
}

const Admin = ({ answers, changeCount, setChangeCount }: Props) => {
  const navigate = useNavigate();

  const onChangeList = () => {
    setChangeCount(changeCount + 1);
  }

  const handleAddButtonClick = (): void => {
    navigate('/answers/new', { replace: true });
  }

  return (
    <>
      <div className="list">
        <div className="list_add">
          <CgAddR className={"row-icons"} size={30} onClick={handleAddButtonClick} />
        </div>
        {answers.map(({ _id, summary, info }) =>
          <AnswerListRow
            key={_id}
            _id={_id}
            summary={summary}
            info={info}
            onChangeList={onChangeList}
          />
        )}
      </div>
    </>
  );
};

export default Admin;