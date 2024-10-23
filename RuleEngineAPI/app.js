const express = require('express');
const bodyParser = require('body-parser');
const ruleRoutes = require('./routes/ruleRoutes');
const pool = require('./config/database');  // Import the pool here if needed for other operations

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api/rules', ruleRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
