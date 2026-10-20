// Готує .next/standalone для Hostinger (Passenger + lsnode).
const fs = require("node:fs");
const path = require("node:path");

const standalone = path.join(".next", "standalone");

fs.cpSync("public", path.join(standalone, "public"), { recursive: true });
fs.cpSync(path.join(".next", "static"), path.join(standalone, ".next", "static"), { recursive: true });

// lsnode пише в логи тільки console.log, тому згенерований Next server.js
// загортаємо: stderr і причини падіння процесу дублюються в stdout.
fs.renameSync(path.join(standalone, "server.js"), path.join(standalone, "next-server.js"));
fs.writeFileSync(
  path.join(standalone, "server.js"),
  `const log = (...args) => console.log("[diag]", ...args);
process.stderr.write = (chunk, ...rest) => process.stdout.write(chunk, ...rest);
log("start pid", process.pid, "node", process.version, "PORT", process.env.PORT, "cwd", process.cwd());
process.on("uncaughtException", (err) => { log("uncaughtException", err && err.stack || err); process.exit(1); });
process.on("unhandledRejection", (err) => log("unhandledRejection", err && err.stack || err));
process.on("exit", (code) => log("exit", code, "memory", JSON.stringify(process.memoryUsage())));
for (const signal of ["SIGTERM", "SIGINT", "SIGHUP"]) {
  process.on(signal, () => { log("signal", signal); process.exit(128); });
}
require("./next-server.js");
`,
);
