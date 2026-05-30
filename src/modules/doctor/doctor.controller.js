const asyncHandler = require("../../utils/asyncHandler");
const doctorService = require("./doctor.service");

const createDoctor = asyncHandler(async (req, res) => {
  const doctor = await doctorService.createDoctor(
    req.body,
    req.tenantId
  );

  res.status(201).json({
    success: true,
    data: doctor
  });
});

const getDoctors = asyncHandler(async (req, res) => {
  
    const doctors = await doctorService.getDoctors(req.tenantId);

    res.status(200).json({
      success:true,
      data:doctors
    });
  
    
 
});

module.exports = {
  createDoctor,
  getDoctors
};