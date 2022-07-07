import './App.css';
import SlaterNav from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <SlaterNav />
      <AboutMe />
      <h2>Projects</h2>
      <Projects />
      <Contact />
      <a href="https://www.freepik.com/vectors/blue-geometric">Blue geometric vector created by Harryarts - www.freepik.com</a>
    </div>
  );
}

export default App;
