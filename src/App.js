import React, { useState } from "react";
import "./App.css";
import myPic from "./Assets/mypic.jpeg";
import resume from "./Assets/resume.pdf";

const projects = [
  {
    number: "01",
    title: "WAFinity",
    type: "ML × Cybersecurity",
    description:
      "An advanced web application firewall combining signature-based filtering with machine-learning anomaly detection to identify web threats in real time.",
    stack: ["Python", "Flask", "Random Forest", "NLP"],
    github: "https://github.com/sakshiikumarr/WAFinity",
  },
  {
    number: "02",
    title: "Fake News Detection",
    type: "NLP × Deep Learning",
    description:
      "A transformer-based classifier that uses BERT to analyze news text and predict whether an article is real or fake.",
    stack: ["Python", "BERT", "PyTorch", "NLP"],
    github: "https://github.com/sakshiikumarr/fake-news-classifier-bert",
  },
  {
    number: "03",
    title: "Chronic Kidney Disease Prediction",
    type: "Applied ML",
    description:
      "A machine-learning based prediction application that uses patient data to estimate the likelihood of chronic kidney disease.",
    stack: ["Python", "Scikit-learn", "Flask", "ML"],
    github: "https://github.com/sakshiikumarr/Chronic-Kidney-Disease-Prediction",
  },
  {
    number: "04",
    title: "Clara Agent Automation",
    type: "AI × Automation",
    description:
      "An AI-focused pipeline exploring agent workflows, automation, and structured execution for intelligent tasks.",
    stack: ["Python", "AI Agents", "Automation"],
    github: "https://github.com/sakshiikumarr/clara-agent-pipeline",
  },
  {
    number: "05",
    title: "Bank Marketing Analysis",
    type: "Data Science × ML",
    description:
      "An end-to-end analysis of the Bank Marketing dataset covering EDA, statistical analysis, K-Means clustering, PCA, and Random Forest classification.",
    stack: ["Python", "Pandas", "Scikit-learn", "PCA"],
    github: "https://github.com/sakshiikumarr/bank-marketing-eda-and-classification",
  },
];

const experiences = [
  {
    year: "2025",
    role: "Data Science Intern",
    company: "Cognifyz Technologies",
    text: "Worked on data science tasks involving data analysis, preprocessing, visualization, and machine-learning workflows.",
  },
  {
    year: "2024",
    role: "UI/UX Design Intern",
    company: "Kuppismart Solutions",
    text: "Worked on the Livestockify website, contributing to interface design, wireframes, and user experience for a technology product in the poultry sector.",
  },
];

const skillGroups = [
  {
    label: "DATA",
    items: ["Python", "SQL", "Pandas", "NumPy", "Power BI"],
  },
  {
    label: "MACHINE LEARNING",
    items: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "MLflow",
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "Model Evaluation",
      "Ensemble Methods",
    ],
  },
  {
    label: "AI / NLP",
    items: ["Transformers", "BERT", "NLP", "AI Agents"],
  },
  {
    label: "DEVELOPMENT",
    items: ["Flask", "React", "Git", "GitHub", "Azure"],
  },
  {
    label: "DESIGN",
    items: ["Figma", "UI/UX", "Wireframing"],
  },
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          SK<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">DATA SCIENCE · MACHINE LEARNING · AI</p>
            <h1>
              Sakshi
              <br />
              <em>Kumar.</em>
            </h1>
            <p className="hero-text">
              I build data-driven products at the intersection of
              <strong> machine learning, NLP, AI,</strong> and software.
            </p>

            <div className="hero-actions">
              <a className="button button-solid" href="#work">
                Explore my work <Arrow />
              </a>
              <a className="button button-ghost" href={resume}>
                Resume <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-card">
              <div className="card-top">
                <span>SAKSHI / 2026</span>
                <span>DATA × AI</span>
              </div>
              <img src={myPic} alt="Sakshi Kumar" />
              <div className="card-bottom">
                <span>BUILDING WITH DATA</span>
                <span>↗</span>
              </div>
            </div>
            <div className="visual-label">SCROLL TO EXPLORE ↓</div>
          </div>
        </section>

        <section className="marquee" aria-label="Areas of interest">
          <div>
            <span>PYTHON</span><i>✦</i><span>MACHINE LEARNING</span><i>✦</i>
            <span>NLP</span><i>✦</i><span>DATA SCIENCE</span><i>✦</i>
            <span>AI</span><i>✦</i><span>UI/UX</span><i>✦</i>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Curious by<br /><em>default.</em></h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm a Data Science graduate who enjoys turning messy data and
              ambitious ideas into things that actually work.
            </p>
            <div className="about-copy">
              <p>
                My work spans exploratory data analysis, machine learning,
                natural language processing, AI workflows, and application
                development.
              </p>
              <p>
                I also have a background in UI/UX, which means I care about
                what happens after the model works — how people experience
                the product built around it.
              </p>
              <p>
                Currently, I'm focused on building stronger real-world
                projects and growing as a data and AI professional.
              </p>
            </div>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <p>{group.label}</p>
                <div>
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="section work" id="work">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Things I've<br /><em>built.</em></h2>
            <p className="section-intro">
              A mix of machine learning, NLP, AI, data analysis, and applied
              software projects.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                >
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">EDUCATION</p>
            <h2>Where it<br /><em>started.</em></h2>
          </div>

          <div className="education-list">
            <article className="education-card">
              <div className="education-year">2022 — 2026</div>
              <div>
                <h3>B.Tech — Computer Science & Engineering</h3>
                <p className="education-school">VIT Vellore</p>
                <p className="education-cgpa">Specialization: Data Science · CGPA: 8.03</p>
              </div>
            </article>

            <article className="education-card">
              <div className="education-year">2021 — 2022</div>
              <div>
                <h3>Senior Secondary Education — PCM</h3>
                <p className="education-school">Delhi Public School, Bopal, Ahmedabad</p>
                <p className="education-cgpa">91.8%</p>
              </div>
            </article>

            <article className="education-card">
              <div className="education-year">2019 — 2020</div>
              <div>
                <h3>Secondary Education</h3>
                <p className="education-school">Delhi Public School, Bopal, Ahmedabad</p>
                <p className="education-cgpa">92.4%</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">EXPERIENCE</p>
            <h2>Where I've<br /><em>learned.</em></h2>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.company}>
                <div className="timeline-year">{experience.year}</div>
                <div>
                  <h3>{experience.role}</h3>
                  <p className="timeline-company">{experience.company}</p>
                  <p>{experience.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>Let's make<br /><em>something.</em></h2>
            <p className="contact-copy">
              I'm open to opportunities in data science, machine learning,
              AI, and related roles.
            </p>
            <a className="contact-email" href="mailto:sakshikumar2060@gmail.com">
              sakshikumar2060@gmail.com <Arrow />
            </a>

            <div className="contact-links">
              <a href="https://github.com/sakshiikumarr" target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/sakshi-kumar-ds/" target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <span>•</span>
              <a href="mailto:sakshikumar2060@gmail.com">
                Email <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Sakshi Kumar</span>
        <span>DATA · AI · BUILD</span>
      </footer>
    </div>
  );
}

export default App;
