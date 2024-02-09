import React from 'react';
import './Sidebar.css'; 
import { FaSearch } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io"
import { IoMdSettings } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img  src="/assets/comLogo.png" alt="Logo" />
        <span >Resumizeme</span>
      </div>
      <hr className='line' />
      <div className="menu-item">
      <RiArchiveDrawerLine  className='icon'/>
        <span className='temp'>My templates </span>
      </div>
      <div className="menu-item">
        <FaSearch  className='icon'/>
        <span className='temp'>  Search </span>
      </div>
      <div className="menu-item">
        <span> ⭐️ Software Engineer </span>
      </div>
      <div className="menu-item">
        <span> ⭐️ Computer hardware Engineer </span>
      </div>
      <div className="menu-item">
        <span> ⭐️ Network Engineer </span>
      </div>
      <div className="menu-item">
        <span> ⭐️ Technical Support </span>
      </div>
      <div className="menu-item">
        <span> ⭐️ Network administrator </span>
      </div>
      <div className="menu-item">
        <span> ⭐️ Management </span>
      </div>
      <div className="menu-item">
        <span> ⭐️ Data analysis </span>
      </div>
      <div className="menu-item">
        <span> ⭐️ Computer technician </span>
      </div>
      <div className="menu-item">
        <BsStopwatch  className='icon' />
        <span> Past Search 1 </span>
      </div>
      <div className="menu-item">
        <BsStopwatch className='icon' />
        <span> Past Search 2 </span>
      </div>
      <div className="menu-item">
        <BsStopwatch className='icon' />
        <span> Computers and information... </span>
      </div>
      <div className="menu-item">
        <BsStopwatch className='icon'/>
        <span> Database Administrator </span>
      </div>
      <div className="menu-item">
        <BsStopwatch className='icon'/>
        <span> Computer security </span>
      </div>
      <div className="menu-item">
        <BsStopwatch className='icon' />
        <span> Computer System Analyst </span>
      </div>
      <div className="menu-item">
      <RiArchiveDrawerLine className='icon' />

        <span> My boards </span>
        <IoIosAddCircleOutline className='plus' />
      </div>
      <div className="menu-item">

        <span> 🗂️ Board 1 </span>
      </div>
      <div className="menu-item">

        <span> 🗂️ Board 2 </span>
      </div>
      <div className="menu-item">

        <span> 🗂️ Board 3 </span>
      </div>
      <div className="menu-item">

        <span> 🔓 Boards agent 1</span>
      </div>
      <div className="menu-item">

        <span> 🔓 Boards agent 1</span>
      </div>
      <div className="menu-item">

        <span> 🔓 Boards agent 1</span>
      </div>
      <hr className="horizontal-line-bottom" />
      <div className="menu-item-bottom">
      <img alt='user' src='/assets/user.png'></img>
      <IoMdSettings className='settingIcon' />
      </div>
    </div>
  );
};

export default Sidebar;
