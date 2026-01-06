import React from "react";
import { Avatar, AvatarImage } from "../../components/ui/avatar.jsx";
import { Navbar } from "../../components/shared/Navbar.jsx";
import { Button } from "../../components/ui/button.jsx";
import { Badge } from "../../components/ui/badge.jsx";
import { Label } from "../../components/ui/label.jsx";
import { Pen, Mail, Contact } from "lucide-react";
import { AppliedJobTable } from "./AppliedJobTable.jsx";
const Skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git",
  "GitHub",
];

export const Profile = () => {
  const isResume = true;
  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white border border-gray-600 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex item-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src=" https://imgs.search.brave.com/CuQJxPD7EK_4Ami-l73G5-0QUNyn-vuxxTijQu11jsk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzIz/MzIxODAvMTYwMHct/VThwc2ZVSnIyVzQu/anBn"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>Add your bio here</p>
            </div>
          </div>
          <Button className="text-right cursor-pointer" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-6">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>siddhartha@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>1234345556676</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills:</h1>
          <div className="flex items-center gap-2 my-3">
            {Skills.length !== 0 ? (
              Skills.map((item, index) => (
                <Badge variant="outline " key={index}>
                  {item}
                </Badge>
              ))
            ) : (
              <span>Not Applicable</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://youtube.com"
              className="text-blue-700 w-full hover:underline cursor-pointer"
            >
              Siddhartha
            </a>
          ) : (
            <span>Not Applicable</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto  bg-white rounded-2xl border border-gray-600  my-5 p-8">
        <h1>Applied Job</h1>
        {/* Application table */}
        <AppliedJobTable />
      </div>
    </div>
  );
};
