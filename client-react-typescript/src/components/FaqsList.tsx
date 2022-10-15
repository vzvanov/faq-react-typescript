import React, { ReactElement } from "react";
import { Faq } from "../faqs";
import FaqItem from "./FaqItem";

interface Props {
  faqs: Array<Faq>,
}

const FaqsList = ({ faqs }: Props): ReactElement => {
  return (
    <>
      {faqs.map(({ _id, summary, info }: Faq): ReactElement =>
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