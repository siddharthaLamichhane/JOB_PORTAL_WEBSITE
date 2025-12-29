import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { USER_API_END_POINT } from "../../utils/endpoints.jsx";
import { Navbar } from "../../components/shared/Navbar.jsx";
import { Label } from "../../components/ui/label.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Button } from "../../components/ui/button.jsx";
import { RadioGroup } from "../../components/ui/radio-group.jsx";
import { toast } from "sonner";

export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  //   const changeFileHandler = (e) => {
  //     setInput({ ...input, file: e.target.files?.[0] });
  //   };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (e) {
      console.log("Error while Login", e);
      toast.error(e.response?.data?.message || "Login failed");
    }

    console.log(input);
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center  justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-4">
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="example@email.com"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            />
          </div>

          <div className="my-4">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="siddhartha"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup
              defaultValue="student"
              className="flex items-center my-5 gap-4"
            >
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />

                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            {/* <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="/image/*" type="file" className="cursor-pointer" />
            </div> */}
          </div>

          <Button type="submit" className="w-full my-4">
            Login
          </Button>
          <span>
            New to here ?
            <Link to="/signup" className="text-blue-700">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
