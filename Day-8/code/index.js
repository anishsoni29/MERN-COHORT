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

app.use(express.json());

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

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  if (jsThereAtleastOneHealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0]; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      message: "Removed all the unhealthy kidneys!",
    });
  } else {
    res.sendStatus(411).json({
      message: "You have no bad kidneys! :)",
    });
  }
});

function isThereAtleastOneHealthyKidney() {
  let atleastOneHealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneHealthyKidney = true;
    }
  }
  return atleastOneHealthyKidney;
}

app.listen(3000);
