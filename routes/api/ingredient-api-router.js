const express = require('express');
const router = express.Router()
const ingredientApiController = require('../../controllers/api/ingredient-api-controller');

//Get all ingredients
router.get('/', ingredientApiController.getAll)

//Get one ingredient
router.get('/:id', ingredientApiController.getOne)

//Create one ingredient
router.post('/', ingredientApiController.create)

//Update one ingredient


//Delete on ingredient


module.exports = router;

