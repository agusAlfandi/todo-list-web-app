const express = require("express");
const {
  getData,
  updateData,
  getDataById,
  addData,
  deleteData,
} = require("../model/model_desc");
const router = express.Router();

router.get("/", (req, res) => {
  getData(res);
});

router.get("/:id", (req, res) => {
  getDataById(req, res);
});

router.post("/add", (req, res) => {
  addData(req, res);
});

router.post("/update/:id", (req, res) => {
  updateData(req, res);
});

router.post("/delete/:id", (req, res) => {
  deleteData(req, res);
});

module.exports = router;
