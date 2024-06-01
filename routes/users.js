const express = require("express");
const auth = require("../middleware/validation");
const bcrypt = require("bcrypt");
const userController = require("../controller/user");
const validate = require("../helper/validate");
const router = express.Router();

router.get("/checkSession", auth, userController.authentication);

router.post("/signUp", [validate.signUp], userController.signUp);

router.post("/signIn", userController.userLogin);

router.post("/updateInfo", auth, userController.updateUserInfo);

router.post("/passwordGenrator", async (req, res, next) => {
  let password = req.body.password;
  const salt = await bcrypt.genSalt(10);

  password = await bcrypt.hash(password, salt);
  return res.status(201).json(password);
});

// forget Password
router.post("/forgetPassword", userController.forgetPassword);

// reset Password
router.post("/resetPassword", userController.resetPassword);
module.exports = router;
