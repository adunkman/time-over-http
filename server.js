const fs = require("fs");
const http = require("http");
const path = require("path");

http.createServer((req, res) => {
  if (req.url === "/") {
    return sendHtml(res);
  }

  if (req.url === "/endpoint") {
    res.writeHead(200);
    return res.end();
  }

  res.writeHead(404);
  return res.end();
}).listen(process.env.PORT || 3000, () => {
  console.log("booted");
});

const sendHtml = (res) => {
  const file = "./public/index.html";
  const stat = fs.statSync(file);
  res.writeHead(200, {
    "Content-Type": "text/html",
    "Content-Length": stat.size
  });

  fs.createReadStream(file).pipe(res);
};
