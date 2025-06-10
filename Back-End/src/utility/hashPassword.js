const bcrypt=require("bcrypt")
const saltRounds=10;

exports.hashPassword = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw new Error({ "Error hashing password": +error.message });
  }
};
