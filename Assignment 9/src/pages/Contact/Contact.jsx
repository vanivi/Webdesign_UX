import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";

const Contact = () => {
  return (
    <div className="container">
      <Navbar />
      <Card
        header={"Contact"}
        cardContent="
        Contact us at:
        123-456-7890
        "
      />
    </div>
  );
};

export default Contact;
