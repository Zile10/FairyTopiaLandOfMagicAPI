const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

// Get all products
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM products", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Create new products
router.post("/", (req, res) => {
  try {
    con.query(
      `INSERT INTO products VALUES(default, '${req.body.name}', '${req.body.description}', ${req.body.price}, ${req.body.categoryId})`,
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

// Get Specific product based on id
router.get("/:productId", (req, res) => {
  try {
    con.query(`SELECT * FROM users where productId = ?`, [req.params.productId], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
