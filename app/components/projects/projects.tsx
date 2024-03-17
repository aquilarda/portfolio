import React from "react";
import "@/app/components/projects/projects.css";

const Projects = () => {
  return (
    <main className="main">
      <div className="projects-div flex justify-center">
        <h1 className="projects-title p-4 ">Projects</h1>
      </div>
      <div className="project-list-div flex flex-col justify-center text-center items-center">
        <a href="https://voltranwebsite.vercel.app" className="project-link p-2">
          Voltran
        </a>
        <p className="project-description">
          I have created a website for our team, Voltran, where you can find
          information about our members, team projects, daily or weekly updates,
          and details about the team's goals. <br /> <br />
        </p>
        <a href="https://dc-aquila.netlify.app/" className="project-link p-2">DC-Aquila</a>
        <p className="project-description">Digital version of the Truth or Dare game. Only avaible in Turkish, for now.</p>
        <p className="note p-16">I am working on new projects, so I will add my new projects here soon..</p>
      </div>
    </main>
  );
};

export default Projects;
