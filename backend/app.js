const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes');

app.use(cors());

app.use(express.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
