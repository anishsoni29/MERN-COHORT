const express = require("express");
const app = express();

const users = [
  {
    name: "Anish",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const anishKidneys = users[0].kidneys;
  const numberOfKidneys = anishKidneys.length;

  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < anishKidneys; i++) {
    if (anishKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  //filter
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.listen(3000);
