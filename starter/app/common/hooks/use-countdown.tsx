// useCountdown.ts
import { useState, useEffect } from "react";

export const useCountdown = (targetCountDownTime: number) => {
  const [timeLeft, setTimeLeft] = useState(targetCountDownTime);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsComplete(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const resetCountdown = () => {
    setTimeLeft(targetCountDownTime);
    setIsComplete(false);
  };

  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return [minutes, seconds, isComplete, resetCountdown] as const;
};