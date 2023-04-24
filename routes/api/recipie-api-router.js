const express = require('express');
const router = express.Router()
const recipeApiController = require('../../controllers/api/recipe-api-controller');

router.get('/', recipeApiController.getAll)
router.get('/:id', recipeApiController.getOne)
router.post('/', recipeApiController.create)

module.exports = router