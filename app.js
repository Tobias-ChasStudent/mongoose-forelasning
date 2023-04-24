require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

//Routes
const ingredientApiRouter = require('./routes/api/ingredient-api-router')
const recipeApiRouter = require('./routes/api/recipie-api-router')
const homeWebRouter = require('./routes/web/home-web-router')
const ingredientWebRouter = require('./routes/web/ingredient-web-router')

console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));

const app = express();

app.engine('hbs', hbs.engine({
    defaultLayout: "main",
    extname: ".hbs"
}))

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

//Use routes
app.use('/', homeWebRouter)
app.use('/ingredients', ingredientWebRouter)


app.use('/api/ingredients', ingredientApiRouter)
app.use('/api/recipes', recipeApiRouter)



const PORT = process.env.PORT

app.listen(PORT, console.log("http://127.0.0.1:"+PORT))