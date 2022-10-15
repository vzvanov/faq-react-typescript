import React, { ReactElement } from "react";

interface Props {
  classLogo: string,
  woman: string,
  bg: string,
}

const LogoFaq = ({ classLogo, woman, bg }: Props): ReactElement => {
  return (
    <div className={classLogo}>
      <img className='faq__img-logo' src={woman} alt="title" />
      <img className='faq__img-shadow' src={bg} alt="title shadow" />
    </div>
  );
};

export default LogoFaq;