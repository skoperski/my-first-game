import { useState } from "react";

export const MainCounter = () => {
  const [counter, setCounter] = useState(0);
  const [upgrade, setUpgrade] = useState(0);
  //increase counter
  const increase = () => {
    setCounter((count) => count + upgrade);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  //reset counter
  const upgradeCounter = () => {
    setUpgrade((count) => count + 1);
  };

  const finalValue = () => {
    return counter + upgrade;
  };
  console.log("COUNTER", counter);
  console.log("UPGRADE", upgrade);

  return (
    <div className="counter__container">
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <button className="upgrade" onClick={upgradeCounter}>
          Upgrade +1
        </button>
      </div>
      <span className="counter__output">{finalValue()}</span>
    </div>
  );
};
