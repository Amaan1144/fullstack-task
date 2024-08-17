const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const cardRoutes = require('./routes/cardRoutes');
const errorHandler = require('./middleware/errorHandler');

//connect env
dotenv.config();
const PORT = process.env.PORT || 5001;

//connect Db
connectDB();

const app = express();
app.use(cors());

//body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// assign routes
app.use('/api', cardRoutes);

// error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
