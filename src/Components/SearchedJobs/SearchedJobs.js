import React, { useEffect, useState, useRef } from "react";
import "./SearchedJobs.css";
import FilterComponent from "../FilterComponent/FilterComponent";
import { FixedSizeList as List } from "react-window";

function SearchedJobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef();

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetchJobs(requestOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: (currentPage - 1) * 10,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetchJobs(requestOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      // Load more data
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const fetchJobs = (requestOptions) => {
    setIsLoading(true);
    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setIsLoading(false);
      });
  };

  const filteredJobs = jobs.filter((job) => {
    const companyNameLower = job.companyName.toLowerCase();
    const searchCompanyNameLower =
      filterOptions?.searchCompanyName?.toLowerCase();

    if (filterOptions.role && job.jobRole !== filterOptions.role) {
      return false;
    }
    if (
      filterOptions.minexperience &&
      job.minExp >= filterOptions.minexperience
    ) {
      return false;
    }
    if (filterOptions.location == "remote") {
      if (filterOptions.location && job.location !== filterOptions.location) {
        return false;
      }
    } else if (filterOptions.location == "Hybrid") {
      if (filterOptions.location === "Hybrid" && job.location == "remote") {
        return false;
      }
    }

    if (
      filterOptions.minBasePay &&
      job.minJdSalary <= filterOptions.minBasePay
    ) {
      return false;
    }
    if (
      filterOptions.searchCompanyName &&
      !companyNameLower.includes(searchCompanyNameLower)
    ) {
      return false;
    }
    return true;
  });

  console.log("jopbs", jobs);
  console.log("filteredjobs", filteredJobs);

  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < filteredJobs.length; i += 3) {
      const rowItems = filteredJobs.slice(i, i + 3).map((job, idx) => (
        <div key={idx} className="col mb-4">
          <div className="card h-100 p-2 custom-card">
            <div className="card-body">
              <p className="post">⏳ Posted 11 days ago</p>
              <div className="company-box">
                <img
                  className="company-logo"
                  width={30}
                  height={40}
                  src={job.logoUrl}
                  alt={job.companyName}
                />
                <div className="company-data">
                  <h5 className="text-secondary">{job.companyName}</h5>
                  <p className="text-secondary">
                    {job.jobRole
                      ?.split(" ")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </p>
                  <p>
                    Location -
                    {job.location
                      ?.split(" ")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </p>
                </div>
              </div>
              <p>
                Estimated Salary:{" "}
                {job.minJdSalary ? job.minJdSalary : job.maxJdSalary - 4} -{" "}
                {job.maxJdSalary} {job.salaryCurrencyCode} ✅
              </p>
              <div className="job-description">
                <p>About Company:</p>
                <div className="description-lines">
                  {job.jobDetailsFromCompany
                    .split("\n")
                    .slice(0, 1000)
                    .map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  <div className="blurry-effect"></div>
                </div>
                <a href={job.jdLink} target="_blank" rel="noopener noreferrer">
                  View job
                </a>
                <div className="exp">
                  <p className="text-secondary">Minimum Experience</p>
                  <p>{job.minExp ? job.minExp : "2"} years</p>
                </div>
                <button className="apply-button "> ⚡️ Easy Apply</button>
              </div>
            </div>
          </div>
        </div>
      ));
      rows.push(
        <div key={i} style={{ display: "flex" }}>
          {rowItems}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="">
      <FilterComponent
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      {isLoading ? (
        <>
          <div className="spinner"></div>
          <p>Loading....</p>
        </>
      ) : filteredJobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        <div>
          {generateRows()}
          {/* Placeholder to ensure proper scrolling */}
          <div style={{ height: "100px" }} />
        </div>
      )}
    </div>
  );
}

export default SearchedJobs;
