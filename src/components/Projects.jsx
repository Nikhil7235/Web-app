/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/projects/m.png",
      gLink: "https://github.com/Nikhil7235/Portf/tree/main/nik",
      lLink: "https://profound-sopapillas-74dd4f.netlify.app/",
    },
    {
      title: "Project 2",
      img: "/projects/initialform.png",
      gLink: "https://github.com/Nikhil7235/React-Validation",
      lLink: "https://celebrated-gelato-9decec.netlify.app//",
    },
    {
      title: "Project 3",
      img: "/projects/images.png",
      gLink: "https://github.com/Nikhil7235/home/tree/main/Home",
      lLink: "https://jocular-kashata-6cf03c.netlify.app//",
    },
    {
      title: "Project 4",
      img: "/projects/ni.png",
      gLink: "https://github.com/Nikhil7235/Calculator-app",
      lLink: "https://heroic-snickerdoodle-4bd3d6.netlify.app/",
    },
   
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <a
            href="https://github.com/Nikhil7235"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium esse est iure inventore aut 
                deleniti consectetur incidunt recusandae. Eius corporis velit cum consectetur 
                id in totam atque nobis maiores labore reiciendis blanditiis, quos veniam ullam quasi.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
