import React from "react";
import "./TopContent.css";

function TopContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="topcontent-container card p-1 shadow banner-color rounded border">
            <h5 className="fw-bold p-2 ml-md-5">👋 Ajitesh</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="banner-container card p-1 shadow banner-color border">
            <p className="p-1 ml-md-5">
              We, at Weekday, are creating a go-to hub for uncovering the real
              issues candidates should be aware of before joining a company.{" "}
              <strong>Access 150+ company reviews here </strong>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
