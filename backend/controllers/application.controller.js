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
//admin controller   job created by admin and if he/she want to see who are applicants
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById({ jobId }).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      return res.status(404).json({
        message: "Job Not Found !",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Job found ",
      success: true,
      job,
    });
  } catch (e) {
    console.error("Error Finding Applicants", e);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({
        message: "Status is required",
        success: false,
      });
    }
    //find the applicant by application id
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res.status(404).json({
        message: "Application Not Found !!",
        success: true,
      });
    }
    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({
      message: "Status Updated successfully",
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};
