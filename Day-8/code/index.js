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

//query parameters
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

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    message: "Added the Healthy Kidney!",
  });
});

app.listen(3000);
