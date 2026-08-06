import React from "react";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import '../assets/styles/Achievements.scss';

const achievements = [
  {
    title: "Honorable Mention 2",
    event: "Idea Innovation Akselerasi Challenge (I2AC) Tingkat Nasional",
    organizer: "BEM FEB Universitas Trunojoyo Madura",
    badge: "Tingkat Nasional"
  },
  {
    title: "Juara 1",
    event: "Lomba Inovasi Produk — Dormitory Competition XI",
    organizer: "Asrama Mahasiswa Universitas Trunojoyo Madura",
    badge: "Tingkat Universitas"
  },
  {
    title: "Juara 2",
    event: "Kategori Bisnis Digital (Proposal: SmartBiz) — Trunojoyo Bizplan Championship 2025",
    organizer: "UPA PKK Universitas Trunojoyo Madura",
    badge: "Tingkat Universitas"
  }
];

function Achievements() {
  return (
    <div id="achievements">
      <div className="items-container">
        <h1>Prestasi &amp; Penghargaan</h1>
        <div className="achievements-list">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-icon">
                <EmojiEventsIcon />
              </div>
              <div className="achievement-content">
                <div className="achievement-title-row">
                  <h2>{item.title}</h2>
                  <span className="achievement-badge">{item.badge}</span>
                </div>
                <h3>{item.event}</h3>
                <p className="achievement-organizer">Penyelenggara: {item.organizer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
