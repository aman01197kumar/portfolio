
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
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
