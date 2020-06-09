const express = require("express");

const routes = express.Router();

const prestamosController = require("../controller/prestamosController");
module.exports = function () {
  routes.get("/", prestamosController.home);
  return routes;
};
