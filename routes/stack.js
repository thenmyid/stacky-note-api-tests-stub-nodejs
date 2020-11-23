const express = require('express');
const router = express.Router();

const stack = require('../data/stack.json')

router.get("/", function (req, res) {
  const stackId = req.query.stackId
  res.send({
      statusCode: 200,
      stack: stack.find(e => e.stackCode == stackId)
  });
});

router.get("/list", function (req, res) {
  const subCategoryId = req.query.subCategoryId
  res.send({
      statusCode: 200,
      subCategoryId: subCategoryId,
      stackList: stack.filter(e => e.subCategoryCodes.indexOf(subCategoryId) != -1)
  });
});

router.get("/summary", function (req, res) {
  res.send({
      statusCode: 200,
      stackSummary: stack
  });
});


module.exports = router;