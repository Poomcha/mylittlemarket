const { validateData } = require('../utils/utils');

const validateDataMW = (req, res, next) => {
  const data = req.headers.data;
  const safeData = validateData(data);
  if (safeData.safe) {
    console.log('Data OK!');
    res.status(200).json({ ...safeData });
  } else {
    console.log('Something went wrong...');
    res.status(401).json();
  }
};

module.exports = validateDataMW;
