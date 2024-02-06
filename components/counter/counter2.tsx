"use client";
import React, { useState, useEffect } from 'react';

const Counter2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 600) {
        setCount(count + 1);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [count]);
  

  return (
    
      <p>+{count}</p>
    
  );
};

export default Counter2;



