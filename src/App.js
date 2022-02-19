import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Footer from './Footer';


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
