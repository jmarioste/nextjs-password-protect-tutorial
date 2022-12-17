import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1>Home</h1>
          <p>Welcome to NextJS Password Protect Tutorial</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
