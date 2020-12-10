import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "underscore";

// Import utils
import { getAlgorithmsUrl } from "./../utils/urlUtils";

// Import components
import MainWrapper from "./../components/mainWrapper";
import AlgoPageHeader from "./../components/algoPageHeader";
import OverviewCardGroup from "./../components/overviewCardGroup";
import Navbar from "./../components/navbar";
import LinksNavbar from "./../components/linksNavbar";

// Import data providers
import { getAllAlgorithms } from "./../dataProviders/algorithms";

// Set Constants
const algoTypeToIcon = {
  Sorting: "fas fa-stream",
  Graphs: "fas fa-project-diagram",
};

const AlgorithmsPage = (props) => {
  // Get state from link
  const propsFromOutside = props.location.state;

  console.log("Props from outside: ", propsFromOutside);

  const userObject = propsFromOutside && propsFromOutside.userObject;

  console.log("User object: ", userObject);

  const [algos, setAlgos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // let response = await getAllAlgorithms();
      let response = await axios.get(getAlgorithmsUrl());

      console.log(`Response for get all algorithms:`, response.data);

      // Group by category
      let groupedResponse = _.groupBy(response.data.algorithms, "category");
      let algosByCategory = [];
      for (let category in groupedResponse) {
        algosByCategory.push(groupedResponse[category]);
      }
      console.log(algosByCategory);
      setAlgos(algosByCategory);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar userObject={userObject}/>
      <LinksNavbar />
      <div className="algorithms-wrapper">
        <AlgoPageHeader />
        <hr className="algo-header-line-break"></hr>
        {algos.map((algosByCategory, index) => {
          let categoryName = algosByCategory[0].category;
          return (
            <OverviewCardGroup
              key={categoryName}
              name={categoryName}
              iconClass={algoTypeToIcon[categoryName]}
              groupClass={categoryName}
              data={algosByCategory}
              userObject={userObject}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AlgorithmsPage;
