import React from "react";
import "./Sidebar.css";
import { FaSearch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar-container d-none d-md-block">
      <div className="sidebar">
        <div className="logo">
          <img src="/assets/Weekdaylogo.png" alt="Logo" />
        </div>
        <hr className="line" />
        <div className="menu-item ">
          <span className="font-weight-dark">Looking For a Job </span>
        </div>
        <div className="menu-item">
          <BsPerson className="icon" />
          <span> My applied Jobs </span>
        </div>
        <div className="menu-item">
          <FaSearch className="icon" />
          <span> Search jobs </span>
        </div>

        <div className="menu-item">
          <MdCurrencyRupee className="icon" />
          <span> Search Salary </span>
        </div>
        <div className="menu-item">
          <BsPersonPlus className="icon" />
          <span> Ask for referral</span>
        </div>
        <hr></hr>
        <div className="menu-item">
          <span className="fw-100 ">RECOMMEND AND EARN</span>
        </div>
        <div className="menu-item-1">
          <FaThumbsUp className="icon" />
          <span> Recommend from shortlist </span>
        </div>
        <div className="menu-item-1">
          <BsCardChecklist className="icon" />
          <span> Recommend from specific company </span>
        </div>
        <div className="menu-item">
          <AiOutlineShareAlt className="icon" />
          <span> Refer this extension</span>
        </div>

        <div className="menu-item-bottom">
          <img
            className="profileimg"
            alt="user"
            src="/assets/profile.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
