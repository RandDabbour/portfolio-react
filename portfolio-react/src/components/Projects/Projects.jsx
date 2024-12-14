import React from "react";
// import TurboImg from "../../assets/img/Turbo.png";
// import EMaintImg from "../../assets/img/E-maint.png";
// import AttackImg from "../../assets/img/Attack.png";
// import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Turbo – Car Rental System",
    //   imgSrc: TurboImg,
      description: [
        "Innovative car rental platform",
        "Lets users browse a wide range of cars, view specifications, and select vehicles based on their needs.",
        "Users can rent cars for specific durations, manage bookings, and extend rentals easily.",
      ],
    },
    {
      title: "e-Maintenance – University Ticket Management System",
    //   imgSrc: EMaintImg,
      description: [
        "Comprehensive ticket management system for universities.",
        "Allows faculty, staff, and students to submit maintenance tickets for various issues.",
        "Users can specify urgency, provide descriptions, and attach images/documents.",
        "Tracks ticket progress and notifies users at every stage, from submission to resolution.",
      ],
    },
    {
      title: "Attack Sport Club – Online Class and Coach Management",
    //   imgSrc: AttackImg,
      description: [
        "Intuitive platform for exploring fitness classes and coach profiles.",
        "Users can register for classes online and filter by intensity, goals, or schedule.",
        "Each coach has a profile with qualifications, specializations, and reviews.",
        "Features an easy-to-navigate calendar for managing bookings, cancellations, and reminders.",
      ],
    },
  ];

  return (
    <section id="projects">
      <p className="section-title">Projects</p>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-view">
              <img src={project.imgSrc} alt={project.title} />
            </div>
            <div className="project-description">
              <p className="project-title">{project.title}</p>
              <ul>
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
