const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
  // console.log(req.body);
  res.status(200).send(`<h1>Please provide credentials</h1>`);
});

module.exports = router;
