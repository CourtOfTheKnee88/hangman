import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PlayScreen from './PlayScreen';
import GameOver from './GameOver';
import WinScreen from './WinScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playScreen" element={<PlayScreen />} />
        <Route path="/gameOver" element={<GameOver />} />
        <Route path="/winScreen" element={<WinScreen />} />
      </Routes>
    </Router>
  );
}

export default App;