let timerIntervalId;

const startTimer = (req, res, next) => {
  console.log(req.body.timer);
  if (req.body.timer && !timerIntervalId) {
    timerIntervalId = setInterval(() => {
      console.log("timer is on");
    }, 1000);
    next();
  }
};

const stopTimer = (req, res, next) => {
  console.log(req.body.timer && !timerIntervalId);
  if (!req.body.timer) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
    console.log("timer is off");
    next();
  }
};

module.exports = { startTimer, stopTimer };
