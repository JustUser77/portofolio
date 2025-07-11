import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "motion/react";
import Tilt from "react-parallax-tilt";
import Capybara from "../../../../assets/imgs/capybara.png"; 

function AboutMe() {
  const config = {
    title: "ABOUT ME",
    aboutText: {
      simple:
        "Ever since I was young, programming has been something that I am passionate about. I have worked on various applications and platforms, including web development, application development, and data analyst. I would like to utilize my skills as a Software Developer to create applications that create an impact in the world.",
    },
  };

  const animations = {
    container: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
    },
    title: {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: 0.2 },
    },
    text: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: 0.4 },
    },
    avatar: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: 0.6 },
    },
  };

  const renderAboutContent = () => (
    <Col md={8} className="home-about-description">
      <motion.h1 {...animations.title} style={{ fontSize: "2.6em" }}>
        {config.title}
      </motion.h1>

      <motion.p {...animations.text} className="home-about-body">
        {config.aboutText.simple}
        <br />
      </motion.p>
    </Col>
  );

  const renderAvatar = () => (
    <Col md={4} className="myAvatar">
      <motion.div {...animations.avatar}>
        <Tilt>
          <img src={Capybara} alt="Capybara Avatar" className="img-fluid" /> {/* Updated alt text */}
        </Tilt>
      </motion.div>
    </Col>
  );

  return (
    <motion.div {...animations.container}>
      <Container fluid className="home-about-section" id="about_me">
        <Container>
          <Row>
            {renderAboutContent()}
            {renderAvatar()}
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default AboutMe;