import './App.css';
import { Header } from './components/Header';
import {About} from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="flex height-100">
        <div class="buffer-left"></div>
        <div class="width-500 pt-40 shrink-0">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div class="buffer-right"></div>
      </div>
    </div>
  );
}

export default App;
