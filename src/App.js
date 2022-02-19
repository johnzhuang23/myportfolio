import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
