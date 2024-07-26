import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom";

import HomePage from './pages/HomePage';
import DocsPage from "./pages/DocsPage";
import DemosPage from "./pages/DemosPage";

function App() {
  return (
    <HomePage />

    /* <Route path="/" component={App} />
    <Route path="/docs" component={DocsPage} />
    <Route path="/demos" component={DemosPage} /> */
  );
}

export default App;
