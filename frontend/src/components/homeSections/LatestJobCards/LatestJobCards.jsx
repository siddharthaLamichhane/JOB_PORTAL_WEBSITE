import React from "react";
import { Badge } from "../../ui/badge.jsx";

export const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-xl shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition-shadow duration-300">
      {/* Company Info */}
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">Nepal</p>
      </div>

      {/* Job Details */}
      <div className="mt-3">
        <h1 className="font-bold text-lg mb-1">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          laboriosam?
        </p>
      </div>

      {/* Job Tags */}
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="outline">
          12 Positions
        </Badge>
        <Badge className="text-[#F83002]" variant="outline">
          Part Time
        </Badge>
        <Badge className="text-[#22c55e] font-bold" variant="outline">
          24 LPA
        </Badge>
      </div>
    </div>
  );
};
