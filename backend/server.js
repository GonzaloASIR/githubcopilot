import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {
  console.log('Datos recibidos:', req.body);
  res.json({ mensaje: 'Datos recibidos correctamente', datos: req.body });
});

app.get('/', (req, res) => {
  res.send('API funcionando');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
