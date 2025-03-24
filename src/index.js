// IMPORTAR BIBLIOTECAS

const express = require("express");
const cors = require("cors");
require("dotenv").config();

// CREAR VARIABLES

const app = express();

// CONFIGURACIÓN
app.use(cors());

// ARRANCAR

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server listening at <http://localhost:${PORT}/>`);
  });
}
