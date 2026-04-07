import { useState, useEffect, useCallback, useRef } from "react";
import { questionsData, type Question } from "@/data/questions";

const EXAM_TIME = 2100; // 35 minutes
const STORAGE_KEY = "cbt_exam_state";

interface ExamState {
  answers: Record<number, string>;
  currentIndex: number;
  timeLeft: number;
  submitted: boolean;
}

function loadState(): ExamState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return { answers: {}, currentIndex: 0, timeLeft: EXAM_TIME, submitted: false };
}

function saveState(state: ExamState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useExam() {
  const [answers, setAnswers] = useState<Record<number, string>>(loadState().answers);
  const [currentIndex, setCurrentIndex] = useState(loadState().currentIndex);
  const [timeLeft, setTimeLeft] = useState(loadState().timeLeft);
  const [submitted, setSubmitted] = useState(loadState().submitted);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const questions = questionsData;
  const total = questions.length;
  const currentQuestion: Question | undefined = questions[currentIndex];

  // Persist state
  useEffect(() => {
    saveState({ answers, currentIndex, timeLeft, submitted });
  }, [answers, currentIndex, timeLeft, submitted]);

  // Timer
  useEffect(() => {
    if (submitted || total === 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [submitted, total]);

  const selectAnswer = useCallback((questionId: number, option: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  }, [submitted]);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < total) setCurrentIndex(index);
  }, [total]);

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  const submit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSubmitted(true);
  }, []);

  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0), 0);
  const answeredCount = Object.keys(answers).length;

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setAnswers({});
    setCurrentIndex(0);
    setTimeLeft(EXAM_TIME);
    setSubmitted(false);
  }, []);

  return {
    questions, currentQuestion, currentIndex, total,
    answers, answeredCount, selectAnswer,
    goTo, goNext, goPrev,
    timeLeft, submitted, submit, score, reset,
  };
}
