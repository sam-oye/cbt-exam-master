const LOG_KEY = "cbt_exam_log";
const CSV_HEADER = "Date,Time,Score,Total,Percentage,TimeUsed(s)\n";

export function recordResult(score: number, total: number, timeUsed: number) {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB");
  const time = now.toLocaleTimeString("en-GB");
  const pct = Math.round((score / total) * 100);
  const row = `${date},${time},${score},${total},${pct}%,${timeUsed}\n`;
  const prev = localStorage.getItem(LOG_KEY) ?? "";
  localStorage.setItem(LOG_KEY, prev + row);
}

export function downloadLog() {
  const data = localStorage.getItem(LOG_KEY);
  if (!data) return;
  const blob = new Blob([CSV_HEADER + data], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "exam_results.csv";
  a.click();
  URL.revokeObjectURL(a.href);
}
