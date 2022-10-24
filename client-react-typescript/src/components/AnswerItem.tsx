import React, { ReactElement } from "react";
import { Answer } from "../answers";
import iconArrowDown from '../assets/images/icon-arrow-down.svg';

const AnswerItem = ({ summary, info }: Omit<Answer, '_id'>): ReactElement => {
  return (
    <details>
      <summary>{summary}
        <img src={iconArrowDown} alt="arrow"></img>
      </summary>
      <p>{info}</p>
    </details>
  );
};

export default AnswerItem;