const Joi = require("joi");

const {
  emailRegexp,
  subscriptionValuesList,
} = require("../constants/user-constants");

const userRegisterSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid(...subscriptionValuesList),
});

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  updateSubscriptionSchema,
};
