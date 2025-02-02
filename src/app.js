const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const faqRoutes = require('./routes/faqRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/faqs', faqRoutes);

(async () => {
  await sequelize.sync();
  console.log('Database synced');
})();

module.exports = app;