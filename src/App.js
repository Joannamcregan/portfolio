import logo from './logo.svg';
import './App.css';
import { ModeToggle } from './components/ModeToggle';

function App() {
  return (
    <div className="App">
      <div class="flex height-100">
        <div class="buffer-left"></div>
        <div class="width-500 pt-40 shrink-0">
          <header className="App-header">
            <ModeToggle />
              <div className="flex">
                <span>about</span>
                <span>work</span>
                <span>contact</span>
              </div>
            <div className="gentle-divide"></div>
          </header>
        </div>
        <div class="buffer-right"></div>
      </div>
    </div>
  );
}

export default App;
