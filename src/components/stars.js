import React from "react";

// Define constants
const STAR_CLASS = "fas fa-star";

// Define mappings
const numStarsToLevel = {
  1: "Easy",
  2: "Medium",
  3: "Hard",
  4: "Expert",
};

const Stars = (props) => {
  let { numStars } = props;

  return (
    <span className="stars-wrapper">
      {Array.from(Array(numStars)).map((_, index) => (
        <span key={index} className={STAR_CLASS}></span>
      ))}{" "}
      {numStarsToLevel[numStars]}
    </span>
  );
};

export default Stars;
