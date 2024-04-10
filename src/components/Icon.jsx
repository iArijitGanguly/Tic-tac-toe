import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  if (name == "cirlce") {
    return <FaRegCircle />;
  } else if (name == "cross") {
    return <FaTimes />;
  } else {
    return <FaPen />;
  }
};

export default Icon;
