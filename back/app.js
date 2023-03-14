const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const db = require("./models");
const passportConfig = require("./passport");

const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch(console.error);
passportConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: false,
  })
);

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/", (req, res) => {
  res.send("hello api");
});

app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("SERVER IS RUNNING");
});
