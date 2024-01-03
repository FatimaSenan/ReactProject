import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import { SignUp } from './components/SignUp';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Router>
      <Navbar  />
      <Routes>
        <Route path='/' exact Component={Home}/> 
      </Routes>
      
      </Router>
    </>

    
  );
}

export default App;
