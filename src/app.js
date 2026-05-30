const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require("./modules/auth/auth.routes");
const doctorRoutes = require("./modules/doctor/doctor.routes");
const patientRoutes = require("./modules/patient/patient.route");
const errorMiddleware = require('./middlewares/error.middleware');
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hospital Management API Running...");
});
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use(errorMiddleware)



module.exports = app;
