import "./styles.css";

import { useState } from "react";

export default function Child() {
  
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
  }
  return (
    <div className="Child" style ={
      {
        fontFamily : "cursive",
        color : "red"
      }
      }>
      
    <div>{count}</div>
    <button onClick = {increment}> Increment  </button>
    <button onClick = {decrement}> Decrement  </button>
    </div>
  );
}