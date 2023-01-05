import "./styles.css";
import { useState } from "react";

export default function App() {
  
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
  }
  return (
    <div className="App">
      <h1>Hello Everyone!</h1><br/>
      <h2>This is a simple react app which increase and decrease the count</h2><br/>
      <h2>Click on the buttons to see the magic!</h2>
      <br/>
      
    <div className="count">{count}</div>
    <button onClick = {increment}> Increment </button>
    <button onClick = {decrement}> Decrement </button>
    </div>
  );
}

