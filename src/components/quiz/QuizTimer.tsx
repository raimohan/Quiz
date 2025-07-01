
"use client";

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface QuizTimerProps {
  duration: number; // in seconds
  onTimeout: () => void;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeout]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-2 font-medium bg-green-100 text-green-800 px-4 py-2 rounded-full shadow-sm">
      <Clock className="h-5 w-5" />
      <span>Time Left: {formatTime(timeLeft)}</span>
    </div>
  );
};

export default QuizTimer;
