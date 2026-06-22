const Appointment = require("./appointment.model");
const Patient = require("../patient/patient.model");
const Doctor = require("../doctor/doctor.model");

const createAppointment = async (
  payload,
  tenantId
) => {
  const patient = await Patient.findOne({
    _id: payload.patientId,
    tenantId,
  });

  if (!patient) {
    throw new Error("Patient not found");
  }

  const doctor = await Doctor.findOne({
    _id: payload.doctorId,
    tenantId,
  });

  if (!doctor) {
    throw new Error("Doctor not found");
  }

  return Appointment.create({
    ...payload,
    tenantId,
  });
};

const getAppointments = async (tenantId) => {
  return Appointment.find({ tenantId })
    .populate(
      "patientId",
      "firstName lastName phone"
    )
    .populate(
      "doctorId",
      "name specialization"
    )
    .sort({ appointmentDate: -1 });
};

const getAppointmentById = async (
  id,
  tenantId
) => {
  return Appointment.findOne({
    _id: id,
    tenantId,
  })
    .populate(
      "patientId",
      "firstName lastName phone"
    )
    .populate(
      "doctorId",
      "name specialization"
    );
};

const updateAppointment = async (
  id,
  payload,
  tenantId
) => {
  return Appointment.findOneAndUpdate(
    {
      _id: id,
      tenantId,
    },
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};

const deleteAppointment = async (
  id,
  tenantId
) => {
  return Appointment.findOneAndDelete({
    _id: id,
    tenantId,
  });
};

const updateStatus = async (
  id,
  status,
  tenantId
) => {
  return Appointment.findOneAndUpdate(
    {
      _id: id,
      tenantId,
    },
    {
      status,
    },
    {
      new: true,
    }
  );
};

module.exports = {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  updateStatus,
};