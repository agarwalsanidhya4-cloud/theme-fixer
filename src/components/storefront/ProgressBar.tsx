interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export function ProgressBar({ current, total, label = 'Fabric Left' }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-300">{label}</span>
        <span className="text-sm font-semibold text-primary">Only {current} meters left!</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
        <div
          className="h-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] transition-all duration-300 relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
