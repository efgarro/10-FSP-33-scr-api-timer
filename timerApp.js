const express = require("express");
const app = express();
const port = process.env.PORT || 3011;
const { startTimer, stopTimer } = require("./timerController");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Hellow Bella!"));

app.post("/start-timer", startTimer, (req, res) => {
  res.send("Bella started the Timer!");
});

app.post("/stop-timer", stopTimer, (req, res) => {
  res.send("Bella stopped the Timer!");
});

app.listen(port, () => console.log(`Port is running on port ${port}`));
