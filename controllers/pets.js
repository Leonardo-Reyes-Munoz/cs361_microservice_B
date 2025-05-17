const getAllPets = async (req, res) => {
  res.send('Get all pets');
};

const getPetById = async (req, res) => {
  const { id } = req.params;
  res.send(`Get pet with ID: ${id}`);
};

const getPetBySpecies = async (req, res) => {
  const { species } = req.params;
  res.send(`Get ${species} pet data`);
};

module.exports = {
  getAllPets,
  getPetById,
  getPetBySpecies,
};
