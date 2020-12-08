import React from "react";
import { Nav } from "react-bootstrap";

// Import Components
import Navbar from "./../components/navbar";
import LinksNavbar from "./../components/linksNavbar";

const DataStructuresPage = () => {
  return (
    <div>
      <Navbar/>
      <LinksNavbar />

      <h3>You are in data structures page</h3>
    </div>
  );
};

export default DataStructuresPage;
