import React from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Symbols from './components/Symbols';


function App() {
  return (
        <div>
        <Navbar />
        <Hero />
        <About />
        <Symbols />
        </div>
      
        
    
  );
}

export default App;

