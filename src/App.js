import './App.css';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="flex height-100">
        <div className="buffer-left"></div>
        <div id="content-section">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
        <div className="buffer-right"></div>
      </div>
    </div>
  );
}

export default App;
