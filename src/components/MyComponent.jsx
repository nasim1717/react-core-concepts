import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    console.log("updating document title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    // do the cleanup - stop the timer
    return () => {
      console.log("component unmounted");
      clearInterval(interval);
    };
  }, []);

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
};

export default MyComponent;
