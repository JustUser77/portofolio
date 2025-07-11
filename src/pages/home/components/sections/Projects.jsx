import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoLogoGithub } from "react-icons/io";
import Particle from "../../../../components/Particle";
import ProjectCard from "../../../projects/ProjectCards";

// Import image proyekmu
import WebProjekImage from "../../../../assets/imgs/projects/web_projek.png";

function Projects() {
  const projectsData = [
    {
      id: "webprojek",
      imgPath: WebProjekImage,
      title: "WebProjek",
      ghLink: "https://github.com/JustUser77/web_projecct",
      demoLinks: ["https://web-projecct.vercel.app/"],
      demoName: "Demo",
    },
  ];

  const githubSection = {
    title: "To visit more of my projects",
    buttonText: "Visit My GitHub",
    url: "https://github.com/JustUser77",
  };

  const renderProjectCard = (project, index) => (
    <Col md={4} className="project-card" key={project.id}>
      <ProjectCard
        imgPath={project.imgPath}
        isBlog={false}
        title={project.title}
        ghLink={project.ghLink}
        demoLinks={project.demoLinks}
        demoName={project.demoName}
        demoLinkIsVideo={project.demoLinkIsVideo}
        animationDelay={`${index * 0.1}s`}
      />
    </Col>
  );

  const renderGitHubSection = () => (
    <div className="github-section text-center mt-5">
      <h2 className="github-title">{githubSection.title}</h2>
      <a
        href={githubSection.url}
        className="btn btn-xl btn-dark github-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {githubSection.buttonText} &nbsp; <IoLogoGithub />
      </a>
    </div>
  );

  return (
    <Container fluid className="project-section">
      <Container>
        <div className="project-header">
          <h1 className="project-heading">
            MY PROJECTS <span className="project-count">({projectsData.length})</span>
          </h1>
          <p className="project-subtitle">
            A showcase of my technical projects and creative solutions
          </p>
        </div>

        <Particle />

        <Row className="project-grid">
          {projectsData.map((project, index) => renderProjectCard(project, index))}
        </Row>

        {renderGitHubSection()}
      </Container>
    </Container>
  );
}

export default Projects;