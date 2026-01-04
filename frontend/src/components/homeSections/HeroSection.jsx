import { Button } from "../ui/button.jsx";
import { Search } from "lucide-react";
export const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span
          className="mx-auto px-4 py-2 rounded-full bg-gray-100
      text-[#F83002]
      font-medium
      "
        >
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold ">
          Search, Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
        <p>
          Find your dream job faster with trusted companies, verified listings,
          and opportunities tailored just for you.
        </p>
        <div
          className="flex w-[40%] 
        shadow-lg
        border-gray-200
        pl-3
        rounded-full
        items-center
        gap-4
        mx-auto
        
        
        "
        >
          <input
            className="outline-none
            border-none
            w-full

          

            "
            type="text"
            placeholder="Find your dream jobs"
          />
          <Button className="rounded-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
