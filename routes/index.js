const utils = require("../utils");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/users", (req, res) => {
  const { query } = req;
  if (query._limit) {
    res.send(utils.generateUsers(query._limit));
    return;
  }
  res.send(utils.generateUsers);
});

module.exports = router;
