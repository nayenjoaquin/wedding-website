"use client";

import { useEffect, useState } from "react";

export const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const weddingDate = Date.parse("2025-09-30T00:00:00"); // Target date
      const currentDate = Date.now(); // Current date and time
      const difference = weddingDate - currentDate; // Calculate time difference

      if (difference <= 0) {
        // If the countdown is finished or the date has passed
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return; // Exit early to stop further calculations
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown(); // Initial call to set the countdown
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="w-full flex justify-between font-rouge_script text-white">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold">{countdown.days}</div>
        <div className="text-2xl">Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold">{countdown.hours}</div>
        <div className="text-2xl">Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold">{countdown.minutes}</div>
        <div className="text-2xl">Minutes</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold">{countdown.seconds}</div>
        <div className="text-2xl">Seconds</div>
      </div>
    </div>
  );
};
