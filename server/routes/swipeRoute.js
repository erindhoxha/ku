const express = require("express");

const router = express.Router();

router.post("/swipe", (req, res) => {
  if (req.body === "Success") {
    // do something
  } else {
    // do something else
    res.send("Deleted from database");
  }
});
