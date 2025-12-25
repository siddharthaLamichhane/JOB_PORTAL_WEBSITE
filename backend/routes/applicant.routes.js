import express from "express";
import isAuthincated from "../middlewares/isAuthincated.js";

import {
  applyJob,
  getApplicants,
  updateStatus,
  getAppliedJobs,
} from "../controllers/application.controller.js";
const router = express.Router();

router.route("/apply/:id").post(isAuthincated, applyJob);
router.route("/get").get(isAuthincated, getAppliedJobs);
router.route("/:id/applicants").get(isAuthincated, getApplicants);
router.route("/status/:id/update").post(isAuthincated, updateStatus);

export default router;
