import { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="home">
      <div className="home-card">
        <span className="wave">👋</span>
        <h1 className="home-title">Welcome!</h1>
        <p className="home-sub">Richa says hello.</p>
      </div>
    </div>
  );
}

function getMood(count) {
  if (count === 0) return { emoji: '😐', label: 'Zero zone' };
  if (count > 0 && count < 5)  return { emoji: '🙂', label: 'Getting started!' };
  if (count >= 5 && count < 10) return { emoji: '😄', label: 'On a roll!' };
  if (count >= 10) return { emoji: '🔥', label: 'On fire!!' };
  if (count < 0 && count > -5)  return { emoji: '😬', label: 'Going down...' };
  return { emoji: '💀', label: 'Way too low!' };
}

function Counter() {
  const [count, setCount] = useState(0);
  const mood = getMood(count);

  return (
    <div className="counter-page">
      <div className="counter-card">
        <h1 className="counter-title">🎮 Count Game</h1>
        <div className="counter-mood">
          <span className="counter-emoji">{mood.emoji}</span>
          <p className="counter-label">{mood.label}</p>
        </div>
        <h2
          className="counter-number"
          style={{ color: count > 0 ? '#22c55e' : count < 0 ? '#ef4444' : 'var(--text-h)' }}
        >
          {count}
        </h2>
        <div className="counter-btns">
          <button className="btn btn-inc" onClick={() => setCount((p) => p + 1)}>+ Increment</button>
          <button className="btn btn-reset" onClick={() => setCount(0)}>Reset</button>
          <button className="btn btn-dec" onClick={() => setCount((p) => p - 1)}>− Decrement</button>
        </div>
      </div>
    </div>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;