const User = require("../models/User");

const { HttpError } = require("../helpers");

const { ctrlWrapper } = require("../decorators");

const register = async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
