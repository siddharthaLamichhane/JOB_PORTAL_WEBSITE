import React from "react";
import { Bookmark } from "lucide-react";
import { Button } from "../../components/ui/button.jsx";
import { Avatar, AvatarImage } from "../../components/ui/avatar.jsx";
import { Badge } from "../../components/ui/badge.jsx";
export const JobCard = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">2 Days Ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-3 py-2">
        <Button variant="outline" className="p-6" size="icon">
          <Avatar>
            <AvatarImage src="https://img.freepik.com/premium-vector/creative-elegant-abstract-minimalistic-logo-design-vector-any-brand-company_1253202-137644.jpg?semt=ais_hybrid&w=740&q=80" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-md text-lg ">Company Name</h1>
          <p className="text-gray-500">Nepal</p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
          numquam voluptas! Modi quos ducimus repudiandae, corporis deleniti
          voluptatem asperiores rerum?
        </p>
      </div>
      <Badge className="text-blue-700 font-bold" variant="ghost">
        12 Positions
      </Badge>
      <Badge className="text-blue-700 font-bold" variant="ghost">
        Part Time
      </Badge>
      <Badge className="text-blue-700 font-bold" variant="ghost">
        24LPA
      </Badge>
      <div className="flex items-center gap-5 mt-4">
        <Button className="" variant="outline">
          Details
        </Button>
        <Button className="bg-[#7209b7] text-white" variant="outline">
          Save For Later
        </Button>
      </div>
    </div>
  );
};
