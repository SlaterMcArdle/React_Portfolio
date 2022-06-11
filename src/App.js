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
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
