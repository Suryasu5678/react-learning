import React, { useState } from "react";

const Incdec = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <div>count :{count}</div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Incdec;
//both are use state counter and incdec = increment and decrement
