//creating an http server
//express
//node default library

const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnKidney = users[0].kidneys;
  const numberofKidneys = johnKidney.length;
  let numberofhealthyKidneys = 0;

  for (let i = 0; i < johnKidney.length; i++) {
    if (johnKidney[i].healthy) {
      numberofhealthyKidneys = numberofhealthyKidneys + 1;
    }
  }
  const numberofUnhealthyKidneys = numberofKidneys - numberofhealthyKidneys;

  res.json({
    numberofKidneys,
    numberofUnhealthyKidneys,
    numberofhealthyKidneys,
  });
});

app.use(express.json());

// add healthy kidneys
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done ",
  });
});

//convert unhealthy kidneys to healthy kineys
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

//removing all the unhealthy kidneys
app.delete("/", function (req, res) {
  // if you have not unhealthy kidneys then return 404 ststus code
  if (isThereatleastOnUnhealthyKidneys()) {
    const newKidney = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidney.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidney;
    res.json({ msg: "Done" });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

function isThereatleastOnUnhealthyKidneys() {
  let atleastOnUnhealthyKidneys = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys.healthy) {
      atleastOnUnhealthyKidneys = true;
    }
  }
  return atleastOnUnhealthyKidneys;
}
app.listen(3000);
