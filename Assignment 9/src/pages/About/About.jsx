import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import "./about.css";
const About = () => {
  return (
    <div className="container">
      <Navbar />
      <Card
        header={"About"}
        cardContent={
          "This is a job board for finding jobs in the tech industry"
        }
      />
    </div>
  );
};

export default About;
