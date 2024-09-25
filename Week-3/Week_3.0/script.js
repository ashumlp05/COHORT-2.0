///1. Hashing :- It convert our password to hashed passsword.
const express = require("express");
const jwt = require("jsonwebtoken");

const jwtpass = "12114244";
const app = express();

app.use(express.json());


const ALL_USERS = [
  {
    username: "Ashutosh@gmail.com",
    password: "123",
    name: "ashutosh verma",
  },
  {
    username: "A@gmail.com",
    password: "1234",
    name: "amit verma",
  },
  {
    username: "none@gmail.com",
    password: "12321",
    name: "Abhishek verma",
  },
];

function userExists(username,password) {
  let userExists = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (ALL_USERS[i].username==username && ALL_USERS[i].password == password) {
      userExists = true;
    }
  }
  return userExists;
}

app.post('/signin', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(404).json({ msg: "User doest not exist in our DB" });
  }
  var token = jwt.sign({ username: username }, jwtpass);
  return res.json({ token, });
});

app.get('/users',function(req,res){
  const token=req.headers.authorization;
  const decoder=jwt.verify(token,jwtpass);
  const username=decoder.username;

  res.json({
    user:ALL_USERS
  })
})



app.listen(3000);
