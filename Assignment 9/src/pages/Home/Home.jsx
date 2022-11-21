import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Card
        header={"Welcome to the Job Board"}
        cardContent={
          "This is a job board for finding jobs in the tech industry"
        }
      />
    </div>
  );
};

export default Home;
