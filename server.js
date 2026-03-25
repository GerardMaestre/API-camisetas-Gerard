const express = require('express')
const cors = require('cors');
const app = express();
const PORT = 3000;

const camisetasRoutes = require('./routes/camisetas.routes');
const comandasRoutes = require('./routes/comandas.routes');

app.use(cors());
app.use(express.json());

app.use('/api/camisetas', camisetasRoutes);
app.use('/api/comandas', comandasRoutes);

app.listen(PORT, () => {
    console.log(`API de pruebas en http://localhost:${PORT}`);
});