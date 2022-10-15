import React from "react";
import ListRow from "../components/ListRow";
import { Faq } from "../faqs";
import { CgAddR } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";

interface Props {
  faqs: Array<Faq>,
  changeCount: number,
  setChangeCount: (changeCount: number) => void,
}

const Admin = ({ faqs, changeCount, setChangeCount }: Props) => {
  const navigate = useNavigate();

  const onChangeList = () => {
    setChangeCount(changeCount + 1);
  }

  const handleAddButtonClick = (): void => {
    navigate('/faq');
  }

  return (
    <>
      <div className="list">
        <div className="list_add">
          <CgAddR className={"row-icons"} size={30} onClick={handleAddButtonClick} />
        </div>
        {faqs.map(({ _id, summary, info }) =>
          <ListRow
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