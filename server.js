const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser');

// Create a new express app instance
const app = express();
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    console.log(req.url)
    next()
})

const categoryRoute = require('./routes/category.js')
const subCategoryRoute = require('./routes/subCategory.js')
const stackRoute = require('./routes/stack.js')
const noteRoute = require('./routes/note.js')

app.use('/category', categoryRoute);
app.use('/sub-category', subCategoryRoute);
app.use('/stack', stackRoute);
app.use('/note', noteRoute);


app.listen(4000, function () {
    console.log("App is listening on port 4000!");
});
