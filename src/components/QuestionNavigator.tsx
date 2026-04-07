import type { Question } from "@/data/questions";

interface Props {
  questions: Question[];
  currentIndex: number;
  answers: Record<number, string>;
  onNavigate: (index: number) => void;
  submitted: boolean;
}

export function QuestionNavigator({ questions, currentIndex, answers, onNavigate, submitted }: Props) {
  // Group by section
  const sections: { name: string; indices: number[] }[] = [];
  let lastSection = "";
  questions.forEach((q, i) => {
    if (q.section !== lastSection) {
      sections.push({ name: q.section, indices: [] });
      lastSection = q.section;
    }
    sections[sections.length - 1].indices.push(i);
  });

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Questions</h3>
      {sections.map((sec) => (
        <div key={sec.name}>
          <p className="mb-1.5 text-xs font-medium text-muted-foreground">{sec.name}</p>
          <div className="flex flex-wrap gap-1.5">
            {sec.indices.map((idx) => {
              const q = questions[idx];
              const isAnswered = q.id in answers;
              const isCurrent = idx === currentIndex;
              const isCorrect = submitted && answers[q.id] === q.correctAnswer;
              const isWrong = submitted && isAnswered && answers[q.id] !== q.correctAnswer;

              let bg = "bg-exam-unanswered text-muted-foreground";
              if (submitted) {
                if (isCorrect) bg = "bg-exam-answered text-accent-foreground";
                else if (isWrong) bg = "bg-exam-wrong text-destructive-foreground";
              } else if (isAnswered) {
                bg = "bg-exam-answered text-accent-foreground";
              }

              return (
                <button
                  key={q.id}
                  onClick={() => onNavigate(idx)}
                  className={`h-9 w-9 rounded-md text-sm font-semibold transition-all
                    ${bg}
                    ${isCurrent ? "ring-2 ring-exam-current ring-offset-1" : ""}
                    hover:opacity-80`}
                >
                  {q.id}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
