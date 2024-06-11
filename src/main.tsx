import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  return (
    <div
      className="bg-red-500 w-11 h-1"
      onClick={() => setCount((prev) => prev + 1)}
    >
      {count}
    </div>
  );
};
