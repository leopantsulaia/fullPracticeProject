import React, { useRef, useState } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef();

  function startTime() {
    timerId.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }

  function stopTime() {
    clearInterval(timerId.current);
  }

  return (
    <div className="p-12 mx-auto space-y-4 max-w-[300px]">
      <div className="font-bold text-center text-3xl">Timer: {seconds}s</div>
      <div className="flex justify-between">
        <button onClick={stopTime} className="text-amber-500 font-bold">
          Stop
        </button>
        <button onClick={startTime} className="text-green-500 font-bold">
          Start
        </button>
      </div>
    </div>
  );
}
