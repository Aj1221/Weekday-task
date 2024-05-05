import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import TopContent from "../TopContent/TopContent";
import GridComponent from "../GridComponent/GridComponent";

function Home() {
  return (
    <div className="home-container ">
      <div className="row">
        <div className="col-md-4 col-lg-2 col-sm-0">
          <Sidebar />
        </div>
        <div className="col-md-4 col-lg-10 col-sm-10">
          <TopContent />
          <GridComponent />
        </div>
      </div>
    </div>
  );
}

export default Home;
