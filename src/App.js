import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

import Layout from "./components/BaseLayout";
import HomePage from "./pages/HomePage";
import DocsPage from "./pages/DocsPage";
import DemosPage from "./pages/DemosPage";
import NoPage from "./pages/NoPage";

export default function App() {
  // TODO: reference this if having redirect or routing issues!!! (also possibly for pages loading in the middle)
    // need to do scrollToTop() in the Layout component or smth
    // https://stackoverflow.com/questions/73364038/github-pages-is-not-loading-subpage-even-though-url-is-correct
    // more explanation here: https://github.com/orgs/community/discussions/36908
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="docs" element={<DocsPage />} />
            <Route path="demos" element={<DemosPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<HomePage />} />
    //       <Route path="docs" element={<DocsPage />} />
    //       <Route path="demos" element={<DemosPage />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);