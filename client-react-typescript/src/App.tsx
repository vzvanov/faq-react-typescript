import React, { useEffect, useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

import Admin from './pages/Admin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Answer } from "./answers";
import { AnswerCreatePage } from './pages/AnswerCreatePage';
import { Layout } from './components/Layout';
import AnswerService from './services/AnswerService';
import { AnswerEditPage, answerLoader } from './pages/AnswerEditPage';
import Errorpage from './pages/Errorpage';

function App() {
  const [answers, setAnswers] = useState<Array<Answer>>([]);
  const [changeCount, setChangeCount] = useState<number>(0);

  useEffect(() => {
    AnswerService.getAllAnswers(setAnswers);
  }, [changeCount])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={
        <Home
          answers={answers}
        />}
      />
      <Route path="admin" element={
        <Admin
          answers={answers}
          changeCount={changeCount}
          setChangeCount={setChangeCount}
        />}
      />
      <Route path="/answers/new" element={
        <AnswerCreatePage
          changeCount={changeCount}
          setChangeCount={setChangeCount}
        />}
      />
      <Route path="/answer/:id" element={
        <AnswerEditPage
          changeCount={changeCount}
          setChangeCount={setChangeCount}
        />}
        loader={answerLoader}
        errorElement={<Errorpage />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
