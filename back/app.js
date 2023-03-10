const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.write("write test1");
  res.write("write test2");
  res.end("end test");
});
server.listen(3065, () => {
  console.log("SERVER IS RUNNING");
});
