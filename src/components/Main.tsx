
import React, { useEffect, useState, useRef } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import GetAppIcon from '@mui/icons-material/GetApp';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import '../assets/styles/Main.scss';
import profileImg from '../assets/images/profile.png';

function Main() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const musicUrl = `${process.env.PUBLIC_URL}/NIDJI - Laskar Pelangi (Official Music Video).mp3`;
    const audio = new Audio(musicUrl);
    audio.loop = true;
    audioRef.current = audio;

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log("Autoplay blocked, waiting for user interaction:", err);
        });
      }
    };

    playAudio();

    const handleUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio();
      }
    };

    window.addEventListener('click', handleUserInteraction, { once: true });
    window.addEventListener('scroll', handleUserInteraction, { once: true });
    window.addEventListener('touchstart', handleUserInteraction, { once: true });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    }
  };

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
            Mahasiswa Sistem Informasi Universitas Trunojoyo Madura dengan fokus pada Fullstack Web Development &amp; DevOps.
          </p>

          <div className="hero-action-buttons">
            <a 
              href={`${process.env.PUBLIC_URL}/CV_Muhammad_Yusri.pdf`} 
              download="CV_Muhammad_Yusri.pdf" 
              className="btn-download-resume"
            >
              <GetAppIcon /> Unduh CV / Resume
            </a>
            <button 
              onClick={toggleMusic} 
              className={`btn-music-icon-only ${isPlaying ? 'playing' : ''}`}
              title={isPlaying ? "Matikan Musik" : "Putar Musik"}
              aria-label={isPlaying ? "Matikan Musik" : "Putar Musik"}
            >
              {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
            </button>
          </div>

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