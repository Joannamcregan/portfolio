import logo from './logo.svg';
import './App.css';
import { ModeToggle } from './components/ModeToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModeToggle />
        <div class="flex">
          <div class="buffer-left"></div>
          <div className="flex width-500 pt-40 margin-x-auto shrink-0">
            <span>about</span>
            <span>work</span>
            <span>contact</span>
          </div>
          <div class="buffer-right"></div>
        </div>
        <div className="gentle-divide"></div>
      </header>
    </div>
  );
}

export default App;
