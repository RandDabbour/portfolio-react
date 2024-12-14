import React, { useState } from "react";
import me from "../../assests/img/me.jpg"
import "./About.css";

const About = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const clearActiveSections = () => {
    // This function is conceptually handled by updating the state in React.
    setActiveSection(""); // Clear active state
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <section>
      <p className="section-title">About Me</p>
      <div className="about-me" id="about">
        <div className="about-me-items">
          <button
            id="overview-btn"
            className={activeSection === "overview" ? "active" : ""}
            onClick={() => handleSectionChange("overview")}
          >
            Overview
          </button>
          <button
            id="education-btn"
            className={activeSection === "education" ? "active" : ""}
            onClick={() => handleSectionChange("education")}
          >
            Education
          </button>
          <button
            id="experience-btn"
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => handleSectionChange("experience")}
          >
            Experience
          </button>
        </div>
        <div className="about-me-expand">
          {activeSection === "overview" && (
            <div className="overview active">
              <p>
                My name is Rand Dabbour, a passionate software engineer from
                Jordan. I was born on August 12, 2002, and I have dedicated my
                studies and career to mastering the art of front-end development
                and user interface design. With a strong commitment to
                continuous learning and innovation, I strive to create engaging
                and user-friendly digital experiences.
              </p>
            </div>
          )}
          {activeSection === "education" && (
            <div className="education active">
              <p>
                Bachelor of Science in Software Engineering<br />
                Amman Arab University<br />
                Graduated: 2024<br />
                Achieved top ranking in my class, reflecting my dedication and
                hard work in the field of software engineering. Developed a
                comprehensive understanding of software development principles,
                algorithms, and data structures.
              </p>
            </div>
          )}
          {activeSection === "experience" && (
            <div className="experience active">
              <p>
                <strong>Front-End Developer (Freelance)</strong> <br />
                2021<br />
                Designed and developed responsive web applications,
                collaborating with clients to create custom solutions that meet
                their needs. Utilized HTML, CSS, Bootstrap5 frameworks to build
                user interfaces that enhance user experience and engagement.
                <br />
                <strong>UI/UX Designer (Freelance)</strong> <br />
                2021 - Present<br />
                Created visually appealing and user-centric designs for various
                digital products.
                <br />
                <strong>Future Advance Company</strong> <br />
                4-Month Internship<br />
                Gained hands-on experience in front-end development and UI/UX
                design within a professional environment.
              </p>
            </div>
          )}
          <div className="me">
            <img src={me} alt="Rand Dabbour" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
