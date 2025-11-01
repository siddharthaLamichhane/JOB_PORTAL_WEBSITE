import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    // const {name,description,location, website,log,userId}
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        message: "Company name is resuired ",
        success: false,
      });
    }
    const company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "Company name already exist !!",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });
    return res.status(201).json({
      message: "Company register successfully ",
      company,
      success: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const company = await Company.find({ userId });
    if (!company) {
      return res.status(200).json({
        message: "Company Not Found !!",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company Not found ",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    // here cloudinary
    const updateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({
        message: "Company not found !!",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company Inforamtion Updated successfully ",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
