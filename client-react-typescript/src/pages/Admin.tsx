import React, { Suspense } from "react";
import AnswerListRow from "../components/AnswerListRow";
import { Answer } from "../answers";
import { CgAddR } from 'react-icons/cg';
import { Await, useLoaderData, useNavigate } from "react-router-dom";

const Admin = () => {
  const { answers }: any = useLoaderData();
  const navigate = useNavigate();

  const handleAddButtonClick = (): void => {
    navigate('/answers/new');
  }

  return (
    <>
      <div className="list">
        <div className="list_add">
          <CgAddR className={"row-icons"} size={30} onClick={handleAddButtonClick} />
        </div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={answers}>
            {
              (resolvedAnswers) => (
                <>
                  {resolvedAnswers.map(({ _id, summary, info }: Answer) =>
                    <AnswerListRow
                      key={_id}
                      _id={_id}
                      summary={summary}
                      info={info}
                    />
                  )}
                </>)
            }
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export { Admin };
