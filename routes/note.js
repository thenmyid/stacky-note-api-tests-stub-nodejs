const express = require('express');
const router = express.Router();

const note = require('../data/note.json')

router.get("/list", function (req, res) {
  const stackId = req.query.stackId
  res.send({
      statusCode: 200,
      stackId,
      noteList: note
  });
});

router.get("/summary", function (req, res) {
  res.send({
      statusCode: 200,
      noteSummary: note
  });
});

module.exports = router;