const { json } = require("express");

let timerIntervalId;

const startTimer = (req, res, next) => {
  console.log(req.body.timer);
  if (req.body.timer) {
    timerIntervalId = setInterval(async () => {
      const response = await fetch(
        "https://soy-crc-10-fsp-33-rest-api.azurewebsites.net/always-on"
      );
      const data = await json(response);
      console.log(data);
      console.log("timer is on");
    }, 1000 * 60 * 5);
    next();
  }
};

const stopTimer = (req, res, next) => {
  console.log(req.body.timer);
  if (!req.body.timer) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
    console.log("timer is off");
    next();
  }
};

module.exports = { startTimer, stopTimer };
