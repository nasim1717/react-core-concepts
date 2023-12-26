import React, { useState } from "react";

const Counter = () => {
  let i = 0;
  const [counter, setCounter] = useState(0);

  const addFive = () => {
    while (i < 5) {
      setCounter((preState) => preState + 1);
      i += 1;
    }
  };
  return (
    <div>
      {counter}
      <p>
        <button type="button" onClick={() => setCounter((preState) => preState + 1)}>
          Add 1
        </button>
      </p>
      <p>
        <button type="button" onClick={addFive}>
          Add 5
        </button>
      </p>
    </div>
  );
};

export default Counter;
