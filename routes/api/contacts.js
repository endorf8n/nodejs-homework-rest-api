const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../decorators");

const schemas = require("../../schemas/contacts");

const addContactValidate = validateBody(schemas.contactAddSchema, "post");
const updContactValidate = validateBody(schemas.contactAddSchema, "put");

const router = express.Router();

router.get("/", ctrl.allContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", addContactValidate, ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", updContactValidate, ctrl.updateById);

module.exports = router;
