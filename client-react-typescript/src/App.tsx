import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

import { Home, answersLoader } from './pages/Home';
import { Admin } from './pages/Admin';
import NotFound from './pages/NotFound';
import { AnswerCreatePage, createAnswerAction } from './pages/AnswerCreatePage';
import { Layout } from './components/Layout';
import { AnswerEditPage, answerLoader, editAnswerAction } from './pages/AnswerEditPage';
import Errorpage from './pages/Errorpage';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={
        <Home />}
        loader={answersLoader}
        errorElement={<Errorpage />}
      />
      <Route path="admin" element={
        <Admin />}
        loader={answersLoader}
        errorElement={<Errorpage />}
      />
      <Route path="/answers/new" element={
        <AnswerCreatePage />}
        action={createAnswerAction}
        errorElement={<Errorpage />}
      />
      <Route path="/answer/:id" element={
        <AnswerEditPage />}
        loader={answerLoader}
        action={editAnswerAction}
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
