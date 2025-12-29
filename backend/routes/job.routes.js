import express from "express";
import {
  postJob,
  getAllJobs,
  getJobById,
  getAdminJobs,
} from "../controllers/job.controller.js";
import isAuthinticated from "../middlewares/isAuthincated.js";
const router = express.Router();

router.route("/post").post(isAuthinticated, postJob);
router.route("/get").get(isAuthinticated, getAllJobs);
router.route("/get/:id").get(isAuthinticated, getJobById);
router.route("/getadminjobs").get(isAuthinticated, getAdminJobs);

export default router;
