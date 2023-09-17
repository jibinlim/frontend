import './App.css';
import Nevbar from './components/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
