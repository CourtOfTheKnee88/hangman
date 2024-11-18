import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowseRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./hosting/src/app.jsx";
import gameOver from "./hosting/src/gameOver.jsx";
import playScreen from "./hosting/src/playScreen.jsx";
import winScreen from "./hosting/src/winScreen.jsx";




function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gameOver" element={<gameOver />} />
        <Route
            path="/playScreen"
            element={<playScreen />}
        />
        <Route path="/winScreen" element={<winScreen />} />
    </Routes>
    </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
