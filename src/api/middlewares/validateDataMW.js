const { validateData } = require('../utils/utils');

const validateDataMW = (req, res, next) => {
  const data = req.headers.data;
  if (validateData(data)) {
    console.log("Data OK!");
    next();
  } else {
    res.status(401).json({ message: '401: Unhautorized' });
  }
};

module.exports = validateDataMW;
