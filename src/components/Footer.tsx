import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/muhammadyusri121" target="_blank" rel="noreferrer" title="GitHub"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/muhammadyusri121" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon/></a>
      </div>
      <p>Portofolio dikembangkan oleh <a href="https://github.com/muhammadyusri121" target="_blank" rel="noreferrer">Muhammad Yusri</a></p>
    </footer>
  );
}

export default Footer;