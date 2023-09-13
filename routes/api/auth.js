const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../decorators");

const { authenticate, upload } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

const registerValidateMiddleware = validateBody(schemas.userRegisterSchema);
const loginValidateMiddleware = validateBody(schemas.userLoginSchema);
const subscriptionValidateMiddleware = validateBody(
  schemas.updateSubscriptionSchema
);
const emailValidateMiddleware = validateBody(schemas.userEmailSchema);

router.post("/register", registerValidateMiddleware, ctrl.register);

router.get("/verify/:verificationToken", ctrl.verify);

router.post("/verify", emailValidateMiddleware, ctrl.resendVerifyEmail);

router.post("/login", loginValidateMiddleware, ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  subscriptionValidateMiddleware,
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
