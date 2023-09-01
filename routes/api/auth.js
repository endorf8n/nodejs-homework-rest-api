const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../decorators");

const { authenticate } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

const registerValidateMiddleware = validateBody(schemas.userRegisterSchema);
const loginValidateMiddleware = validateBody(schemas.userLoginSchema);

router.post("/register", registerValidateMiddleware, ctrl.register);

router.post("/login", loginValidateMiddleware, ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
