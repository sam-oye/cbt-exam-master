interface ExamTimerProps {
  timeLeft: number;
}

export function ExamTimer({ timeLeft }: ExamTimerProps) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isLow = timeLeft < 300;
  const isCritical = timeLeft < 60;

  return (
    <div className={`flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-mono text-lg font-bold tracking-wider transition-colors
      ${isCritical ? "bg-destructive text-destructive-foreground animate-pulse" : isLow ? "bg-exam-timer/15 text-exam-timer" : "bg-secondary text-foreground"}`}>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
}
