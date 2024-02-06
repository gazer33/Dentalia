"use client";
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 1300) {
        setCount(count + 1);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [count]);
  

  return (
    
      <p>+{count}</p>
    
  );
};

export default Counter;



