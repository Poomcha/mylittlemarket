const db = require('../../db/models/index');

const getProductById = (req, res, next) => {
  db.Product.findByPk(req.params.productId)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(404).json(err));
};

const getProducts = (req, res, next) => {
  db.Product.find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(404).json(err));
};

const createProduct = (req, res, next) => {
  db.Product.create({
    ...req.params,
  })
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(404).json(err));
};

const patchProduct = (req, res, next) => {
  db.Product.upsert({
    id: req.params.id,
    ...params,
  })
    .then(([product, created]) =>
      created ? res.status(200).json(product) : res.status(500)
    )
    .catch((err) => res.status(404).json(err));
};

const deleteProduct = (req, res, next) => {
  db.Product.destroy({ where: { id: req.params.productId } })
    .then((n) => (n === 1 ? res.status(200) : res.status(500)))
    .catch((err) => res.status(404).json(err));
};

module.exports = {
  getProductById,
  getProducts,
  createProduct,
  patchProduct,
  deleteProduct,
};
