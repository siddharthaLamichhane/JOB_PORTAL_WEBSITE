import React from "react";
import { Badge } from "../ui/badge.jsx";
import { Button } from "../ui/button.jsx";

export const JobDescription = () => {
  const isApplied = false;

  return (
    <div className="max-w-7xl mx-auto my-10 p-6 border rounded-lg">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>

          <div className="flex items-center gap-2 mt-4">
            <Badge variant="ghost" className="text-blue-700 font-bold">
              12 Positions
            </Badge>
            <Badge variant="ghost" className="text-blue-700 font-bold">
              Part Time
            </Badge>
            <Badge variant="ghost" className="text-blue-700 font-bold">
              24 LPA
            </Badge>
          </div>
        </div>

        {/* Right Section */}
        <Button disabled={isApplied}>
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium my-8 ">
        Job Description
      </h1>
      <div className="">
        <h1 className="font-bold  my-1">
          Role:
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold  my-1">
          Location:
          <span className="pl-4 font-normal text-gray-800">lalitpur</span>
        </h1>
        <h1 className="font-bold  my-1">
          Description:
          <span className="pl-4 font-normal text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            architecto mollitia voluptatum commodi officiis, vero iste animi
          </span>
        </h1>
        <h1 className="font-bold  my-1">
          Experience:
          <span className="pl-4 font-normal text-gray-800">2 years</span>
        </h1>
        <h1 className="font-bold  my-1">
          Salary:
          <span className="pl-4 font-normal text-gray-800">12LPA</span>
        </h1>
        <h1 className="font-bold  my-1">
          Total Applicants:
          <span className="pl-4 font-normal text-gray-800">4</span>
        </h1>
        <h1 className="font-bold  my-1">
          Posted Date:
          <span className="pl-4 font-normal text-gray-800">1/09/2026</span>
        </h1>
      </div>
    </div>
  );
};
