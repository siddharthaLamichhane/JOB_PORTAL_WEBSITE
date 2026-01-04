import React from "react";
import { Badge } from "../../ui/badge.jsx";
export const LatestJobCards = () => {
  return (
    <div className="gap-5 rounded-medium shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1>Company Name</h1>
        <p>Nepal</p>
      </div>
      <div>
        <h1>Job Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          laboriosam?
        </p>
      </div>
      <div>
        <Badge className="text-blue-700 font-bold " variant="outline">
          12 Positions
        </Badge>
        <Badge className="text-[#F83002] " variant="outline">
          Part Time
        </Badge>
        <Badge className="text-[#79dd80] font-bold " variant="outline">
          24LPA
        </Badge>
      </div>
    </div>
  );
};
