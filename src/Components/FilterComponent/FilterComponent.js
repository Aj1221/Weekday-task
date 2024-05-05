import React from "react";
import "./FilterComponent.css";

function FilterComponent({ filterOptions, setFilterOptions }) {
  // Define roles array
  const roles = ["frontend", "ios", "android", "tech lead", "backend"];

  const handleReset = () => {
    setFilterOptions({});
  };

  // Function to handle changes in filter options
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  return (
    <div className="filter-container">
      <select
        className="select-component"
        name="role"
        value={filterOptions?.role || ""}
        onChange={handleFilterChange}
      >
        <option value="">All Roles</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <select
        name="minexperience"
        className="select-component"
        value={filterOptions?.experience || ""}
        onChange={handleFilterChange}
      >
        <option value="">Min. Experience</option>
        {[...Array(10)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>

      <select
        className="select-component"
        name="location"
        value={filterOptions?.location || ""}
        onChange={handleFilterChange}
      >
        <option value="">Location</option>
        <option value="remote">Remote</option>
        <option value="Hybrid">Onsite</option>
      </select>

      <select
        className="select-component"
        name="minBasePay"
        value={filterOptions?.minBasePay || ""}
        onChange={handleFilterChange}
      >
        <option value="">Min. Base Pay</option>
        {[0, 10, 20, 30, 40, 50, 60, 70].map((pay) => (
          <option key={pay} value={pay}>
            {pay}L
          </option>
        ))}
      </select>

      <input
        className="select-component"
        type="text"
        name="searchCompanyName"
        value={filterOptions?.searchCompanyName || ""}
        onChange={handleFilterChange}
        placeholder="Search Company Name"
      />
      <button className="custom-button" onClick={() => handleReset()}>
        Reset Filters
      </button>
    </div>
  );
}

export default FilterComponent;
