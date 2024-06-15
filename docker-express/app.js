const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("<h1>Big usestate</h1>"));

app.listen(8000, () => console.log("server running 8000"));
