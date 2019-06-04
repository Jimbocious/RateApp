const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 80;

// app.use(express.static('images'));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});
