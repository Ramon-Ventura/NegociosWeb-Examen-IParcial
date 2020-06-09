const express = require("express");

const exphbs = require("express-handlebars");

const app = express();

const routes = require("./routes");

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.use("/", routes());

app.listen(7000, () => {
  console.log("Servidor escuchando en el puerto 7000");
});
