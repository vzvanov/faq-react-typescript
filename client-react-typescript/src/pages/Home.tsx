import React, { ReactElement } from "react";
import FaqsList from "../components/FaqsList";
import womanDesktop from '../assets/images/illustration-woman-online-desktop.svg';
import bgDesktop from '../assets/images/bg-pattern-desktop.svg';
import womanMobile from '../assets/images/illustration-woman-online-mobile.svg';
import bgMobile from '../assets/images/bg-pattern-mobile.svg';
import LogoBox from '../components/LogoBox';
import LogoFaq from '../components/LogoFaq';
import { Answer } from "../answers";

interface Props {
  answers: Array<Answer>,
}

const Home = ({ answers }: Props): ReactElement => {
  return (
    <>
      <LogoBox />
      <div className="faq">
        <LogoFaq
          classLogo='faq__mobile-log'
          woman={womanMobile}
          bg={bgMobile}
        />
        <LogoFaq
          classLogo='faq__desktop-log'
          woman={womanDesktop}
          bg={bgDesktop}
        />
        <div className="container">
          <h1 className="faq_title">FAQ</h1>
          <FaqsList
            answers={answers}
          />
        </div>
      </div>
    </>
  );
};

export default Home;