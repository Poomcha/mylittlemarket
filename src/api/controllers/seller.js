const db = require('../../db/models/index');

const getSeller = (req, res, next) => {
  db.Seller.findByPk(req.params.sellerId)
    .then((seller) => res.status(200).json(seller))
    .catch((err) => res.status(404).json(err));
};

const createSeller = (req, res, next) => {
  db.Seller.create({
    ...req.params,
    name: req.params.name || req.params.telegram.username,
  })
    .then((seller) => res.status(200).json(seller))
    .catch((err) => res.status(404).json(err));
};

const patchSeller = (req, res, next) => {
  db.Seller.upsert(
    {
      id: req.params.id,
      ...params,
    },
    { fields: 'name' }
  )
    .then(([seller, created]) =>
      created ? res.status(200).json(seller) : res.status(500)
    )
    .catch((err) => res.status(404).json(err));
};
const deleteSeller = (req, res, next) => {
  db.Seller.destroy({ where: { id: req.params.sellerId } })
    .then((n) => (n === 1 ? res.status(200) : res.status(500)))
    .catch((err) => res.status(404).json(err));
};

module.exports = {
  getSeller,
  createSeller,
  patchSeller,
  deleteSeller,
};
