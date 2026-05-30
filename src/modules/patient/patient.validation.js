const { z } = require("zod");

const createPatientSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  age: z.number().optional(),
  gender: z.enum([
    "MALE",
    "FEMALE",
    "OTHER"
  ]),
  phone: z.string(),
  email: z.string().email().optional()
});

module.exports = {
  createPatientSchema
};