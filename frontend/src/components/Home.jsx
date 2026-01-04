import React from "react";
import { Navbar } from "../components/shared/Navbar.jsx";
import { HomeShare } from "./homeSections/HomeShare.jsx";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeShare />
    </div>
  );
};
