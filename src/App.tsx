import React from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

// import './App.css'


function App() {
  return (
    <div className='bg-dark'>
    <Header/>
    <LandingPage/>
    <AboutMe/>
    <Projects/>
    <ContactMe/>
    </div>
  );
}

export default App;
