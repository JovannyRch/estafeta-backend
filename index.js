const express = require("express");
const app = express();

app.use(express.json());

app.post("/carrier", (req, res) => {
  const carriers = [
    {
      service_name: "Fedex",
      description: "Includes tracking and insurance",
      service_code: "fedex",
      currency: "MXN",
      total_price: 100,
    },
    {
      service_name: "Estafeta",
      description: "Includes tracking and insurance",
      service_code: "estafeta",
      currency: "MXN",
      total_price: 50.0,
    },
    {
      service_name: "DHL",
      description: "Includes tracking and insurance",
      service_code: "dhl",
      currency: "MXN",
      total_price: 75.0,
    },
  ];
  res.json(carriers);
});

// Iniciar el servidor en el puerto 3000
app.listen(3001, () => {
  console.log("La aplicación está escuchando en el puerto 3000");
});
