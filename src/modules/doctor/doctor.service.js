const Doctor = require("./doctor.model");

const createDoctor = async (data, tenantId) => {
  return await Doctor.create({
    ...data,
    tenantId
  });
};

const getDoctors = async (tenantId) => {
  return await Doctor.find({ tenantId });
};

const getDoctorById = async (id, tenantId) => {
  return await Doctor.findOne({
    _id: id,
    tenantId
  });
};

const updateDoctor = async (id, data, tenantId) => {
  return await Doctor.findOneAndUpdate(
    {
      _id: id,
      tenantId
    },
    data,
    { new: true }
  );
};

const deleteDoctor = async (id, tenantId) => {
  return await Doctor.findOneAndDelete({
    _id: id,
    tenantId
  });
};

module.exports = {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
};