import React, { useState } from "react";
import PTag from "./PTag";
import CustomizedButton from "./Button";

const CounterComponent = ({  }) => {
  const [count, setCount] = useState(1);
  const [time, setTime] = useState(1);
  return (
    <div>
      <PTag count={count} />
      <PTag time={time} />
      <CustomizedButton
        setCount={setCount}
        count={count}
        time={time}
        size={"150px"}
        setTime={setTime}
      />
    </div>
  );
};

export default CounterComponent;
//both are use state counter and incdec = increment and decrement
