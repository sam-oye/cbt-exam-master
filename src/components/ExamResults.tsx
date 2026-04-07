interface Props {
  score: number;
  total: number;
  answeredCount: number;
  onReset: () => void;
}

export function ExamResults({ score, total, answeredCount, onReset }: Props) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-lg">
      <div className={`mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full text-3xl font-black
        ${percentage >= 50 ? "bg-exam-answered/15 text-exam-answered" : "bg-exam-wrong/15 text-exam-wrong"}`}>
        {percentage}%
      </div>
      <h2 className="mb-1 text-2xl font-bold text-foreground">Exam Complete</h2>
      <p className="mb-6 text-muted-foreground">You scored {score} out of {total}</p>

      <div className="mb-6 grid grid-cols-3 gap-3 text-sm">
        <div className="rounded-lg bg-exam-answered/10 p-3">
          <div className="text-xl font-bold text-exam-answered">{score}</div>
          <div className="text-muted-foreground">Correct</div>
        </div>
        <div className="rounded-lg bg-exam-wrong/10 p-3">
          <div className="text-xl font-bold text-exam-wrong">{answeredCount - score}</div>
          <div className="text-muted-foreground">Wrong</div>
        </div>
        <div className="rounded-lg bg-secondary p-3">
          <div className="text-xl font-bold text-foreground">{total - answeredCount}</div>
          <div className="text-muted-foreground">Skipped</div>
        </div>
      </div>

      <p className="mb-4 text-xs text-muted-foreground">Scroll down to review all questions</p>

      <button onClick={onReset} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
        Retake Exam
      </button>
    </div>
  );
}
