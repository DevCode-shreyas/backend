const express = require("express");
const format = require("date-format");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("hello js");
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    userName: "shreyas",
    followers: 44,
    follows: 44,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };
  res.status(200).json(instaSocial);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
