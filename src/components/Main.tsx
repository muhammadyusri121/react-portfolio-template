import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import GetAppIcon from '@mui/icons-material/GetApp';
import '../assets/styles/Main.scss';
import profileImg from '../assets/images/profile.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Muhammad Yusri" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/muhammadyusri121" target="_blank" rel="noreferrer" title="GitHub"><GitHubIcon /></a>
            <a href="https://linkedin.com/in/muhammadyusri" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon /></a>
            <a href="mailto:muhammadyusri00000@gmail.com" target="_blank" rel="noreferrer" title="Email"><EmailIcon /></a>
            <a href="https://myusri.dev" target="_blank" rel="noreferrer" title="Website"><LanguageIcon /></a>
          </div>
          <h1>Muhammad Yusri</h1>
          <p className="role-title">Fullstack Developer</p>
          <p className="bio-description">
            Mahasiswa Sistem Informasi Universitas Trunodjoyo Madura dengan fokus pada Fullstack Web Development &amp; DevOps.
          </p>

          <a 
            href={`${process.env.PUBLIC_URL}/CV_Muhammad_Yusri.pdf`} 
            download="CV_Muhammad_Yusri.pdf" 
            className="btn-download-resume"
          >
            <GetAppIcon /> Unduh CV / Resume
          </a>

          <div className="mobile_social_icons">
            <a href="https://github.com/muhammadyusri121" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://linkedin.com/in/muhammadyusri" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="mailto:muhammadyusri00000@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
            <a href="https://myusri.dev" target="_blank" rel="noreferrer"><LanguageIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;