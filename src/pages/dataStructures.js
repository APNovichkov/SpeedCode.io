import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "underscore";

// Import utils
import { getDataStructuresUrl } from "./../utils/urlUtils";

// Import components
import MainWrapper from "./../components/mainWrapper";
import AlgoPageHeader from "./../components/algoPageHeader";
import OverviewCardGroup from "./../components/overviewCardGroup";
import Navbar from "./../components/navbar";
import LinksNavbar from "./../components/linksNavbar";

// Set Constants
const dsCategoryToIcon = {
  Basic: "fas fa-stream",
  
};

const DataStructuresPage = (props) => {
  // Get state from link
  const propsFromOutside = props.location.state;

  console.log("Props from outside: ", propsFromOutside);

  const userObject = propsFromOutside && propsFromOutside.userObject;

  console.log("User object: ", userObject);

  const [ds, setDs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // let response = await getAllAlgorithms();
      let response = await axios.get(getDataStructuresUrl());

      console.log(`Response for get all ds:`, response.data);

      // Group by category
      let groupedResponse = _.groupBy(response.data.datastructures, "category");
      let dsByCategory = [];
      for (let category in groupedResponse) {
        dsByCategory.push(groupedResponse[category]);
      }
      console.log(dsByCategory);
      setDs(dsByCategory);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar userObject={userObject}/>
      <LinksNavbar userObject={userObject}/>
      <div className="algorithms-wrapper">
        <AlgoPageHeader />
        <hr className="algo-header-line-break"></hr>
        {ds.map((dsByCategory, index) => {
          let categoryName = dsByCategory[0].category;
          return (
            <OverviewCardGroup
              key={categoryName}
              name={categoryName}
              iconClass={dsCategoryToIcon[categoryName]}
              groupClass={categoryName}
              data={dsByCategory}
              userObject={userObject}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DataStructuresPage;
