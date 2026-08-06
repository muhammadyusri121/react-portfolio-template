import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faServer, faUsers, faRobot, faCamera } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const frontendSkills = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "UI/UX Implementation",
    "SASS",
    "Responsive Web"
];

const backendSkills = [
    "Elixir (Phoenix)",
    "Python (FastAPI)",
    "Node.js",
    "RESTful API",
    "API Design"
];

const devOpsSkills = [
    "PostgreSQL",
    "MySQL",
    "Linux (Ubuntu)",
    "Nginx Reverse Proxy",
    "Docker",
    "Git/GitHub",
    "VPS Deployment"
];

const aiSkills = [
    "Artificial Intelligence",
    "GenAI & LLM Tools",
    "Prompt Engineering",
    "AI Workflow Integration",
    "Automation"
];

const mediaSkills = [
    "Photography",
    "Videography",
    "Visual Documentation",
    "Media Production",
    "Creative Editing"
];

const softSkills = [
    "Technical Leadership",
    "Project Management",
    "Problem Solving",
    "Public Speaking & Communication",
    "Organizational Administration"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Keahlian Teknis &amp; Soft Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Development</h3>
                    <p>Mengembangkan antarmuka aplikasi web modern, responsif, dan intuitif menggunakan React.js, JavaScript, HTML5, CSS3, serta penerapan standar UI/UX terbaik.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {frontendSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend &amp; API Architecture</h3>
                    <p>Merancang arsitektur RESTful API yang tangguh, berperforma tinggi (high concurrency), dan scalable menggunakan Elixir (Phoenix Framework), Python (FastAPI), serta Node.js.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {backendSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Database &amp; DevOps Infrastructure</h3>
                    <p>Mengatur skema basis data relasional serta mengelola environment deployment server Linux (Ubuntu) produksi dengan Nginx reverse proxy, Docker, dan manajemen VPS.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {devOpsSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>AI &amp; Emerging Technologies</h3>
                    <p>Antusias dalam mengeksplorasi serta mengintegrasikan teknologi Kecerdasan Buatan (GenAI, LLM tools, &amp; Prompt Engineering) untuk otomasi dan peningkatan efisiensi alur kerja software.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Fokus:</span>
                        {aiSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCamera} size="3x"/>
                    <h3>Photography &amp; Visual Media</h3>
                    <p>Memiliki keahlian dalam fotografi, pembuatan konten visual, dan dokumentasi videografi profesional dengan perhatian pada estetika serta cerita visual.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Keahlian:</span>
                        {mediaSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUsers} size="3x"/>
                    <h3>Kepemimpinan &amp; Soft Skills</h3>
                    <p>Pengalaman menginisiasi dan memimpin komunitas pengembang (DevLoop), manajemen proyek software, penyampaian materi (public speaking), serta administrasi organisasi.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Keahlian:</span>
                        {softSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;