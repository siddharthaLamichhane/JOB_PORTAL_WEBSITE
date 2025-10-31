import jwt from "jsonwebtoken";

const isAuthinticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Not Authenticated !!",
        success: false,
      });
    }

    // Verify token
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    if (!decode) {
      return res.status(401).json({
        message: "Invalid Token",
        success: false,
      });
    }

    // Attach user ID to request for next middleware/controllers
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Authentication failed or token expired",
      success: false,
    });
  }
};

export default isAuthinticated;
