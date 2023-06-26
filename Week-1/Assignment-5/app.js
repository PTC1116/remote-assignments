const express = require("express");
const app = express();

function calc(param) {
  let total = ((1 + param) * param) / 2;
  return total;
}

app.get("/data", (req, res) => {
  let param = req.query.number * 1;
  if (typeof req.query.number === "undefined" || param === 0) {
    res.send("<h1>Lack of Parameter</h1>");
  } else if (Number.isInteger(param)) {
    let total = calc(param);
    res.send(`<h1>${total}</h1>`);
  } else {
    res.send("<h1>Wrong Parameter</h1>");
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
