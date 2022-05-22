import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import FlagsQuiz from './pages/FlagsQuiz.js';
import WorldHistory from './pages/WorldHistory.js';
import MusicQuiz from './pages/MusicQuiz.js';


function App() {
  return (
    <div className="App">
      <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/flagsQuiz" element={<FlagsQuiz/>} />
        <Route exact path="/worldHistory" element={<WorldHistory/>} />
        <Route exact path="/musicQuiz" element={<MusicQuiz/>} />
      </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
