import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Products from './Pages/Products';

function App() {

  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>            
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Products" element={<Products/>}/>            
        </Routes>
    </Router>
    </>
  )
  
}
export default App;
