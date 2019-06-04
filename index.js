const app = require("express")();
const path = require("path");
const PORT = process.env.PORT || 80;

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
