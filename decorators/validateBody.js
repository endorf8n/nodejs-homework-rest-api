const { HttpError } = require("../helpers");

const validateBody = (schema, requestType) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      let errorMessage = "";
      if (requestType === "post") {
        errorMessage = "missing required name field";
      } else if (requestType === "put") {
        errorMessage = "missing fields";
      } else {
        errorMessage = error.message;
      }
      return next(HttpError(400, errorMessage));
    }
    next();
  };
  return func;
};

module.exports = validateBody;

// const { error } = contactsAddSchema.validate(req.body);
// if (error) {
//   throw HttpError(400, "missing fields");
// }

// const { error } = contactsAddSchema.validate(req.body);
// if (error) {
//   throw HttpError(400, "missing required name field");
// }
