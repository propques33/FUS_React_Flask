// hooks/useTicker.js
import { useEffect, useState } from 'react';

const useTicker = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};

export default useTicker;
