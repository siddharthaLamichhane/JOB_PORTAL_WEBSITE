import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(404).json({
        message: "Error id is required !!",
        success: false,
      });
    }

    // check the user already applied or not to this job already applied then dont allow him again
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(404).json({
        message: "You have already Apply for this job",
        success: false,
      });
    }
    //check is if the job exist
    const job = await Job.findById({ jobId });
    if (!job) {
      return (
        res.status(404),
        json({
          message: "Job not Found",
          success: false,
        })
      );
    }
    //create a new applications
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message: "Job applied succesfully",
      success: true,
    });
  } catch (e) {
    console.error("Error while Applying To Job");
  }
};

export const getAlliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.findById({ applicant: userId })
      .sort({
        createdAt: -1, //ascending order
      })
      .populate({
        path: "Job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application) {
      return res.status(404).json({
        message: "Job Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Job Found ",
      application,
      success: true,
    });
  } catch (e) {
    console.error("Error while  getting Applied Jobs");
  }
};
