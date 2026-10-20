// Кастомний сервер для Hostinger: їхній менеджер процесів запускає
// вхідний файл напряму й чекає, що він сам відкриє порт з PORT.
const { createServer } = require("node:http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`> Server listening on port ${port}`);
  });
});
