const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoutes = require("../src/modules/auth/auth.routes");
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hospital Management API Running...");
});
app.use("/api/auth", authRoutes);



module.exports = app;
