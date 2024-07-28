const express = require('express');
const connectDb = require('./utils/connectDb');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require('./routes/authRoutes.js');
const packageRouter = require('./routes/packageRoutes.js');

app.use('/api/', authRouter);
app.use('/api/package/', packageRouter);


const listenServer = async () => {
  try {
    await connectDb(process.env.MONGO_DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server connection error:', error);
  }
};

listenServer();
