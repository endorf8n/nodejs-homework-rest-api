const { Schema, model } = require("mongoose");

const { phoneRegexp } = require("../constants/contact-constants");

const { handleValidateError, runUpdateValidators } = require("./hooks");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      match: phoneRegexp,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleValidateError);

contactSchema.pre("findOneAndUpdate", runUpdateValidators);

contactSchema.post("findOneAndUpdate", handleValidateError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
