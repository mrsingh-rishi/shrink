import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import heroimage from "../public/heroimage.png";

const LandingPage = () => {
  return (
    <div >
      <Navbar />
      <div className="flex flex-col items-center">
        <Image src={heroimage} className="w-5/6" alt="h" />
      </div>
    </div>
  );
};

export default LandingPage;
