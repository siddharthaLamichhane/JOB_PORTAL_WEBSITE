import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { name, description, location, website } = req.body;

    //Check for missing required field
    if (!name) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    //  Check if company with the same name already exists
    const existingCompany = await Company.findOne({ name });
    if (existingCompany) {
      return res.status(400).json({
        message: "Company name already exists!",
        success: false,
      });
    }

    const company = await Company.create({
      name,
      description,
      location,
      website,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error("Error in registerCompany:", error);
    return res.status(500).json({
      message: "Server error while registering company",
      success: false,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;

    //  Find companies owned by the logged-in user
    const companies = await Company.find({ userId });

    if (!companies || companies.length === 0) {
      return res.status(404).json({
        message: "No company found for this user!",
        success: false,
      });
    }

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.error("Error in getCompany:", error);
    return res.status(500).json({
      message: "Server error while fetching companies",
      success: false,
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.error("Error in getCompanyById:", error);
    return res.status(500).json({
      message: "Server error while fetching company",
      success: false,
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    // Prepare data to update
    const updateData = { name, description, website, location };

    // Update company info
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true, // return the updated document
      runValidators: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found!",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information updated successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error("Error in updateCompany:", error);
    return res.status(500).json({
      message: "Server error while updating company",
      success: false,
    });
  }
};
