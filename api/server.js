const express = require("express");
const app = express();
const port = 1840;

const description = require("./controller/controller_desc");

app.use(express.json());

app.use("/desc", description);

app.get("/", (req, res) => {
  console.log("server on ✅");
  res.send("server ready 🐥");
});

app.listen(port, () => console.log(`Server running at port ${port} ✅`));
