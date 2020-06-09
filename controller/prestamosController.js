exports.home = (req, res, next) => {
  res.render("amortizacion");
};

exports.calculoA = (req, res, next) => {
  console.log(req.body);
};
