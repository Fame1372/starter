import React, { useEffect } from "react";
import { useCountdown } from "../../hooks/use-countdown";

interface CountDownTimerProps {
  value: number;
  onClickResendAction: () => void;
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({
  value,
  onClickResendAction,
}) => {
  const targetCountDownTime = value * 1000;
  const [minutes, seconds, isComplete, resetCountdown] =
    useCountdown(targetCountDownTime);

  useEffect(() => {
    if (isComplete) {
      console.log("Countdown complete!");
    }
  }, [isComplete]);

  return (
    <div>
      {!isComplete ? (
        <div className="flex flex-row gap-1">
          <p className="text-gray-400 text-[14px]">دریافت مجدد کد:</p>
          <p className="text-black">{`${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</p>
        </div>
      ) : (
        <button
          onClick={() => {
            resetCountdown();
            onClickResendAction();
          }}
        >
          دریافت مجدد کد{" "}
        </button>
      )}
    </div>
  );
};

export default CountDownTimer;
