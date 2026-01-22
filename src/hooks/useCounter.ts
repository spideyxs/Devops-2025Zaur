import { useState } from 'react';

export const useCounter = (startValue: number = 0) => {
  const [counter, setCounter] = useState(startValue);

  const add = () => setCounter(prev => prev + 1);
  const subtract = () => setCounter(prev => prev - 1);
  const clear = () => setCounter(startValue);

  return {
    counter,
    add,
    subtract,
    clear
  };
};
