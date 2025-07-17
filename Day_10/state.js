import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); 

  return (
    <div>
      <h1>State Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button><br></br>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;
