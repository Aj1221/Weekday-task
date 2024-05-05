import React, { useState } from "react";
import SearchedJobs from "../SearchedJobs/SearchedJobs";
import "./GridComponent.css";

const GridComponent = () => {
  const [selectedOption, setSelectedOption] = useState("searched");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="button-group">
        <button
          className={`button ${selectedOption === "applied" ? "active" : ""}`}
          onClick={() => handleOptionClick("applied")}
        >
          Applied Jobs
        </button>
        <button
          className={`button ${selectedOption === "searched" ? "active" : ""}`}
          onClick={() => handleOptionClick("searched")}
        >
          Searched Jobs
        </button>
        <button
          className={`button ${selectedOption === "suggested" ? "active" : ""}`}
          onClick={() => handleOptionClick("suggested")}
        >
          Suggested Jobs
        </button>
      </div>
      <div>
        {selectedOption === "applied" && (
          <div className="message text-center">
            There is no data in {selectedOption} category.
          </div>
        )}
        {selectedOption === "searched" && <SearchedJobs />}
        {selectedOption === "suggested" && (
          <div className="message text-center">
            There is no data in {selectedOption} category.
          </div>
        )}
      </div>
    </div>
  );
};

export default GridComponent;
