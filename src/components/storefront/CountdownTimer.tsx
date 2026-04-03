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
    <div className={`flex gap-4 items-center ${className}`}>
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 border-2 border-primary rounded-lg px-4 py-3 min-w-[70px] text-center">
              <span className="text-3xl font-bold text-primary font-['Playfair_Display']">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-1">{unit.label}</span>
          </div>
          {i < units.length - 1 && <span className="text-2xl text-primary font-bold">:</span>}
        </div>
      ))}
    </div>
  );
}
