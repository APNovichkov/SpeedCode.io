import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import _ from "underscore";
import { useCookies } from "react-cookie";

// Import utils
import { getDataStructuresUrl } from "./../utils/urlUtils";

// Import components
import ObjectPageHeader from "./../components/objectPageHeader";
import OverviewCardGroup from "./../components/overviewCardGroup";
import Navbar from "./../components/navbar";
import LinksNavbar from "./../components/linksNavbar";

// Import Context
import { UserContext } from "./../context/userProvider";

// Set Constants
const dsCategoryToIcon = {
  Basic: "fas fa-stream",
};

const DataStructuresPage = (props) => {
  // Set Page Parameters
  const [ds, setDs] = useState([]);

  // Cookies and Context
  const [cookie] = useCookies("speedcode-cookiez");
  const [tokenCookie] = useCookies("speedcode-cookiez-token");
  const [userObject, setUserObject] = useContext(UserContext);

  const updateUserObject = () => {
    setUserObject(cookie["speedcode-cookiez"]);
  };

  useEffect(() => {
    updateUserObject();

    const fetchData = async () => {
      let response = await axios.get(getDataStructuresUrl(), {
        headers: { Authorization: `${tokenCookie["speedcode-cookiez-token"]}` },
      });

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
      <Navbar />
      <LinksNavbar />
      <ObjectPageHeader objectType={"ds"} />
      <div className="algorithms-wrapper">
        <hr className="algo-header-line-break"></hr>
        {ds.map((dsByCategory) => {
          let categoryName = dsByCategory[0].category;
          return (
            <OverviewCardGroup
              key={categoryName}
              name={categoryName}
              iconClass={dsCategoryToIcon[categoryName]}
              groupClass={categoryName}
              data={dsByCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DataStructuresPage;
