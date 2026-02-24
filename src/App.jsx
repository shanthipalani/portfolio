import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Briefcase,
  GraduationCap,
  Code2,
  FolderRoot,
  ExternalLink,
  Award,
  Award as CertificationIcon,
  Download,
  Mail,
  Phone,
  MapPin,
  Camera,
  Presentation
} from 'lucide-react';

import talkMicrofrontend from './assets/images/talk_microfrontend.jpg';
import talkArchitecture from './assets/images/talk_architecture.jpg';
import { portfolioData } from './data/portfolio';

// Import assets
import profileImg from './assets/images/profile_final.jpg';

// Dynamic import for event images
const eventImages = import.meta.glob('./assets/images/*.{png,jpg,jpeg,JPG,jpeg}', { eager: true });
const eventImagePaths = Object.entries(eventImages)
  .filter(([path]) => !path.includes('profile') && !path.includes('profiles'))
  .map(([, mod]) => mod.default);

const Sidebar = () => {
  const navItems = [
    { label: 'About', href: '#about', icon: User },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Education', href: '#education', icon: GraduationCap },
    { label: 'Skills', href: '#skills', icon: Code2 },
    { label: 'Projects', href: '#projects', icon: FolderRoot },
    { label: 'Tech Talks', href: '#techtalks', icon: Presentation },
    { label: 'Awards', href: '#awards', icon: Award },
    { label: 'Certifications', href: '#certifications', icon: CertificationIcon },
    { label: 'Events', href: '#events', icon: Camera },
  ];

  return (
    <nav className="sidebar glass">
      <div className="profile-box">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="profile-img-container"
        >
          <img src={profileImg} alt={portfolioData.profile.name} className="profile-img" />
        </motion.div>
        <h1 className="profile-name">{portfolioData.profile.name}</h1>
        <p className="profile-role">{portfolioData.profile.role}</p>
      </div>

      <ul className="nav-links">
        {navItems.map((item, index) => (
          <motion.li
            key={item.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            <a href={item.href} className="nav-link-item">
              <item.icon size={18} className="nav-icon" />
              <span>{item.label}</span>
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <a href={portfolioData.profile.resumeLink} target="_blank" className="resume-btn">
          <Download size={16} />
          <span>Resume</span>
        </a>
      </div>
    </nav>
  );
};

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="section-container"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="section-title">
      <span className="text-gradient">{title}</span>
    </h2>
    <div className="section-content">
      {children}
    </div>
  </motion.section>
);

const App = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="content">
        <Section id="about" title="About">
          <div className="about-content">
            <div className="contact-info">
              <div className="contact-item"><MapPin size={16} className="accent-text" /> {portfolioData.profile.location}</div>
              <div className="contact-item"><Phone size={16} className="accent-text" /> {portfolioData.profile.phone}</div>
              <div className="contact-item"><Mail size={16} className="accent-text" /> {portfolioData.profile.email}</div>
            </div>
            {portfolioData.profile.about.map((p) => (
              <p key={p.substring(0, 20)} className="about-para">{p}</p>
            ))}
            <div className="highlights-grid">
              {portfolioData.profile.highlights.map((h) => (
                <motion.div
                  key={h.substring(0, 20)}
                  whileHover={{ y: -5 }}
                  className="highlight-item glass"
                >
                  {h}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="timeline">
            {portfolioData.experience.map((exp) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                className="experience-item glass"
                whileHover={{ borderColor: 'var(--accent-primary)' }}
              >
                <div className="exp-header">
                  <h3 className="text-gradient">{exp.role}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <h4 className="exp-company">{exp.company}</h4>
                <ul className="exp-desc">
                  {exp.description.map((item, j) => (
                    <li key={`${exp.company}-desc-${j}`}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          {portfolioData.education.map((edu) => (
            <div key={`${edu.institution}-${edu.degree}`} className="edu-item glass">
              <h3 className="text-gradient">{edu.degree}</h3>
              <p className="edu-school">{edu.institution}</p>
              <p className="edu-period">{edu.period}</p>
            </div>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <div className="skills-grid">
            {portfolioData.skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderColor: 'var(--accent-primary)'
                }}
                className="skill-tag glass"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="projects-grid">
            {portfolioData.projects.map((proj) => (
              <motion.div
                key={proj.title}
                whileHover={{ y: -10 }}
                className="project-card glass"
              >
                <h3 className="text-gradient">{proj.title}</h3>
                <p className="proj-tech"><strong>Tech:</strong> {proj.tech}</p>
                <p className="proj-desc">{proj.description}</p>
              </motion.div>
            ))}
          </div>
          <h3 className="sub-section-title mt-5">Personal Projects</h3>
          <div className="projects-grid">
            {portfolioData.personalProjects.map((proj) => (
              <motion.div
                key={proj.title}
                whileHover={{ y: -10 }}
                className="project-card glass accent-border"
              >
                <div className="exp-header">
                  <h3 className="text-gradient">{proj.title}</h3>
                  <a href={proj.url} target="_blank" className="proj-link" rel="noreferrer"><ExternalLink size={18} /></a>
                </div>
                <p className="proj-desc">{proj.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="techtalks" title="Tech Talks">
          <div className="techtalks-grid">
            {portfolioData.techTalks.map((talk) => (
              <motion.div
                key={talk.title}
                whileHover={{ y: -10 }}
                className="techtalk-card glass"
              >
                <div className="talk-image-wrapper">
                  <img
                    src={talk.image === 'talk_microfrontend.jpg' ? talkMicrofrontend : talkArchitecture}
                    alt={talk.title}
                    className="talk-image"
                  />
                </div>
                <div className="talk-content">
                  <h3 className="text-gradient talk-title">{talk.title}</h3>
                  <p className="talk-event">{talk.event}</p>
                  <p className="talk-desc">{talk.description}</p>
                  <a href={talk.url} target="_blank" rel="noreferrer" className="cert-link">Watch Talk</a>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="awards" title="Awards">
          <div className="awards-grid">
            {portfolioData.awards.map((award) => (
              <motion.div
                key={award}
                whileHover={{ scale: 1.02, x: 5 }}
                className="award-item glass"
              >
                <Award size={20} className="accent-text" />
                <span>{award}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="certs-grid">
            {portfolioData.certifications.map((cert) => (
              <motion.div
                key={cert.title}
                whileHover={{ y: -5 }}
                className="cert-item glass"
              >
                <h3 className="text-gradient">{cert.title}</h3>
                <p className="color-secondary">{cert.platform} | {cert.date}</p>
                <a href={cert.link} target="_blank" className="cert-link" rel="noreferrer">View Certificate</a>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="events" title="Tech Events">
          <div className="events-gallery">
            {eventImagePaths.map((path) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, zIndex: 1 }}
                className="gallery-item glass"
              >
                <img src={path} alt="Tech Event" className="gallery-img" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </Section>

        <footer className="page-footer glass">
          <p>&copy; {new Date().getFullYear()} {portfolioData.profile.name}. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="https://dev.to/shantih_palani" target="_blank" className="accent-text">Visit My Blog</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
