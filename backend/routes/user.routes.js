import express from "express";
import { upload } from "../middlewares/multer.js";

import {
  register,
  logout,
  login,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthincated from "../middlewares/isAuthincated.js";
const router = express.Router();

router.post("/register", upload.single("file"), register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.post(
  "/profile/update",
  isAuthincated,
  upload.single("file"),
  updateProfile
);

export default router;
