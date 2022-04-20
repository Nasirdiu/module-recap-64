const express = require("express");
const { json } = require("express/lib/response");
const app = express();
cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Node heard work node!");
});

const users = [
  { id: 1, name: "Nasir", email: "nasir@gmail.com", phone: "01714771225" },
  { id: 2, name: "sagor", email: "sagor@gmail.com", phone: "01714771225" },
  { id: 3, name: "sumon", email: "sumon@gmail.com", phone: "01714771225" },
  { id: 4, name: "pallob", email: "pallob@gmail.com", phone: "01714771225" },
  { id: 5, name: "redu", email: "redu@gmail.com", phone: "01714771225" },
  { id: 6, name: "arif", email: "arif@gmail.com", phone: "01714771225" },
];

app.get("/users", (req, res) => {
    //filter parameter 
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) => user.name.toLowerCase().includes(search));
    res.send(matched);
  } else {
    res.send(users);
  }
});

//dainamig vabe call kora..
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

//post korer jono use korte hba

app.post("/users", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

//cmd te output daka jabe kaj hose na ki..
app.listen(port, () => {
  console.log("listening on port", port);
});
