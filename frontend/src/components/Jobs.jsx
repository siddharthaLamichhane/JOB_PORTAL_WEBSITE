import React from "react";
import { Navbar } from "./shared/Navbar.jsx";
import { Filter } from "./Jobs/Filter.jsx";
import { JobCard } from "./Jobs/JobCard.jsx";

const JobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

export const Jobs = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-6">
          <div className="w-[20%]">
            <Filter />
          </div>

          <div className="flex-1">
            {JobsArray.length === 0 ? (
              <span>Job Not Found!</span>
            ) : (
              <div className="h-[88vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-3 gap-4">
                  {JobsArray.map((items, index) => (
                    <div key={index}>
                      <JobCard />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
