const bcrypt = require("bcryptjs");
const Hospital = require("../hospital/hospital.model");
const User = require("../user/user.model");
const generateToken = require("../../utils/generateToken");

const registerHospital = async (data) => {
  const { hospitalName, address, email, password, adminName } = data;

  // Create hospital
  const hospital = await Hospital.create({
    name: hospitalName,
    address,
    email
  });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create admin user
  const adminUser = await User.create({
    tenantId: hospital._id,
    name: adminName,
    email,
    password: hashedPassword,
    role: "ADMIN"
  });

  // Generate JWT
  const token = generateToken({
    userId: adminUser._id,
    role: adminUser.role,
    tenantId: hospital._id
  });

  return { hospital, adminUser, token };
};

const loginUser = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({
    userId: user._id,
    role: user.role,
    tenantId: user.tenantId
  });

  return { user, token };
};

module.exports = {
  registerHospital,
  loginUser
};