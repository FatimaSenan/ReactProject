import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import { SignUp } from './components/SignUp';
import Offer from './components/Offer';
import Offers from './components/pages/Offers';
import { ContactUs } from './components/pages/ContactUs';
import { About } from './components/pages/About';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Router>
      <Navbar  />
      <Routes>
        <Route path='/' exact Component={Home}/> 
        <Route path="/offer" exact Component={Offer}/>
        <Route path="/Offers" exact Component={Offers}/>
        <Route path='/sign-up' Component={Login} />
        <Route path='/contact' Component={ContactUs} />
        <Route path='/about' Component={About} />
      </Routes>
      
      </Router>
    </>

    
  );
}

export default App;
