const { heroImages, petImages } = require('../mockStorage/data');

const getAllPetImages = async (req, res) => {
  console.log('Successful request of all pet images received and provided.');
  res.status(200).json(petImages);
};

const getHeroImageById = async (req, res) => {
  const { id } = req.params;
  console.log('Successful request for HeroImage. Image Path provided.');
  res.status(200).json(heroImages[id].path);
};

module.exports = {
  getAllPetImages,
  getHeroImageById,
};
