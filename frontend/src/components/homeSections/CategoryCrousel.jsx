import React from "react";
import { Button } from "../ui/button.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Full Stack Developer",
  "Mobile App Developer",
  "DevOps Engineer",
  "UI/UX Designer",
  "Cyber Security",
  "AI / Machine Learning",
];

export const CategoryCrousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {Category.map((cat, index) => (
            <CarouselItem className="md:basic-1/2 lg:basis-1/3">
              <Button variant="outline" className=" rounded-full">
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
