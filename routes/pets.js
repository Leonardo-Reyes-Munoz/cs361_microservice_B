const express = require('express');
const router = express.Router();

const {
  getAllPets,
  getPetById,
  getPetBySpecies,
} = require('../controllers/pets');

router.get('/', getAllPets);
router.get('/:id', getPetById);
router.get('/species/:species', getPetBySpecies);

module.exports = router;
