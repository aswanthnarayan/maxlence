const express = require('express');
// const dotenv = require('dotenv');
const sequelize = require('./models/User').sequelize; // Import sequelize instance
const routes = require('./routes/authRoutes');

// dotenv.config();
const app = express();
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection failed:', err));

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
