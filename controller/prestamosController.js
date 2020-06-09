exports.home = (req, res, next) => {
  res.render("amortizacion");
};

exports.calculoA = (req, res, next) => {
  const { prestamo, anios, interes } = req.body;
  let meses = parseFloat(anios) * 12;
  meses = Math.round(meses);

  let _interes = parseFloat(interes) / 100;

  let cuotas = [];
  let deudas = [];
  let cuota1 = (prestamo * _interes) / (1 - Math.pow(1 + _interes, -meses));
  let deuda1 = prestamo - cuota1;

  for (let index = meses; index >= 1; index--) {
    cuotas.push(prestamo * _interes) / (1 - Math.pow(1 + _interes, -meses));
  }
  res.render("calc_tabla", { cuotas });
};
