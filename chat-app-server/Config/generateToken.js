const jwt = require("jsonwebtoken");

// it takes three things those are [ id, secret, time after that the authentication expires ]
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
