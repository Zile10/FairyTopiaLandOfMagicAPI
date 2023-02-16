const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

// Get all categories
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM categories", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Create new categories
router.post("/", (req, res) => {
  try {
    con.query(
      `INSERT INTO categories VALUES(default, '${req.body.category}')`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Get Specific Category based on id
router.get("/:categoryId", (req, res) => {
  try {
    con.query("SELECT * FROM users where categoryId =" + req.params.categoryId, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;