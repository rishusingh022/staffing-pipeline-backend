

const { practitioners } = require('./../services/practitionerServices');

const getPractitioners = (req, res) => {
  console.log(practitioners);
  res.send(practitioners);
};

module.exports = { getPractitioners };