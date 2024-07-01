import React from "react";
// import Tilt from "react-tilt";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaLinkedin, FaGithub, FaTwitter, FaMedium, FaInstagram, FaStackOverflow, FaDownload } from 'react-icons/fa';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full border-white-100 p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-gray-300 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-gray-600 text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate Mobile App Developer with expertise in Java and Kotlin, specializing in Android and iOS development. I integrate AI/ML technologies to build innovative, scalable, and user-friendly applications. Let's collaborate to create impactful solutions!
      </motion.p>

      <div className="mt-4">
        <p className="text-secondary">You can reach me via email at sankalpvk18@gmail.com or connect with me on social media:</p>
        <div className="flex space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/sankalpvk18" target="_blank" rel="noopener noreferrer">
            {/* <FaLinkedin className="text-2xl hover:text-blue-600" /> */}
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://github.com/sankalpvk18" target="_blank" rel="noopener noreferrer">
            {/* <FaGithub className="text-2xl hover:text-gray-600" /> */}
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-20 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
