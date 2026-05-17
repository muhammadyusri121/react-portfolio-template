import React from "react";
import '../assets/styles/Project.scss';

const projectData = [
    {
        url: "https://dispo.sman1ketapang.sch.id",
        title: "Dispo SMAN 1 Ketapang",
        description: "Proyek ini adalah Sistem Pembinaan Siswa yang dirancang untuk membantu sekolah dalam mengelola data siswa, pelanggaran, dan informasi penting lainnya. Sistem ini bertujuan untuk mempermudah proses pencatatan dan pelaporan, serta memberikan informasi yang akurat dan relevan bagi pihak sekolah. Dengan antarmuka yang intuitif, sistem ini diharapkan dapat meningkatkan efisiensi dan efektivitas dalam pengelolaan data siswa."
    },
    {
        url: "https://sman1ketapang.sch.id",
        title: "SMAN 1 Ketapang",
        description: "Proyek ini adalah Sistem Informasi Sekolah yang dirancang untuk membantu sekolah dalam mengelola data siswa, pelanggaran, dan informasi penting lainnya. Sistem ini bertujuan untuk mempermudah proses pencatatan dan pelaporan, serta memberikan informasi yang akurat dan relevan bagi pihak sekolah. Dengan antarmuka yang intuitif, sistem ini diharapkan dapat meningkatkan efisiensi dan efektivitas dalam pengelolaan data siswa."
    },
    {
        url: "https://cms.sman1ketapang.sch.id",
        title: "CMS SMAN 1 Ketapang",
        description: "Proyek ini adalah Sistem Pembinaan Siswa yang dirancang untuk membantu sekolah dalam mengelola data siswa, pelanggaran, dan informasi penting lainnya. Sistem ini bertujuan untuk mempermudah proses pencatatan dan pelaporan, serta memberikan informasi yang akurat dan relevan bagi pihak sekolah. Dengan antarmuka yang intuitif, sistem ini diharapkan dapat meningkatkan efisiensi dan efektivitas dalam pengelolaan data siswa."
    }
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {projectData.map((project, index) => (
                <div className="project" key={index}>
                    <a href={project.url} target="_blank" rel="noreferrer">
                        <img src={`https://api.microlink.io/?url=${project.url}&screenshot=true&meta=false&embed=screenshot.url`} className="zoom" alt="thumbnail" width="100%"/>
                    </a>
                    <a href={project.url} target="_blank" rel="noreferrer">
                        <h2>{project.title}</h2>
                    </a>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;