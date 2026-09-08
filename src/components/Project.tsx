import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Project.scss';

const projectData = [
    {
        url: "https://opendatadisabilitas.com",
        title: "Prototipe Open Data Disabilitas",
        description: "Platform open data disabilitas partisipatif berbasis riset dengan integrasi DevOps, pengelolaan environment, dan VPS deployment.",
        techStack: ["DevOps", "Docker", "Linux Ubuntu", "VPS Deployment"]
    },
    {
        url: "https://sman1ketapang.sch.id",
        title: "Web Profile SMAN 1 Ketapang",
        description: "Portal profil sekolah berbasis Next.js dengan dashboard admin interaktif untuk pengelolaan berita, profil, dan galeri secara mandiri.",
        techStack: ["Next.js", "Node.js API", "Dashboard Admin", "Linux VPS", "Nginx"]
    },
    {
        url: "https://dispo.sman1ketapang.sch.id",
        title: "Sistem Pembinaan Siswa (Dispo)",
        description: "Sistem presensi digital siswa berbasis React.js dan REST API backend untuk efisiensi pengelolaan data sekolah.",
        techStack: ["React.js", "REST API", "PostgreSQL", "Linux VPS", "Nginx"]
    },
    {
        url: "https://myusri.dev",
        title: "Sistem Laporan & Evaluasi Internal UPA TIK UTM",
        description: "Sistem informasi laporan dan evaluasi internal berperforma tinggi (high concurrency) menggunakan Elixir dan Phoenix Framework.",
        techStack: ["Elixir", "Phoenix Framework", "PostgreSQL", "High Concurrency"]
    },
    {
        url: "http://jasapasangindihome.biz.id/",
        title: "Website Sales Indihome",
        description: "Website promosi dan penjualan paket Indihome berbasis Next.js dengan halaman landing, katalog paket, dan form pemesanan.",
        techStack: ["Next.js", "REST API", "Vercel", "Freelance"]
    },
    {
        url: "https://desadalisodo.site/",
        title: "Website Profil Desa Dalisodo",
        description: "Website profil desa berbasis Next.js sebagai media informasi dan publikasi program kerja KKN Universitas Merdeka Malang.",
        techStack: ["Next.js", "Content Management", "Vercel", "Freelance"]
    },
       {
        url: "https://asistensi.myusri.dev",
        title: "Sistem Informasi Asistensi Akademik",
        description: "Sistem informasi akademik berbasis Next.js sebagai media asistensi akademik untuk mempermudah mahasiswa dalam mengakses informasi akademik.",
        techStack: ["Next.js", "PostgreSQL", "Linux VPS", "Nginx"]
    }
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Portofolio &amp; Proyek Utama</h1>
        <div className="projects-grid">
            {projectData.map((project, index) => (
                <div className="project" key={index}>
                    <a href={project.url} target="_blank" rel="noreferrer">
                        <img src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`} className="zoom" alt={project.title} width="100%"/>
                    </a>
                    <a href={project.url} target="_blank" rel="noreferrer">
                        <h2>{project.title}</h2>
                    </a>
                    <p>{project.description}</p>
                    <div className="project-tech-stack">
                        {project.techStack.map((tech, tIndex) => (
                            <Chip 
                              key={tIndex} 
                              label={tech} 
                              size="small" 
                              className="project-chip"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;