import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline({ mode = 'dark' }: { mode?: string }) {
  return (
    <div id="history">
      <div className="items-container">
        <span className="section-eyebrow">Where I've been</span>
        <h2 className="section-title">Education</h2>
        <VerticalTimeline>
          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2025 - 2027"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Sabancı University</h3>
            <h4 className="vertical-timeline-element-subtitle">Istanbul, Turkey</h4>
            <p>MSc. in Computer Science and Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug. 2020 -- Jan 2025"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Sabancı University</h3>
            <h4 className="vertical-timeline-element-subtitle">Istanbul, Turkey</h4>
            <p>BSc. in Computer Science, Minor in Business Analytics<br />All times Dean's List. Graduated with distinction.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep. 2015 -- Jun 2020"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Notre Dame de Sion French High School</h3>
            <h4 className="vertical-timeline-element-subtitle">Istanbul, Turkey</h4>
            <p>French Baccalauréat equivalent high school diploma</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <h2 className="section-title" style={{ marginTop: '4rem' }}>Experience</h2>
        <VerticalTimeline>
          {/* Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2025 - Present"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Sabancı University, Istanbul, Turkey</h4>
            <p>CS404 Artificial Intelligence</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 - Present"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">TÜBİTAK Informatics, and Information Security Research Center, Kocaeli, Turkey</h4>
            <ul>
              <li>Conducting research in big data, cloud computing, and machine learning, focusing on innovative solutions and methodologies.</li>
              <li>Collaborating with interdisciplinary teams to develop and implement cutting-edge technologies and research projects.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - Jan 2025"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Ericsson, Istanbul, Turkey</h4>
            <ul>
              <li>Developed ML models (XGBoost, Random Forest, LightGBM) and DL architectures (MobileNet, custom CNN) for signal identification, enhancing classification accuracy through feature engineering.</li>
              <li>Designed CNN-based models for DDoS detection, improving detection accuracy and minimizing false positives.</li>
              <li>Enhanced federated learning security using autoencoders, clustering, and CNN models to detect anomalies while preserving data confidentiality.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb. 2023 - Jun. 2023"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Learning Assistant (CS201)</h3>
            <h4 className="vertical-timeline-element-subtitle">Sabancı University, Istanbul, Turkey</h4>
            <ul>
              <li>Taught a class of undergraduate students for the course CS201 (Programming Fundamentals) in recitation hours, providing guidance and support to enhance their understanding of programming concepts.</li>
              <li>Held office hours and proctored exams, ensuring a fair and conducive learning environment.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan. 2023 - Feb. 2023"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">TÜBİTAK Informatics, and Information Security Research Center, Kocaeli, Turkey</h4>
            <ul>
              <li>Participated in real-life projects with a focus on blockchain technologies, contributing to the development of an NFT marketplace.</li>
              <li>Collaborated with a team of engineers to design and implement innovative solutions using blockchain technology.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2022 - Sep 2022"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Intertech Information Technology and Marketing Inc., Istanbul, Turkey</h4>
            <ul>
              <li>Led a cross-functional team as Scrum Master, overseeing daily meetings and facilitating agile development practices to ensure project success.</li>
              <li>Developed a blockchain-based investment platform, demonstrating expertise in blockchain technology and software development.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb. 2022 - Jun. 2022"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Learning Assistant (Calculus-II)</h3>
            <h4 className="vertical-timeline-element-subtitle">Sabancı University, Istanbul, Turkey</h4>
            <ul>
              <li>Taught a class of undergraduate students for the course (Calculus-II) in recitation hours, providing additional support and clarification on complex mathematical concepts.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;