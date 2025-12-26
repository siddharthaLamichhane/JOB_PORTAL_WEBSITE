import { Link } from "react-router-dom";
import { Button } from "../ui/button.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover.jsx";
export const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <h1 className="text-2xl font-bold">
          Job<span className="text-[#f83002]">Portal</span>
        </h1>

        <div>
          <ul className="flex items-center font-medium gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open PopOver</Button>
                <PopoverContent>hello</PopoverContent>
              </PopoverTrigger>
            </Popover>
          </ul>
        </div>
      </div>
    </div>
  );
};
