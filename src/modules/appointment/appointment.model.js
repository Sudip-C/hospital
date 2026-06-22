const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
      index: true,
    },

    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "SCHEDULED",
        "COMPLETED",
        "CANCELLED",
        "NO_SHOW",
      ],
      default: "SCHEDULED",
    },

    reason: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

appointmentSchema.index({
  tenantId: 1,
  appointmentDate: 1,
});

appointmentSchema.index({
  doctorId: 1,
  appointmentDate: 1,
});

module.exports = mongoose.model(
  "Appointment",
  appointmentSchema
);