import React from 'react';
import './Home.css'; 
import Sidebar from "../Sidebar/Sidebar";
import PersonalInfoForm from '../PersonalInfo/PersonalInfo';
import FooterContent from '../FooterContent/FooterContent';

function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <div>
      <div className="content">
        <div>
        <img alt='frame' className='frameimage' src="/assets/Frame.png" />
        </div>
        <div className='innerContent'>    
        <h2>Premium Account</h2>
        <p>You have a premium account, granting you access to all the remarkable features offered by <br></br> ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited <br></br> number of resumes and cover letters in both PDF and Word formats.
       </p>
        </div>
      </div>

        <PersonalInfoForm />
        <div className='bottom'>
          <p><span className='companyName'>Get in touch with our support team</span> if you have any question or want to leavse some feedback. <br></br>
          We'll be happy to hear from you</p>
        </div>
        <hr className='footer-line'/>
        <FooterContent />

        </div>


    </div>
  );
}

export default Home;
