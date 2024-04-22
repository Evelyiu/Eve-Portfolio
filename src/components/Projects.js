import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpeg";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const mainprojects = [
    {
      title: "HOTERU - Hotel Booking Web App",
      description: "ReactJS | TailwindCSS | API | Firebase",
      imgUrl: projImg1,
    },
    {
      title: "T2S - Text to Speech",
      description: "Chrome Extension | JS | API",
      imgUrl: projImg2,
      prjUrl:"https://evelyiu.github.io/Google-Extension_T2S/",
    },
    {
      title: "Weather App",
      description: "JS | API | TailwindCSS",
      imgUrl: projImg3,
      prjUrl:"https://evelyiu.github.io/Weather-App/"
    },
    {
      title: "Drawing Board",
      description: "JS | Canvas",
      imgUrl: projImg4,
    },
    
  ];

  const projects = [
    {
      title: "MTR",
      description: "JS | API | Responsive Design",
      imgUrl: projImg5,
    },
    {
      title: "To-do List",
      description: "JS | Local Storge | Responsive Design",
      imgUrl: projImg6,
    }
  ];

  const uxui = [
    {
      title: "I will learn in this week TvT",
      description: "ReactJS | TailwindCSS | API | Firebase",
      imgUrl: projImg1,
      prjUrl: "https://www.facebook.com/",
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This project section includes the main projects and some practice tasks I have done that demonstrate my skills in responsive design and front-end development. Additionally, I am actively learning and applying UX/UI design principles to create visually appealing and user-friendly interfaces. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Main Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Practice Tasks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">UX/UI</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          mainprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          uxui.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
