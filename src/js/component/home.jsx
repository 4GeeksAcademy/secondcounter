import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0); // Reset to 0
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Update the count every 1 second

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, []);

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2>{count}</h2>
            <button className="btn btn-success mx-3" onClick={increment}>
              Increment
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={decrement}
              disabled={count === 0}
            >
              Decrement
            </button>
            <button className="btn btn-secondary mx-3" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;