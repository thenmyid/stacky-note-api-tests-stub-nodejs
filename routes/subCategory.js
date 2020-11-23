const express = require('express');
const router = express.Router();

const subCategory = require('../data/subCategory.json')

router.get("/", function (req, res) {
  const subCategoryId = req.body.subCategoryId
  res.send({
      statusCode: 200,
      subCategory: subCategory.find(e => e.code == subCategoryId)
  });
});

router.get("/list", function (req, res) {
  const categoryId = req.query.categoryId
  res.send({
      statusCode: 200,
      categoryId: categoryId,
      subCategoryList: subCategory.filter(e => e.categoryCodes.indexOf(categoryId) != -1)
  });
});

module.exports = router;