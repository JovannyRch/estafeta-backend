const express = require("express");
const app = express();

app.use(express.json());

app.post("/carrier", (req, res) => {
  const carriers = [
    {
      service_name: "Estafeta",
      description: "Includes tracking and insurance",
      service_code: "estafeta",
      currency: "MXN",
      total_price: 50.0,
    },
  ];
  res.json(carriers);
});

// Iniciar el servidor en el puerto 3000
app.listen(3001, () => {
  console.log("La aplicación está escuchando en el puerto 3000");
});
