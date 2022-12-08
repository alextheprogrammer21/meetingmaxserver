const express = require("express");
const app = express();
const port = 5000;
var path = require("path");

app.get("/", (req, res) => {
  res.json({ name: "value" });
});

app.get("/deck", (req, res) => {
  res.json({
    deck: [
      "A♥",
      "2♥",
      "3♥",
      "4♥",
      "5♥",
      "6♥",
      "7♥",
      "8♥",
      "9♥",
      "10♥",
      "J♥",
      "Q♥",
      "K♥",
      "A♠",
      "2♠",
      "3♠",
      "4♠",
      "5♠",
      "6♠",
      "7♠",
      "8♠",
      "9♠",
      "10♠",
      "J♠",
      "Q♠",
      "K♠",
      "A♦",
      "2♦",
      "3♦",
      "4♦",
      "5♦",
      "6♦",
      "7♦",
      "8♦",
      "9♦",
      "10♦",
      "J♦",
      "Q♦",
      "K♦",
      "A♣",
      "2♣",
      "3♣",
      "4♣",
      "5♣",
      "6♣",
      "7♣",
      "8♣",
      "9♣",
      "10♣",
      "J♣",
      "Q♣",
      "K♣",
    ],
  });
});
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
