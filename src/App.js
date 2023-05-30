import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Mainpage from './pages/Mainpage/Mainpage';
import Features from "./components/Features/Features";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/landing" element={<Landing />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
