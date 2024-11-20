import React, { useState } from "react";
import PTag from "./PTag";
import CustomizedButton from "./Button";

const CounterComponent = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <PTag count={count} />
      <CustomizedButton setCount={setCount} count={count} size={"150px"} />
    </div>
  );
};

export default CounterComponent;
//both are use state counter and incdec = increment and decrement
