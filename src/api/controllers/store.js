const db = require('../../db/models/index');

const getStore = (req, res, next) => {
  db.Store.findByPk(req.params.storeId)
    .then((store) => res.status(200).json(store))
    .catch((err) => res.status(404).json(err));
};

const createStore = (req, res, next) => {
  db.Store.create({
    ...req.params,
  })
    .then((store) => res.status(200).json(store))
    .catch((err) => res.status(404).json(err));
};

const patchStore = (req, res, next) => {
  db.Store.upsert({
    id: req.params.id,
    ...params,
  })
    .then(([store, created]) =>
      created ? res.status(200).json(store) : res.status(500)
    )
    .catch((err) => res.status(404).json(err));
};

const deleteStore = (req, res, next) => {
  db.Store.destroy({ where: { id: req.params.storeId } })
    .then((n) => (n === 1 ? res.status(200) : res.status(500)))
    .catch((err) => res.status(404).json(err));
};

module.exports = {
  getStore,
  createStore,
  patchStore,
  deleteStore,
};
