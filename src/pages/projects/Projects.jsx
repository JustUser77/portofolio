import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Particle";
import WebProjekImage from "../../assets/imgs/projects/web_projek.png"; // Ganti dengan preview proyekmu

function Projects() {
  const personalProjects = [
    {
      id: "webprojek",
      imgPath: WebProjekImage,
      title: "WebProjek",
      description:
        "A simple web project using React and Vite. It features hot module replacement, ESLint setup, and is deployed via Vercel.",
      ghLink: "https://github.com/JustUser77/web_projecct",
      demoLinks: ["https://web-projecct.vercel.app/"],
      demoName: "Demo",
      technologies: ["React", "Vite", "JavaScript", "HTML", "CSS"],
    },
  ];

  const renderProjectCards = (projects) =>
    projects.map((project, index) => (
      <Col md={4} className="project-card" key={project.id}>
        <ProjectCard
          imgPath={project.imgPath}
          isBlog={false}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          ghLink={project.ghLink}
          demoLinks={project.demoLinks}
          demoName={project.demoName}
          demoLinkLabels={project.demoLinkLabels}
          demoLinkIsVideo={project.demoLinkIsVideo}
          animationDelay={`${index * 0.1}s`}
        />
      </Col>
    ));

  const sections = {
    header: {
      title: "PROJECTS",
      subtitle: "A showcase of my technical projects and creative solutions",
    },
    personalProjects: {
      title: "Personal Projects",
      color: "#2c3e50",
    },
    projekPerancanganWeb: {
      title: "Projek Perancangan Web",
      color: "#3498db",
    },
  };

  return (
    <Container fluid className="project-section">
      <div className="project-header">
        <h1 className="project-heading">{sections.header.title}</h1>
        <p className="project-subtitle">{sections.header.subtitle}</p>
      </div>

      <Particle />

      <Container>
        <section className="projects-category">
          <h2 style={{ color: sections.personalProjects.color }}>
            {sections.personalProjects.title}
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
            {renderProjectCards(personalProjects)}
          </Row>
        </section>

        <section className="projects-category">
          <h2 style={{ color: sections.projekPerancanganWeb.color }}>
            {sections.projekPerancanganWeb.title}
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
            {renderProjectCards(personalProjects)}
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default Projects;