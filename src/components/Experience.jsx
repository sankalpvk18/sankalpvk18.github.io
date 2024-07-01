import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="timeline-element"
    // contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '10px solid #ffffff', opacity: 0 }}
    date={experience.date}
    // iconStyle={{ background: '#fff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    // iconStyle={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}

    icon={
      <a href={experience.iconURL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <div style={{ fontSize: '32px', color: experience.iconBg }}>
        <img
          src={experience.icon}
          alt={experience.company_name}
          style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: "#000" }}
        />
      </div>
      </a>
    }
  >
    <div>
      {/* <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
      <p className="text-black-100 text-[16px] font-bold" style={{ margin: 0 }}>
        {experience.company_name}
      </p> */}
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-white-100 opacity-50 text-[16px] font-bold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        // <li key={`experience-point-${index}`} className="text-black text-[14px] pl-1 tracking-wider">
        //   {point}
        // </li>
         <li key={`experience-point-${index}`} className="text-white text-[14px] pl-1 tracking-wider">
         {point}
       </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, 'work');