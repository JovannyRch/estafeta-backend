const express = require("express");
const app = express();

app.use(express.json());

app.post("/carrier", (req, res) => {
  console.log(req.body);
  const rates = [
    {
      service_name: "A tu domicilio",
      description: "Envio a domicilio",
      service_code: "shipping",
      phone_required: true,
      currency: "MXN",
      total_price: 100.0,
    },
    {
      service_name: "Estafeta Av Fray Luis de Leon",
      description: "Envio a sucursal",
      service_code: "pickup_123",
      currency: "MXN",
      phone_required: true,
      total_price: 0.0,
    },
    {
      service_name: "Estafeta Av Tecnológico",
      description: "Envio a sucursal",
      service_code: "pickup_124",
      currency: "MXN",
      total_price: 70.0,
    },
    {
      service_name: "Socio #1",
      description: "Envio a sucursal",
      phone_required: true,
      service_code: "socio_121",
      currency: "MXN",
      total_price: 190.0,
    },
  ];
  res.json({
    rates: rates,
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(3001, () => {
  console.log("La aplicación está escuchando en el puerto 3000");
});
