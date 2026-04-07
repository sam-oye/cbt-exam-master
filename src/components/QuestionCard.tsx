import type { Question } from "@/data/questions";

interface Props {
  question: Question;
  total: number;
  selectedAnswer?: string;
  onSelect: (option: string) => void;
  submitted: boolean;
}

export function QuestionCard({ question, total, selectedAnswer, onSelect, submitted }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="rounded-md bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
          {question.section}
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          Question {question.id} of {total}
        </span>
      </div>

      <p className="text-lg font-medium leading-relaxed text-foreground">
        {question.questionText}
      </p>

      <div className="flex flex-col gap-2.5">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = submitted && option === question.correctAnswer;
          const isWrong = submitted && isSelected && option !== question.correctAnswer;

          let style = "border-border bg-card hover:border-primary/40 hover:bg-primary/5";
          if (submitted) {
            if (isCorrect) style = "border-exam-answered bg-exam-answered/10";
            else if (isWrong) style = "border-exam-wrong bg-exam-wrong/10";
            else style = "border-border bg-card opacity-60";
          } else if (isSelected) {
            style = "border-primary bg-primary/10";
          }

          return (
            <button
              key={option}
              disabled={submitted}
              onClick={() => onSelect(option)}
              className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition-all ${style}`}
            >
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold
                ${isSelected && !submitted ? "border-primary bg-primary text-primary-foreground" :
                  isCorrect ? "border-exam-answered bg-exam-answered text-accent-foreground" :
                  isWrong ? "border-exam-wrong bg-exam-wrong text-destructive-foreground" :
                  "border-muted-foreground/30"}`}>
                {option.charAt(0)}
              </span>
              <span className="text-sm font-medium text-foreground">{option.slice(3)}</span>
              {submitted && isCorrect && <span className="ml-auto text-xs font-bold text-exam-answered">✓ Correct</span>}
              {submitted && isWrong && <span className="ml-auto text-xs font-bold text-exam-wrong">✗ Wrong</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
