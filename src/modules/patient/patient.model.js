const mongoose = require("mongoose");

const medicalHistorySchema = new mongoose.Schema(
  {
    diagnosis: {
      type: String,
      required: true
    },
    treatment: String,
    notes: String,
    date: {
      type: Date,
      default: Date.now
    }
  },
  { _id: false }
);
const patientSchema = new mongoose.Schema(
  {
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
      index: true
    },

    firstName: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      required: true
    },

    age: Number,

    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"]
    },

    phone: String,

    email: String,

    address: String,

    medicalHistory: [
        medicalHistorySchema
    ]
  },
  { timestamps: true }
);

patientSchema.index({
  firstName: "text",
  lastName: "text",
  phone: "text"
});

module.exports = mongoose.model(
  "Patient",
  patientSchema
);