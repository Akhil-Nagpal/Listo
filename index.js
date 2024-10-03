const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
