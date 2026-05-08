const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
      index: true
    },

    name: {
      type: String,
      required: true
    },

    specialization: {
      type: String,
      required: true
    },

    experience: {
      type: Number,
      default: 0
    },

    consultationFee: {
      type: Number,
      default: 0
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

// Multi-tenant index
doctorSchema.index({ tenantId: 1, specialization: 1 });

module.exports = mongoose.model("Doctor", doctorSchema);