import { useExam } from "@/hooks/useExam";
import { QuestionCard } from "@/components/QuestionCard";
import { QuestionNavigator } from "@/components/QuestionNavigator";
import { ExamTimer } from "@/components/ExamTimer";
import { ExamResults } from "@/components/ExamResults";
import { useState } from "react";

const Index = () => {
  const exam = useExam();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = () => {
    if (exam.answeredCount < exam.total) {
      setShowConfirm(true);
    } else {
      exam.submit();
    }
  };

  if (exam.total === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-lg text-muted-foreground">No questions loaded. Add questions to the data file.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold text-foreground">CBT Exam</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {exam.answeredCount}/{exam.total} answered
            </span>
            {!exam.submitted && (
              <button onClick={handleSubmit} className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                Submit Test
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 p-4">
        {/* Navigator sidebar */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-20 rounded-xl border border-border bg-card p-4 shadow-sm">
            <QuestionNavigator
              questions={exam.questions}
              currentIndex={exam.currentIndex}
              answers={exam.answers}
              onNavigate={exam.goTo}
              submitted={exam.submitted}
            />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          {exam.submitted && (
            <div className="mb-6">
              <ExamResults score={exam.score} total={exam.total} answeredCount={exam.answeredCount} onReset={exam.reset} />
            </div>
          )}

          {exam.currentQuestion && (
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <QuestionCard
                question={exam.currentQuestion}
                total={exam.total}
                selectedAnswer={exam.answers[exam.currentQuestion.id]}
                onSelect={(opt) => exam.selectAnswer(exam.currentQuestion!.id, opt)}
                submitted={exam.submitted}
              />

              {/* Timer below question */}
              <div className="mt-6 flex justify-center">
                <ExamTimer timeLeft={exam.timeLeft} />
              </div>

              {/* Navigation */}
              {!exam.submitted && (
                <div className="mt-5 flex items-center justify-between">
                  <button
                    onClick={exam.goPrev}
                    disabled={exam.currentIndex === 0}
                    className="rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground transition hover:bg-secondary disabled:opacity-30"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={exam.goNext}
                    disabled={exam.currentIndex === exam.total - 1}
                    className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-30"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile navigator */}
          <div className="mt-4 rounded-xl border border-border bg-card p-4 shadow-sm md:hidden">
            <QuestionNavigator
              questions={exam.questions}
              currentIndex={exam.currentIndex}
              answers={exam.answers}
              onNavigate={exam.goTo}
              submitted={exam.submitted}
            />
          </div>
        </main>
      </div>

      {/* Confirm dialog */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm">
          <div className="mx-4 max-w-sm rounded-xl bg-card p-6 shadow-2xl">
            <h3 className="mb-2 text-lg font-bold text-foreground">Submit Test?</h3>
            <p className="mb-5 text-sm text-muted-foreground">
              You have {exam.total - exam.answeredCount} unanswered question(s). Submit anyway?
            </p>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)} className="flex-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary">
                Cancel
              </button>
              <button onClick={() => { setShowConfirm(false); exam.submit(); }} className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
