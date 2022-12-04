const express = require("express");
const app = express();
const port = process.env.PORT || 3011;


app.get("/", (req, res) => res.send("Hellow Timer on Bella!"));

app.listen(port, () => console.log(`Port is running on port ${port}`));