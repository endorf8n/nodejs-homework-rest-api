const Joi = require("joi");

const { phoneRegexp } = require("../constants/contact-constants");

const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  favorite: Joi.boolean(),
});

const contactUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  contactAddSchema,
  contactUpdateFavoriteSchema,
};
