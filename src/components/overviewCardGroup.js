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
        {data.map((dataItem) => {
          return (
            <OverviewCard
              key={dataItem._id['$oid']}
              name={dataItem.name}
              urlName={dataItem.urlName}
              description={dataItem.description}
              longDescription={dataItem.longDescription}
              timeComplexity={dataItem.timeComplexity}
              difficulty={dataItem.difficulty}
              attempts={dataItem.attempts}
              groupClass={groupClass.toLowerCase()}
              code={dataItem.code}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OverviewCardGroup;
