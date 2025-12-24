import { Job } from "../models/job.model.js";

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
    const jobs=await Job.find.(query)
    if(!jobs){
      return res.status(404).json({
        message:"Job not found",
        success:false

      })
    }
    return res.status(200).json({
      jobs,
      success:true
    })

  } catch (e) {
    console.log("error in getting alljobs", e);
  }
};


export const getJobById=async(req,res)=>{
  try{
    const jobId=req.params.id;
    const job=await Job.findById(jobId);
    if(!job){
      return res.status(404).json({
       message:"Jobs not Found",
       success:fase,


      })
    }
      return res.status(200).json({
        message:"Job Found",
        job,
        success:true
      })
  }catch(e){
    console.error("Error while finding getJob by  Id",e)
  }
}