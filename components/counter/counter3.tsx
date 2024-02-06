"use client";
import React, { useState, useEffect } from 'react';

const Counter3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 140000) {
        setCount(count + 500);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [count]);
  

  return (
    
      <p>+{count}</p>
    
  );
};

export default Counter3;



