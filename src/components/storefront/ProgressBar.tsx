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
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="text-sm font-semibold text-primary">Only {current} meters left!</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden border border-border">
        <div
          className="h-full bg-primary transition-all duration-300 relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
