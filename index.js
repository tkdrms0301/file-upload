// index.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const fileRouter = require("./routes/file");
require("dotenv/config");
const PORT = process.env.PORT || 4000;
const config = require("./config/key");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/file", fileRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(4000, () => {
  // 파일이 저장될 upload 디렉토리가 없으면 생성
  const dir = "./upload";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  console.log("server is running!");
});
