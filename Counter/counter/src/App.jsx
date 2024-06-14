import { useState } from "react";
import "./App.css";

function App() {
  const [counterValue, setCounterValue] = useState(0);

  const increaseValue = () => {
    setCounterValue(counterValue + 1);
  };

  const decreaseValue = () => {
    setCounterValue(counterValue - 1);
  };

  const resetValue = () => {
    setCounterValue(0);
  };

  return (
    <>
      counter value {counterValue}
      <hr></hr>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <button onClick={resetValue}>Reset</button>
    </>
  );
}

export default App;
