"use client";

import React, { useState, useEffect, useRef } from 'react';

interface CircularTimerProps {
  duration: number;
  onTimeout: () => void;
  size?: number;
  strokeWidth?: number;
  resetKey: number;
}

const CircularTimer: React.FC<CircularTimerProps> = ({
  duration,
  onTimeout,
  size = 60,
  strokeWidth = 6,
  resetKey,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeLeft(duration);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          onTimeout();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetKey, duration, onTimeout]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / duration);
  const offset = circumference - progress * circumference;

  const color = progress > 0.5 ? 'stroke-green-500' : progress > 0.2 ? 'stroke-yellow-500' : 'stroke-red-500';

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-muted"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className={`transition-all duration-300 ${color}`}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xl font-bold text-foreground">
        {timeLeft}
      </span>
    </div>
  );
};

export default CircularTimer;
