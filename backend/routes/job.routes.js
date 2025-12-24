import express from "express";
import {
  postJob,
  getAllJobs,
  getJobById,
  getAdminJobs,
} from "../controllers/job.controllers.js";
import { isAuthinticated } from "../middlewares/isAuthincated.js";
const router = express.Router();

router.route("/post").post(isAuthincated, postJob);
router.route("/get").get(isAuthincated, getAllJobs);
router.route("/get/:id").get(isAuthincated, getJobById);
router.route("/getadminjobs").get(isAuthincated, getAdminJobs);

export default router;
