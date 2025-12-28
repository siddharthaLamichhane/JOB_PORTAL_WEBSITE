import React from "react";
import { Navbar } from "../../components/shared/Navbar.jsx";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center  justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Signup</h1>
          <div className="my-4">
            <Label>Full Name</Label>
            <Input type="text" placeholder="siddhartha" />
          </div>
          <div className="my-4">
            <Label>Email</Label>
            <Input type="text" placeholder="siddhartha" />
          </div>
          <div className="my-4">
            <Label>Phone Number</Label>
            <Input type="text" placeholder="98......" />
          </div>
          <div className="my-4">
            <Label>Password</Label>
            <Input type="text" placeholder="siddhartha" />
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
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />

                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </div>
  );
};
