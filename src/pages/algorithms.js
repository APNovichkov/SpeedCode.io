import React, { useState, useEffect } from "react";

import _ from "underscore";

// Import components
import MainWrapper from "./../components/mainWrapper";
import AlgoPageHeader from "./../components/algoPageHeader";
import OverviewCardGroup from "./../components/overviewCardGroup";

// Import data providers
import { getAllAlgorithms } from "./../dataProviders/algorithms";

// Set Constants
const algoTypeToIcon = {
  Sorting: "fas fa-stream",
  Graphs: "fas fa-project-diagram"
};

const AlgorithmsPage = () => {
  const [algos, updateAlgos] = useState([]);

  useEffect(async () => {
    let response = await getAllAlgorithms();

    // Group by category
    let groupedResponse = _.groupBy(response.data.data, "category");
    let algosByCategory = [];
    for (let category in groupedResponse) {
      algosByCategory.push(groupedResponse[category]);
    }
    console.log(algosByCategory);
    updateAlgos(algosByCategory);
  }, []);

  return (
    <div className="algorithms-wrapper">
      <AlgoPageHeader />
      {algos.map((category, index) => {
        let categoryName = category[0].category;
        return (
          <OverviewCardGroup
            name={categoryName}
            iconClass={algoTypeToIcon[categoryName]}
            groupClass={categoryName}
            data={category}
          />
        );
      })}
    </div>
  );
};

export default AlgorithmsPage;
