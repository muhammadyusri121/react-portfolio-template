import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faUsers, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Pengalaman &amp; Perjalanan</h1>
        <VerticalTimeline>
          {/* Work & Initiatives */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2024 – Sekarang"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Inisiator &amp; Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">DevLoop</h4>
            <p>
              Memimpin komunitas developer dengan 3 anggota aktif, menghasilkan 7 proyek dalam 1 tahun. Mengoordinasikan kolaborasi tim dalam eksplorasi teknologi web modern, version control, dan eksekusi perangkat lunak.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 – Sekarang"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h3 className="vertical-timeline-element-title">Asisten Praktikum</h3>
            <h4 className="vertical-timeline-element-subtitle">Jurusan Sistem Informasi, Universitas Trunojoyo Madura</h4>
            <p>
              Membimbing mahasiswa dalam modul praktikum pemrograman web, arsitektur data, dan logika backend. Melakukan code review, evaluasi tugas, dan konsultasi teknis.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 – Sekarang"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
            <p>
              Mengeksekusi proyek pembuatan aplikasi web kustom sesuai kebutuhan klien, mencakup analisis kebutuhan, perancangan basis data, hingga deployment ke server produksi.
            </p>
          </VerticalTimelineElement>

          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 – Sekarang"
            iconStyle={{ background: '#0080ff', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">S1 Sistem Informasi </h3>
            <h4 className="vertical-timeline-element-subtitle">Universitas Trunojoyo Madura</h4>
            <p>
              Fokus Studi: Pemrograman Web, Rekayasa Perangkat Lunak, Basis Data, Arsitektur Sistem &amp; Cloud Computing.
            </p>
          </VerticalTimelineElement>

          {/* Organization & Leadership */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 – Sekarang"
            iconStyle={{ background: '#2e7d32', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h3 className="vertical-timeline-element-title">Pengurus (Divisi Pendidikan)</h3>
            <h4 className="vertical-timeline-element-subtitle">GenBI UTM (Generasi Baru Indonesia)</h4>
            <p>
              Merancang dan menjalankan program edukasi masyarakat, literasi keuangan digital (QRIS), serta sosialisasi kebanksentralan (Cinta Bangga Paham Rupiah).
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#d81b60', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faHandsHelping} />}
          >
            <h3 className="vertical-timeline-element-title">Ketua Pelaksana &amp; Pengabdian Masyarakat</h3>
            <h4 className="vertical-timeline-element-subtitle">Sosialisasi SNPMB, OSPEK FT UTM, &amp; Relawan SLBN Banyuates</h4>
            <p>
              Memimpin tim sosialisasi jalur perguruan tinggi se-Kecamatan Banyuates, panitia OSPEK Fakultas Teknik UTM, dan relawan pengajar adaptif 3 hari bagi siswa berkebutuhan khusus di SLBN Banyuates.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 – 2024"
            iconStyle={{ background: '#2e7d32', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h3 className="vertical-timeline-element-title">Pengurus</h3>
            <h4 className="vertical-timeline-element-subtitle">BEM Fakultas Teknik, Universitas Trunojoyo Madura</h4>
            <p>
              Mengoordinasikan kegiatan kemahasiswaan lintas jurusan dan menjalankan fungsi advokasi mahasiswa.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 – 2023"
            iconStyle={{ background: '#2e7d32', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h3 className="vertical-timeline-element-title">Sekretaris</h3>
            <h4 className="vertical-timeline-element-subtitle">Saka Bhayangkara Ranting Banyuates</h4>
            <p>
              Mengelola administrasi organisasi, surat resmi, pengarsipan dokumen, dan penyusunan laporan kegiatan.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;