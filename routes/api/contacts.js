const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../decorators");

const { authenticate, isValidId, upload } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const addContactValidate = validateBody(schemas.contactAddSchema, "post");
const updContactValidate = validateBody(schemas.contactAddSchema, "put");
const updContactFavoriteValidate = validateBody(
  schemas.contactUpdateFavoriteSchema,
  "patch"
);

const router = express.Router();

router.use(authenticate);

router.get("/", ctrl.allContacts);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", upload.single("avatar"), addContactValidate, ctrl.add);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put("/:contactId", isValidId, updContactValidate, ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  isValidId,
  updContactFavoriteValidate,
  ctrl.updateFavorite
);

module.exports = router;
