const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth.controller")

authRouter.post("/signup",authController.signupHandler);
authRouter.post("/login",authController.loginHandler);

module.exports = authRouter;
