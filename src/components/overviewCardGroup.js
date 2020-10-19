import React from "react";

//import components
import OverviewCard from "./overviewCard";

const OverviewCardGroup = (props) => {
  let { name, groupClass, iconClass, data } = props;

  return (
    <div className={`overview-card-group ${groupClass.toLowerCase()}`}>
      <h4 className="overview-header h4">
        <span className={`icon ${iconClass}`}></span>
        {name}
      </h4>

      <div className="overview-card-group-cards-wrapper">
        {data.map((card) => {
          return (
            <OverviewCard
              key={card.id}
              name={card.name}
              urlName={card.urlName}
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
