import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar';
import Pages from './components/Pages';

function App() {
  return (
    <div className='main-container' style={{backgroundColor: "gray"}}>
      <Navbar />
      <Pages />
      <h1>Welcome to Estuary!</h1>
    </div>
  );
}

export default App;
