import React, { FC, ReactElement } from "react";
import FaqsList from "../components/FaqsList";
import womanDesktop from '../assets/images/illustration-woman-online-desktop.svg';
import bgDesktop from '../assets/images/bg-pattern-desktop.svg';
import womanMobile from '../assets/images/illustration-woman-online-mobile.svg';
import bgMobile from '../assets/images/bg-pattern-mobile.svg';
import LogoBox from '../components/LogoBox';
import LogoFaq from '../components/LogoFaq';
import { Faq } from "../faqs";

interface Props {
  faqs: Array<Faq>,
}

const Home = ({ faqs }: Props): ReactElement => {
  return (
    <main>
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
            faqs={faqs}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;