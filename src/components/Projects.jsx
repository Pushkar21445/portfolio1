import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/weather app.jpg";
import projImg2 from "../assets/img/Text-to-Speech.jpg"; // Update with your actual image
import projImg3 from "../assets/img/clock.jpg"; // Placeholder for third project
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const weatherApp = {
    title: "Weather App",
    description: "A responsive weather application using OpenWeatherMap API. Features real-time data, modular coding, and 25% faster load times.",
    imgUrl: projImg1,
  };

  const textToSpeech = {
    title: "Text-to-Speech Converter",
    description: "Web-based accessibility tool using Web Speech API. Includes dynamic feedback and input validation for visually impaired users.",
    imgUrl: projImg2,
  };

  const projectThree = {
    title: "Digital Clock", // Example: Replace with your third project name
    description: "Digital Clock Reimagined – Clean Design, Smooth Animations, Always on Time! 🚀", // Update description
    imgUrl: projImg3,
  };

  return (
    <section 
      className="project" 
      id="projects"
      style={{ 
        backgroundColor: 'black',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>
                  Throughout my journey, I've built practical solutions leveraging modern technologies. 
                  Each project reflects my focus on usability, performance, and clean code.
                </p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Weather App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Text-to-Speech</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">DBMS Tracker</Nav.Link> {/* Update label */}
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {/* Tab 1: Weather App */}
                    
                    <Tab.Pane eventKey="first">
                      <Row>
                        <ProjectCard {...weatherApp}
                        style={{ 
                           width: "600px", 
                           height: "200px", 
                           objectFit: "cover" 
                             }} />

                      </Row>
                    </Tab.Pane>
                    
                    {/* Tab 2: Text-to-Speech */}
                    <Tab.Pane eventKey="second">
                      <Row>
                        <ProjectCard {...textToSpeech} />
                      </Row>
                    </Tab.Pane>
                    
                    {/* Tab 3: Third Project */}
                    <Tab.Pane eventKey="third">
                      <Row>
                        <ProjectCard {...projectThree} />
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;