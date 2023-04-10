import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="flex justify-start gap-5">
        <button
          className="border-2 border-purple-300 px-3 py-2 rounded-md"
          onClick={() => setCount((count) => count + 1)}
        >
          ADD
        </button>
        <div>
          <p>count is {count}</p>
        </div>
        <button
          disabled={count === 0}
          className="border-2 border-purple-300 px-3 py-2 rounded-md"
          onClick={() => setCount((count) => count - 1)}
        >
          Minus
        </button>
      </div>
    </div>
  );
};

export default Counter;
