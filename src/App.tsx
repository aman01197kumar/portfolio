import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

// import './App.css'

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function App() {
  return (
    <div className="bg-dark">
      <Header />
      <LandingPage />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
