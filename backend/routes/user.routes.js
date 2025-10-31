import express from "express";
import {
  register,
  logout,
  login,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthincated from "../middlewares/isAuthincated.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").patch(isAuthincated, updateProfile);

export default router;
