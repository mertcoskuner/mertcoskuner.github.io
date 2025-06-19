import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const getColors = (mode: string) =>
  mode === 'dark'
    ? {
        cardBg: 'rgba(255,255,255,0.02)',
        title: 'white',
        desc: '#e0e0e0',
      }
    : {
        cardBg: 'rgba(0,0,0,0.04)',
        title: '#0d1116',
        desc: '#222',
      };

function Timeline({ mode = 'dark' }: { mode?: string }) {
  const colors = getColors(mode);
  return (
    <div id="history">
      <div className="items-container">
        <h1 style={{color: colors.title}}>Education</h1>
        <VerticalTimeline>
          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: colors.cardBg, color: colors.desc, borderRadius: 18 }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.cardBg}` }}
            date="Aug. 2020 -- Jan 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: colors.title}}>Sabancı University</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: colors.desc}}>Istanbul, Turkey</h4>
            <p style={{color: colors.desc}}>BSc. in Computer Science, Minor in Business Analytics<br/>All times Dean's List. Graduated with distinction.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: colors.cardBg, color: colors.desc, borderRadius: 18 }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.cardBg}` }}
            date="Sep. 2015 -- Jun 2020"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: colors.title}}>Notre Dame de Sion French High School</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: colors.desc}}>Istanbul, Turkey</h4>
            <p style={{color: colors.desc}}>French Baccalauréat equivalent high school diploma</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <h1 style={{marginTop: '3rem', color: colors.title}}>Experience</h1>
        <VerticalTimeline>
          {/* Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors.cardBg, color: colors.desc, borderRadius: 18 }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.cardBg}` }}
            date="Jan 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: colors.title}}>Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: colors.desc}}>TÜBİTAK Informatics, and Information Security Research Center, Kocaeli, Turkey</h4>
            <ul>
              <li style={{color: colors.desc}}>Conducting research in big data, cloud computing, and machine learning, focusing on innovative solutions and methodologies.</li>
              <li style={{color: colors.desc}}>Collaborating with interdisciplinary teams to develop and implement cutting-edge technologies and research projects.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors.cardBg, color: colors.desc, borderRadius: 18 }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.cardBg}` }}
            date="July 2024 - Jan 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: colors.title}}>Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: colors.desc}}>Ericsson, Istanbul, Turkey</h4>
            <ul>
              <li style={{color: colors.desc}}>Developed ML models (XGBoost, Random Forest, LightGBM) and DL architectures (MobileNet, custom CNN) for signal identification, enhancing classification accuracy through feature engineering.</li>
              <li style={{color: colors.desc}}>Designed CNN-based models for DDoS detection, improving detection accuracy and minimizing false positives.</li>
              <li style={{color: colors.desc}}>Enhanced federated learning security using autoencoders, clustering, and CNN models to detect anomalies while preserving data confidentiality.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors.cardBg, color: colors.desc, borderRadius: 18 }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.cardBg}` }}
            date="Feb. 2023 - Jun. 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: colors.title}}>Learning Assistant (CS201)</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: colors.desc}}>Sabancı University, Istanbul, Turkey</h4>
            <ul>
              <li style={{color: colors.desc}}>Taught a class of undergraduate students for the course CS201 (Programming Fundamentals) in recitation hours, providing guidance and support to enhance their understanding of programming concepts.</li>
              <li style={{color: colors.desc}}>Held office hours and proctored exams, ensuring a fair and conducive learning environment.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors.cardBg, color: colors.desc, borderRadius: 18 }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.cardBg}` }}
            date="Jan. 2023 - Feb. 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: colors.title}}>Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: colors.desc}}>TÜBİTAK Informatics, and Information Security Research Center, Kocaeli, Turkey</h4>
            <ul>
              <li style={{color: colors.desc}}>Participated in real-life projects with a focus on blockchain technologies, contributing to the development of an NFT marketplace.</li>
              <li style={{color: colors.desc}}>Collaborated with a team of engineers to design and implement innovative solutions using blockchain technology.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors.cardBg, color: colors.desc, borderRadius: 18 }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.cardBg}` }}
            date="Aug 2022 - Sep 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: colors.title}}>Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: colors.desc}}>Intertech Information Technology and Marketing Inc., Istanbul, Turkey</h4>
            <ul>
              <li style={{color: colors.desc}}>Led a cross-functional team as Scrum Master, overseeing daily meetings and facilitating agile development practices to ensure project success.</li>
              <li style={{color: colors.desc}}>Developed a blockchain-based investment platform, demonstrating expertise in blockchain technology and software development.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors.cardBg, color: colors.desc, borderRadius: 18 }}
            contentArrowStyle={{ borderRight: `7px solid ${colors.cardBg}` }}
            date="Feb. 2022 - Jun. 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: colors.title}}>Learning Assistant (Calculus-II)</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: colors.desc}}>Sabancı University, Istanbul, Turkey</h4>
            <ul>
              <li style={{color: colors.desc}}>Taught a class of undergraduate students for the course (Calculus-II) in recitation hours, providing additional support and clarification on complex mathematical concepts.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;