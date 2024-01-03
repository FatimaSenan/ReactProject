import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import { SignUp } from './components/SignUp';
import { ContactUs } from './components/pages/ContactUs';
import { About } from './components/pages/About';


function App() {
  return (
    <>
      <Router>
      <Navbar  />
      <Routes>
        <Route path='/' exact Component={Home}/> 
        <Route path='/sign-up' Component={Login} />
        <Route path='/contact' Component={ContactUs} />
        <Route path='/about' Component={About} />

        
      </Routes>
      
      </Router>
    </>

    
  );
}

export default App;
