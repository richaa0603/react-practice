import { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  const [count, setCount] = useState(0);

  function Increment() {
    setCount((prev) => prev + 1);
  }
  function Decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/navbar">Navbar</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Counter App</h1>
              <h2>{count}</h2>
              <button onClick={Increment}>Increment</button>
              <button onClick={Decrement}>Decrement</button>
            </div>
          }
        />
        <Route path="/navbar" element={<Navbar name="My navbar" />} />
      </Routes>
    </div>
  )
}

export default App