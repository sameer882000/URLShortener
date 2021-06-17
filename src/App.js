import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Footer from "./Components/Footer";
import Header from './Components/Header';

function App() {
    return (
      <div className="App">
      <Header />
        <Particles options={particlesOptions} />
        <Footer />
      </div>
    );
}

export default App;
