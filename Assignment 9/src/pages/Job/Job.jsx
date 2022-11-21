import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import "./job.css";
const Job = () => {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      description: "Software Engineer at Google",
    },
    {
      id: 2,
      title: "Software Developer",
      description: "Software Developer at Microsoft",
    },
    {
      id: 3,
      title: "Software Engineer",
      description: "Software Engineer at Amazon",
    },
    {
      id: 4,
      title: "Data Scientist",
      description: "Data Scientist at Facebook",
    },
  ];
  return (
    <div className="container">
      <Navbar />
      <div className="jobs_container">
        {jobs.map((job) => (
          <Card
            key={job.id}
            header={job.title}
            cardContent={job.description}
            isShowButton
          />
        ))}
      </div>
    </div>
  );
};

export default Job;
