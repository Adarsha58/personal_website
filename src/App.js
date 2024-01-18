import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ThankYou from './pages/Thankyou';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <ThankYou/>
    </div>
  );
}

export default App;
