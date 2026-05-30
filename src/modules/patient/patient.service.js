const Patient = require("./patient.model");

const createPatient = async (data, tenantId) => {
  return await Patient.create({
    ...data,
    tenantId,
  });
};

const getPatients = async (
  tenantId,
  page = 1,
  limit = 10
) => {
  const skip = (page - 1) * limit;

  const patients = await Patient.find({
    tenantId
  })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Patient.countDocuments({
    tenantId
  });

  return {
    patients,
    total,
    page,
    pages: Math.ceil(total / limit)
  };
};

const getPatientById = async (id, tenantId) => {
  return await Patient.findOne({
    _id: id,
    tenantId,
  });
};

const updatePatient = async (id, data, tenantId) => {
  return await Patient.findOneAndUpdate(
    {
      _id: id,
      tenantId,
    },
    data,
    {
      new: true,
      runValidators: true,
    }
  );
};

const deletePatient = async (id, tenantId) => {
  return await Patient.findOneAndDelete({
    _id: id,
    tenantId,
  });
};

module.exports = {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};