// Backend simple con Express para recibir datos del formulario
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/form', (req, res) => {
  // Recibe los datos del formulario y los devuelve como JSON
  res.json({
    recibido: true,
    datos: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
