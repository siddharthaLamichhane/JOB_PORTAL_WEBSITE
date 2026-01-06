import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const jobFilters = [
  {
    title: "Location",
    options: ["Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Remote"],
  },
  {
    title: "Job Type",
    options: ["Full Time", "Part Time", "Internship", "Contract", "Remote"],
  },
  {
    title: "Experience Level",
    options: ["Entry Level", "Mid Level", "Senior Level"],
  },
  {
    title: "Salary Range",
    options: ["Below 20k", "20k - 40k", "40k - 80k", "80k+"],
  },
];

export const Filter = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-lg font-bold">Filter Jobs</h1>
      <hr className="mt-5" />

      {jobFilters.map((data, index) => (
        <RadioGroup key={index}>
          <h1 className="font-bold text-lg">{data.title}</h1>

          {data.options.map((item, idx) => {
            const id = `${data.title}-${item}`;

            return (
              <div key={idx} className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item} id={id} />
                <Label htmlFor={id}>{item}</Label>
              </div>
            );
          })}
        </RadioGroup>
      ))}
    </div>
  );
};
