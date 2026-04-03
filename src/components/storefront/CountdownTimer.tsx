import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  className?: string;
}

export function CountdownTimer({ className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();
      return {
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MINUTES' },
    { value: timeLeft.seconds, label: 'SECONDS' },
  ];

  return (
    <div className={`flex gap-8 items-center justify-center ${className}`}>
      {units.map((unit, i) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-primary/30 bg-secondary/20 flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-4xl font-bold text-primary font-['Playfair_Display'] drop-shadow-lg">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse opacity-50"></div>
          </div>
          <span className="text-xs text-primary font-semibold mt-2 tracking-wider">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
