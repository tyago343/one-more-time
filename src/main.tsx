import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount((prev) => prev + 1)}>{count}</div>;
};
