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
      } else if (requestType === "patch") {
        errorMessage = "missing field favorite";
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
