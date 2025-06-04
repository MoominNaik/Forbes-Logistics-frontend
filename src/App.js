// App.js
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import './index.css';
import Operations from './Pages/Operations.js';
import Careers from './Pages/Careers.js';
import Navbar from './Components/Navbar/Navbar';
import ContactPage from './Pages/ContactPage.js';
import ApplyForm from './Components/ApplyForm/ApplyForm.js'
import './Components/ApplyForm/formStyles.css';
import Footer from './Components/Footer/Footer.js';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* *** ADDED STICKY WRAPPER HERE *** */}
        
        {/* *** END STICKY WRAPPER *** */}

        {/* Routes remain below the sticky header */}

        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "/aboutUs" element = {<AboutUs />}></Route>
          <Route path = "/operations" element = {<Operations />}></Route>
          <Route path = "/careers" element = {<Careers />}></Route>
          <Route path = "/contactUs" element = {<ContactPage />}></Route>
          <Route path = "/apply" element = {<ApplyForm />}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;