import React from "react";
import { Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import ImgPBO from "../../assets/imgs/courses/pbo.png";
import ImgWeb from "../../assets/imgs/courses/web.png";
import ImgBasis from "../../assets/imgs/courses/basis.png";
import ImgIMK from "../../assets/imgs/courses/imk.png";
import ImgSDGS from "../../assets/imgs/courses/sdgs.png";
import SatyaTerraBhinnekaLogo from "../../assets/imgs/satyaterrabhinneka.png";

function Course_Taken() {
  const courses = [
    {
      id: "PBO",
      image: ImgPBO,
      title: "Pemrograman Berorientasi Objek",
      professor: "Abdul Muis",
      rating: 5,
      semester: "2",
      workload: 2,
      description:
        "Mahasiswa akan mempelajari konsep OOP menggunakan Java, termasuk enkapsulasi, pewarisan, dan polimorfisme untuk membangun aplikasi modular dan scalable.",
    },
    {
      id: "Web",
      image: ImgWeb,
      title: "Perancangan Web",
      professor: "Imam Zarkasyi",
      rating: 5,
      semester: "2",
      workload: 2,
      description:
        "Materi mencakup HTML, CSS, JavaScript, Bootstrap, dan React untuk membangun aplikasi web modern yang responsif dan interaktif.",
    },
    {
      id: "Basis",
      image: ImgBasis,
      title: "Basis Data",
      professor: "Windi Saputri",
      rating: 5,
      semester: "2",
      workload: 1,
      description:
        "Mahasiswa belajar SQL, desain skema relasional, normalisasi, dan integrasi basis data dengan aplikasi.",
    },
    {
      id: "IMK",
      image: ImgIMK,
      title: "Interaksi Manusia & Komputer",
      professor: "Rivalri",
      rating: 5,
      semester: "2",
      workload: 2,
      description:
        "Fokus pada desain antarmuka, user experience, dan usability testing untuk menciptakan sistem yang ramah pengguna.",
    },
    {
      id: "SDGS",
      image: ImgSDGS,
      title: "SDG's",
      professor: "Sarah Harahap",
      rating: 5,
      semester: "2",
      workload: 3,
      description:
        "Pengantar Tujuan Pembangunan Berkelanjutan, menganalisis isu global, dan merancang solusi berbasis teknologi dan sosial.",
    },
  ];

  const renderStars = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <AiFillStar key={i} className="star" />
    ));
  };

  return (
    <Container fluid className="course-section">
      <div className="course-header">
        <h1 className="project-heading">COURSES TAKEN</h1>
      </div>

      <div className="university-section">
        <h2 className="university-title">Universitas Satya Terra Bhinneka</h2>
        <div className="university-logo-container">
          <a
            href="https://satyaterrabhinneka.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="university-badge">Undergraduate</div>
            <img
              src={SatyaTerraBhinnekaLogo}
              alt="Universitas Satya Terra Bhinneka"
              className="university-logo"
              width={500}
              height={80}
            />
          </a>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="course-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="semester-badge">{course.semester}</div>
              <div className="course-content">
                <div className="course-image-container">
                  <img
                    src={course.image}
                    alt={course.id}
                    className="course-image"
                  />
                </div>
                <div className="course-details">
                  <h3 className="course-title">{course.title}</h3>

                  <div className="course-meta">
                    <div className="meta-item">
                      <span className="meta-label">Professor:</span>
                      <span>{course.professor}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Rating:</span>
                      <div className="rating-stars">
                        {renderStars(course.rating)}
                      </div>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Workload:</span>
                      <div className="workload-stars">
                        {renderStars(course.workload)}
                      </div>
                    </div>
                  </div>

                  <div className="course-description">{course.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Course_Taken;