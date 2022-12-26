// index.js
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const fileRouter = require("./routes/file");
const path = require("path");
const app = express();
app.use(cors());

app.use("/file", fileRouter);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now(),
  });
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(4000, () => {
  // 파일이 저장될 upload 디렉토리가 없으면 생성
  const dir = "./upload";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  console.log("server is running!");
});
