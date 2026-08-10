import { motion } from "framer-motion";
import * as React from "react";
import myPic from "../../Assets/mypic.jpeg";
import resume from "../../Assets/resume.pdf";
import "./About.scss";
export default function About() {
  return (
    <div id="home" className="about-container">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="about"
      >
        <h1 className="intro-heading">Hi, I'm Sakshi Kumari ! </h1>
        <p className="intro-description">
          I'm a passionate <span>Frontend Developer</span> and <span>UI/UX Designer</span>. I love creating
          beautiful, responsive websites using modern techstacks like{" "}
          <span>ReactJs</span> and
          <span> Figma</span>.
        </p>
        <a href={resume} className="resume">
          Download my Resume
        </a>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="image-container"
      >
        <img src={myPic} alt="userimage" />
      </motion.div>
    </div>
  );
}
