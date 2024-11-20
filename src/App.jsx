import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterComponent from "./components/Counter";
import Incdec from "./components/incdec";
import IncBytwo from "./components/IncBytwo";
import UseEffect from "./components/UseEffect";
function App() {
  return (
    <div>
      <CounterComponent />
      {/* <Incdec />
      <IncBytwo /> */}
      <UseEffect/>
    </div>
  );
}

export default App;
