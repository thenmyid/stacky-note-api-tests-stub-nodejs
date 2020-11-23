const express = require('express');
const router = express.Router();

const category = require('../data/category.json')

router.get("/", function (req, res) {
  const categoryId = req.query.categoryId
  res.send({
      statusCode: 200,
      category: category.find(e => e.categoryCode == categoryId)
  });
});

module.exports = router;