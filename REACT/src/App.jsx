import { useState } from 'react'
function App() {
  const[count, setCount] = useState(0);
  function Increment(){
    setCount((prev) =>  prev +1);
  }
  function Decrement (){
    setCount ((prev) => prev -1);
  }
  return <>
  <h1> Counter App</h1>
  <h2>Count :{count}</h2>
  <button onClick={Increment}>Increment</button>
  <button onClick={Decrement}>Decrement</button>
  </>
}
export default App;