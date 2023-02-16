const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

// Get all orders
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM orders", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/", (req, res) => {
  try {
    con.query(
      `INSERT INTO users VALUES(default, '${req.body.userId}', '${req.body.productId}')`,
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



// Get Specific order based on id
router.get("/:orderId", (req, res) => {
  try {
    con.query("SELECT * FROM users where orderId =" + req.params.orderId, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
