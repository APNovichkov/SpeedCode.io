import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "underscore";

// Import utils
import { getDataStructuresUrl } from "./../utils/urlUtils";

// Import components
import MainWrapper from "./../components/mainWrapper";
import ObjectPageHeader from "./../components/objectPageHeader";
import OverviewCardGroup from "./../components/overviewCardGroup";
import Navbar from "./../components/navbar";
import LinksNavbar from "./../components/linksNavbar";

// Set Constants
const dsCategoryToIcon = {
  Basic: "fas fa-stream",
};

const DataStructuresPage = (props) => {
  // Get state from link
  console.log("Props from redirect: ", props.location.state);
  const userObject = props.location.state.userObject;
  console.log("User object: ", userObject);

  // Set Page Parameters
  const [ds, setDs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(getDataStructuresUrl());

      // Group by DS category
      let groupedResponse = _.groupBy(response.data.datastructures, "category");
      let dsByCategory = [];
      for (let category in groupedResponse) {
        dsByCategory.push(groupedResponse[category]);
      }
      setDs(dsByCategory);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar userObject={userObject} />
      <LinksNavbar userObject={userObject} />
      <div className="algorithms-wrapper">
        <ObjectPageHeader objectType={"ds"} />
        <hr className="algo-header-line-break"></hr>
        {ds.map(dsByCategory => {
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
