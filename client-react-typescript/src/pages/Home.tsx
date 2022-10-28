import React, { ReactElement, Suspense } from "react";
import FaqsList from "../components/FaqsList";
import womanDesktop from '../assets/images/illustration-woman-online-desktop.svg';
import bgDesktop from '../assets/images/bg-pattern-desktop.svg';
import womanMobile from '../assets/images/illustration-woman-online-mobile.svg';
import bgMobile from '../assets/images/bg-pattern-mobile.svg';
import LogoBox from '../components/LogoBox';
import LogoFaq from '../components/LogoFaq';
import { Await, defer, useLoaderData } from "react-router-dom";
import AnswersService from "../services/AnswersService";

interface Props {

}

const Home = (): ReactElement => {
  const { answers }: any = useLoaderData();

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
          <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={answers}>
              {
                (resolvedAnswers) => (
                  <>
                    {<FaqsList answers={resolvedAnswers} />}
                  </>)
              }
            </Await>
          </Suspense>
        </div>
      </div>
    </>
  );
};

const answersLoader = async () => {
  return defer({
    answers: AnswersService.getAllAnswers(),
  })
}

export { Home, answersLoader };
