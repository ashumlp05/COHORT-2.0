const express = require("express");
const app = express();

function userMiddleware(req,res,next){
  if (username != "ashu" || password != "pass") {
    res.status(400).json({ msg: "Something is not fine " });
  }
  else{
    next();
  }
}

function kidneyMiddleware(req,res,next){
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "Something is not fine in kidneyId" });
  }
  else{
    next();
  }
}

app.get("/health-checkup",userMiddleware,kidneyMiddleware,function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;


  res.json({ msg: "Your kidney is fine !" });
});

app.listen(3000);
