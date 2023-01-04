import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Booking from './components/BookingPage.js';
import Home from './components/Home.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>

    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/BookingPage" element={<Booking/>} />
      </Routes>
    
    <Footer/>
    
    </>

  );
}

export default App;
