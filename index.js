let app = require("express")();

app.get("/",(req,res) => {
    res.send ("<h1>Main page</h1>");
});

app.listen(80);
