require('dotenv').config();
const express = require("express");
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = config.get('port') || 5000;

app.use(cors(
  {
    credentials: true,
    origin: config.get('client_url')
  }
));
app.use(express.json());
app.use('/api', require('./router/index'));

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`));

  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start();
