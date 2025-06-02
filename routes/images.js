const express = require('express');
const router = express.Router();

const { getAllPetImages, getHeroImageById } = require('../controllers/images');

router.get('/', getAllPetImages);
router.get('/:id', getHeroImageById);

module.exports = router;
