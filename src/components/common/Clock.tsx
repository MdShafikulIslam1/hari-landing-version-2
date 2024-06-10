"use client";
import { useEffect, useState } from "react";

export default function Clock({ variant }: { variant?: "one" | "two" }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      // Check if a new day has started
      if (now.getDate() !== time.getDate()) {
        setTime(now);
      } else {
        // Update time normally if it's still the same day
        setTime(now);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTimeUnit = (unit: number) => String(unit).padStart(2, "0");

  const color = variant === "two" ? "bg-[rgb(36,16,12)]" : "bg-orange-500";

  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-14 h-14 grid place-items-center text-2xl font-bold ${color} rounded-lg shadow-md`}
      >
        {formatTimeUnit(time.getHours())}
      </div>
      <span className="font-bold text-2xl">:</span>

      <div
        className={`w-14 h-14 grid place-items-center text-2xl font-bold ${color} rounded-lg shadow-md`}
      >
        {formatTimeUnit(time.getMinutes())}
      </div>
      <span className="font-bold text-2xl">:</span>

      <div
        className={`w-14 h-14 grid place-items-center text-2xl font-bold ${color} rounded-lg shadow-md`}
      >
        {formatTimeUnit(time.getSeconds())}
      </div>
    </div>
  );
}
