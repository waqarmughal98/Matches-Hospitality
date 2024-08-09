const express = require('express');
const connectDb = require('./utils/connectDb.js');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({
  origin: 'https://matches-hospitality-server.vercel.app/'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const authRouter = require('./routes/authRoutes.js');
const packageRouter = require('./routes/packageRoutes.js');
const categoryRouter = require('./routes/categoryRoutes.js');
const teamRouter = require('./routes/teamRoutes.js');
const eventRouter = require('./routes/eventRoutes.js');

app.use('/api/', authRouter);
app.use('/api/package/', packageRouter);
app.use('/api/category/', categoryRouter);
app.use('/api/team/', teamRouter);
app.use('/api/event/', eventRouter);


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
