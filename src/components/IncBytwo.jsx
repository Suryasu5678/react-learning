import React, { useState } from "react";
import PTag from "./PTag";

const IncBytwo = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setVal((prev) => prev + 2);
        }}
      >
        +
      </button>
      <PTag count={val} />
    </div>
  );
};

export default IncBytwo;
