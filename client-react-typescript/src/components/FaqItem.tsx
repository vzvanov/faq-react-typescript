import React, { ReactElement } from "react";
import { Faq } from "../faqs";
import iconArrowDown from '../assets/images/icon-arrow-down.svg';

const FaqItem = ({ summary, info }: Omit<Faq, '_id'>): ReactElement => {
  return (
    <details>
      <summary>{summary}
        <img src={iconArrowDown} alt="arrow"></img>
      </summary>
      <p>{info}</p>
    </details>
  );
};

export default FaqItem;