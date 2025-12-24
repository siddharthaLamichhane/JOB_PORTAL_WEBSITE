import { Job } from "../models/job.model.js";
//admin
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      position,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      salary: Number(salary),
      location,
      jobType,
      position,
      company: companyId,
      applications,
      requirements: requirements.split(","),
      created_by: userId,
    });
    res.status(201).json({
      message: "New job is created",
      success: true,
      job,
    });
  } catch (e) {
    console.log("Error in PostJob", e);
  }
};
//students
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || " ";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    //we will get it later
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({
        createdAt: -1,
      });
    if (!jobs) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (e) {
    console.log("error in getting alljobs", e);
  }
};

//student or job finder
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Jobs not Found",
        success: fase,
      });
    }
    return res.status(200).json({
      message: "Job Found",
      job,
      success: true,
    });
  } catch (e) {
    console.error("Error while finding getJob by  Id", e);
  }
};

// job created by admin to maintain

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.params.id;
    const Jobs = await Job.find({ created_by: adminId })
      .populate({
        path: "created_by",
      })
      .sort({
        createdAt: -1,
      });

    //we will use populate
    if (!Jobs) {
      return res.status(404).json({
        messagea: "Job Not Found !",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Job found",
      Jobs,
      success: true,
    });
  } catch (e) {
    console.error("Error For finding  Job Created by Admin", e);
  }
};
