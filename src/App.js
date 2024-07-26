import './App.css';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Hobby from './components/Hobby';

function App() {

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Landing />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Hobby />
    </div>
  );
}

export default App;