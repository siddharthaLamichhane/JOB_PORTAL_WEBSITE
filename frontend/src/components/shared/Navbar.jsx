import { Link } from "react-router-dom";
import { Button } from "../ui/button.jsx";
import { User, LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar.jsx";

export const Navbar = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="bg-white border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <h1 className="text-2xl font-bold">
          Job<span className="text-[#f83002]">Portal</span>
        </h1>

        <div className="flex items-center gap-12">
          <ul className="flex items-center font-medium gap-12">
            <li className="cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/browse">Browse</Link>
            </li>
          </ul>

          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SL</AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SL</AvatarFallback>
                  </Avatar>

                  <div>
                    <h4 className="font-medium">Siddhartha Lamichhane</h4>
                    <p className="text-sm text-muted-foreground">
                      Computer Engineer · Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-gray-600">
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <Button variant="link">
                      <Link to="/profile">View Profile</Link>
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <LogOut size={18} />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#240f47]">
                  Signup
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
