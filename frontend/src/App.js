import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRespuesta('Enviando...');
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, mensaje })
      });
      const data = await res.json();
      setRespuesta(JSON.stringify(data, null, 2));
    } catch (err) {
      setRespuesta('Error al enviar: ' + err);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2em auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required />
        <label>Mensaje:</label>
        <input type="text" value={mensaje} onChange={e => setMensaje(e.target.value)} required />
        <button type="submit">Enviar</button>
      </form>
      <div style={{ marginTop: '2em', whiteSpace: 'pre-wrap' }}>{respuesta}</div>
    </div>
  );
}

export default App;
