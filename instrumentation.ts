// Діагностика для Hostinger: їхній lsnode пише в логи тільки console.log,
// тож дублюємо туди причину падіння процесу.
export function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  const log = (...args: unknown[]) => console.log("[diag]", ...args);

  log("pid", process.pid, "node", process.version, "PORT", process.env.PORT);
  log("memory", JSON.stringify(process.memoryUsage()));

  process.on("uncaughtException", (err) => log("uncaughtException", err?.stack ?? err));
  process.on("unhandledRejection", (err) => log("unhandledRejection", (err as Error)?.stack ?? err));
  process.on("warning", (w) => log("warning", w.stack ?? w));
  // Next сам завершує процес на цих сигналах, ми лише логуємо.
  for (const signal of ["SIGTERM", "SIGINT"] as const) {
    process.on(signal, () => log("signal", signal));
  }
  process.on("exit", (code) => log("exit", code));
}
