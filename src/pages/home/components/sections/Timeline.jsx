import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdDateRange, MdLocationOn, MdSchool } from "react-icons/md";
import SDLogo from "../../../../assets/imgs/timeline/sd_logo.png";
import SMPLogo from "../../../../assets/imgs/timeline/smp_logo.png";
import SMALogo from "../../../../assets/imgs/timeline/smk_logo.png";
import UniversityLogo from "../../../../assets/imgs/timeline/universitas_satya_terra_bhinneka.png";

function Timeline() {
  const timelineData = [
    {
      id: "sd",
      school: "SD Negeri 0064007",
      level: "Sekolah Dasar",
      location: "Hamparan Perak, Sumatera Utara",
      duration: "2012 - 2018",
      logo: SDLogo,
      website: "#",
    },
    {
      id: "smp",
      school: "SMP Brigjend Katamso 2 & Methodist 10",
      level: "Sekolah Menengah Pertama",
      location: "Medan, Sumatera Utara",
      duration: "2018 - 2021",
      logo: SMPLogo,
      website: "#",
    },
    {
      id: "smk",
      school: "SMK Negeri 13 Medan",
      level: "Sekolah Menengah Kejuruan",
      location: "Medan, Sumatera Utara",
      duration: "2021 - 2024",
      logo: SMALogo,
      website: "#",
    },
    {
      id: "kuliah",
      school: "Universitas Satya Terra Bhinneka",
      level: "Perguruan Tinggi",
      location: "Medan, Sumatera Utara",
      duration: "2024 - Sekarang",
      logo: UniversityLogo,
      website: "https://satyaterrabhinneka.ac.id/",
    },
  ];

  const cardStyles = {
    contentStyle: {
      border: "none",
      borderRadius: "20px",
      boxShadow: "0 8px 32px rgba(117, 170, 219, 0.2)",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      padding: "2rem",
      position: "relative",
      overflow: "hidden",
    },
    contentArrowStyle: {
      borderRight: "7px solid rgba(255, 255, 255, 0.95)",
    },
    iconStyle: {
      background: "linear-gradient(135deg, #75aadb, #accce6)",
      color: "#fff",
      boxShadow: "0 4px 16px rgba(117, 170, 219, 0.4)",
    },
  };

  const renderTimelineElement = (education) => (
    <VerticalTimelineElement
      key={education.id}
      className="vertical-timeline-element--education enhanced-timeline-card"
      contentStyle={cardStyles.contentStyle}
      contentArrowStyle={cardStyles.contentArrowStyle}
      iconStyle={cardStyles.iconStyle}
      icon={<MdSchool />}
    >
      <div className="timeline-card-content">
        <div className="company-header">
          <img
            className="company-logo"
            src={education.logo}
            width={60}
            height={60}
            alt={education.school}
          />
          <div className="company-info">
            <h3 className="role-title">{education.level}</h3>
            <a
              href={education.website}
              className="company-name"
              target="_blank"
              rel="noopener noreferrer"
            >
              {education.school}
            </a>
          </div>
        </div>

        <div className="location-date">
          <span className="location">
            <MdLocationOn /> {education.location}
          </span>
          <span className="duration">
            <MdDateRange /> {education.duration}
          </span>
        </div>
      </div>
    </VerticalTimelineElement>
  );

  const headerConfig = {
    title: "EDUCATION TIMELINE",
    subtitle: "Perjalanan pendidikan formal saya dari SD hingga Perguruan Tinggi",
  };

  return (
    <Container id="timeline" className="timeline-section">
      <div className="timeline-header">
        <h1 className="project-heading">{headerConfig.title}</h1>
        <p className="timeline-subtitle">{headerConfig.subtitle}</p>
      </div>

      <VerticalTimeline lineColor="#F5F5F5">
        {timelineData.map(renderTimelineElement)}
      </VerticalTimeline>

      <div className="timeline-stats">
        <div className="stat-item">
          <span className="stat-number">{timelineData.length}</span>
          <span className="stat-label">Jenjang Pendidikan</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {[...new Set(timelineData.map((exp) => exp.location))].length}
          </span>
          <span className="stat-label">Lokasi</span>
        </div>
      </div>
    </Container>
  );
}

export default Timeline;