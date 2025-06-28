import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';

export const Projects = () => {

  const projects = [
    {
      title: "Mythicals App",
      description: "Create your own Website using mythicals App & your creativity",
      imgUrl: projImg4,
      siteUrl:"https://mythicals.tech/"
    },
    {
      title: "Prayag Travels",
      description: "One Stop solution for Booking Car Travels anywhere in India",
      imgUrl: projImg5,
      siteUrl:"https://tejas-travel-app.vercel.app/"
    },
    {
      title: "Real Estate App",
      description: "Find Your Future Property for Rent/Purchase Now!!",
      imgUrl: projImg1,
      siteUrl:"https://tejas-realestate.vercel.app/"
    },
    {
      title: "Netflix Clone App",
      description: "Design & Development",
      imgUrl: projImg2,
      siteUrl:"https://tejas-netflix.vercel.app/"
    },
    {
      title: "Blogging App",
      description: "Blog your Thoughts/Creativity/Knowledge on Blogger",
      imgUrl: projImg3,
      siteUrl:"https://tejas-medium.vercel.app/"
    },
    {
      title: "Task Manager App",
      description: "Create your tasks and Manage using ScrumBoard with Drag and Drop Functionality",
      imgUrl: projImg6,
      siteUrl:"https://tejas-task-manager.vercel.app/"
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I built a full-stack RealEstateApp with Next.js, React, and Supabase—featuring Google/GitHub authentication and property verification for Indian users. I also created a Payment App using React, Node.js, and MongoDB for secure transactions, and a responsive Spotify clone with vanilla JavaScript, HTML, and CSS. These projects showcase my ability to develop dynamic, user-friendly web solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Click on below images to visit the website</p>
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
                    <Tab.Pane eventKey="second">
                      <p>Click on below images to visit the website</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Click on below images to visit the website</p>
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
