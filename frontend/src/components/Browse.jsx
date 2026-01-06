import React from "react";
import { Navbar } from "../components/shared/Navbar.jsx";
import { JobCard } from "../components/Jobs/JobCard.jsx";
const RandomJobs = [1, 2, 3, 4, 5, 7, 8, 9, 10];
export const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 ">
        <h1 className="font-bold text-xl my-10">
          Search Result ({RandomJobs.length})
        </h1>

        <div className="grid grid-cols-3 gap-4 mt-5">
          {RandomJobs.map((items, indx) => {
            return <JobCard />;
          })}
        </div>
      </div>
    </div>
  );
};
