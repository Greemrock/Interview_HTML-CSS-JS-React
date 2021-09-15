import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleAddOne = () => setCounter(counter + 1);
  
  const handleAddTwo = () => {
    setCounter((prew) => prew + 1);
    setCounter((prew) => prew + 1);
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleAddOne}>Add One</button>
      <button onClick={handleAddTwo}>Add Two</button>
    </div>
  );
};