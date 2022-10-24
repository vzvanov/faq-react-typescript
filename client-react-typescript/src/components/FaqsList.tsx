import React, { ReactElement } from "react";
import { Answer } from "../answers";
import FaqItem from "./AnswerItem";

interface Props {
  answers: Array<Answer>,
}

const FaqsList = ({ answers }: Props): ReactElement => {
  return (
    <>
      {answers.map(({ _id, summary, info }: Answer): ReactElement =>
        <FaqItem
          key={_id}
          summary={summary}
          info={info}
        />
      )}
    </>
  );
};

export default FaqsList;