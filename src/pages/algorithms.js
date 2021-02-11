import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import _ from "underscore";
import { useCookies } from "react-cookie";
import { UserContext } from "./../context/userProvider";

// Import utils
import { getAlgorithmsUrl } from "./../utils/urlUtils";

// Import components
import ObjectPageHeader from "./../components/objectPageHeader";
import OverviewCardGroup from "./../components/overviewCardGroup";
import Navbar from "./../components/navbar";
import LinksNavbar from "./../components/linksNavbar";

// Set Constants
const algoTypeToIcon = {
  Sorting: "fas fa-stream",
  Graphs: "fas fa-project-diagram",
};

const AlgorithmsPage = (props) => {
  // Page Parameters
  const [algos, setAlgos] = useState([]);

  // Cookies and Context
  const [cookie] = useCookies("speedcode-cookiez");
  const [userObject, setUserObject] = useContext(UserContext);

  const updateUserObject = () => {
    setUserObject(cookie["speedcode-cookiez"]);
  };

  useEffect(() => {
    // Update User Object
    updateUserObject();

    // Fetch Data
    const fetchData = async () => {
      let response = await axios.get(getAlgorithmsUrl());

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
      <Navbar />
      <LinksNavbar />
      <div className="algorithms-wrapper">
        <ObjectPageHeader objectType={"algo"} />
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default AlgorithmsPage;
