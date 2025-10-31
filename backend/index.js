import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./utils/db.js";
import userRouter from "./routes/user.routes.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  //react url
  origin: "http/localhost:5137",
  credentials: true,
};

app.use(cors(corsOptions));

//api's
app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`app is listening in port ${PORT}`);
});
