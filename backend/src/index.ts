import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(3003, () => console.log("SErver running"));
