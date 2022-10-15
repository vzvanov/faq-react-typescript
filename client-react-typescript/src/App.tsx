import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Admin from './pages/Admin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import FaqService from './services/FaqService';
import { Faq } from "./faqs";
import FaqPage from './pages/FaqPage';

function App() {
  const [faqs, setFaqs] = useState<Array<Faq>>([]);
  const [changeCount, setChangeCount] = useState<number>(0);

  useEffect(() => {
    FaqService.getAllFaqs(setFaqs);
  }, [changeCount])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home
          faqs={faqs}
        />} />
        <Route path="/admin" element={<Admin
          faqs={faqs}
          changeCount={changeCount}
          setChangeCount={setChangeCount}
        />} />
        <Route path="/faq" element={<FaqPage
          changeCount={changeCount}
          setChangeCount={setChangeCount}
          isCreate={true}
        />} />
        <Route path="/faq/:id" element={<FaqPage
          changeCount={changeCount}
          setChangeCount={setChangeCount}
          isCreate={false}
        />} />
        <Route path="*" element={<NotFound>
          <div>
            <h2>This page was not found</h2>
          </div>
        </NotFound>} />
      </Routes>
    </>
  );
}

export default App;
