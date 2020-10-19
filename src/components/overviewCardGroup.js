import React from "react";

//import components
import OverviewCard from "./overviewCard";

const OverviewCardGroup = (props) => {
  let { name, groupClass, iconClass, data } = props;

  return (
    <div className={`overview-card-group ${groupClass.toLowerCase()}`}>
      <div className="overview-header">
        <span className={`icon ${iconClass}`}></span>
        <span className="h3">{name}</span>
      </div>

      <div className="overview-card-group-cards-wrapper">
        {data.map((card) => {
          return (
            <OverviewCard
              key={card.id}
              name={card.name}
              description={card.description}
              difficulty={card.difficulty}
              attempts={card.attempts}
              groupClass={groupClass.toLowerCase()}
            />
          );
        })}
      </div>
    </div>
    
  );
};

export default OverviewCardGroup;
