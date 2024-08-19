import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { HashRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/BaseLayout";
import HomePage from "./pages/HomePage";
import DocsLandingPage from "./pages/DocsLandingPage";
import DemosPage from "./pages/DemosPage";
import NoPage from "./pages/NoPage";

import QuickStart from "./pages/Docs/QuickStart";

// TODO: reference this if having redirect or routing issues!!! (also possibly for pages loading in the middle)
// need to do scrollToTop() in the Layout component or smth
// https://stackoverflow.com/questions/73364038/github-pages-is-not-loading-subpage-even-though-url-is-correct
// more explanation here: https://github.com/orgs/community/discussions/36908


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="docs" element={<DocsLandingPage />} />
          <Route path="docs/quickstart" element={<QuickStart />} />
          <Route path="demos" element={<DemosPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
