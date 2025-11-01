import express from "express";
import {
  registerCompany,
  getCompany,
  getCompanyById,
  updateCompany,
} from "../controllers/company.controller.js";
import isAuthincated from "../middlewares/isAuthincated.js";

const router = express.Router();

router.route("/register").post(isAuthincated, registerCompany);
router.route("/get").get(isAuthincated, getCompany);
router.route("/update/:id").put(isAuthincated, updateCompany);
router.route("/get/:id").get(isAuthincated, getCompanyById);

export default router;
