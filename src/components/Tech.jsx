import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (  
    <>
    <div>
      <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>skills</p>
          <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>
    </div>
      
    {/* flex flex-row justify-center flex-wrap-reverse  */}
      <div className="tech-card">
        {technologies.map((category) => (
          // className="w-full mb-10 p-20"
          <div key={category.category} 
          // style={{ borderRadius: '20px', backgroundColor: "#000000b2"}}
          className="p-6">
            <h2 className="text-2xl font-semibold text-center text-white-200">{category.category}</h2>
            <div className="flex flex-row flex-wrap justify-center mt-4 gap-14 gap-y-0">
              {category.items.map((technology) => (
                <div
                  key={technology.name}
                  className="w-28 h-28 flex items-center justify-center">
                  {/* className="w-28 h-28 flex items-center justify-center"> */}
                  <img src={technology.icon} alt={technology.name} className="w-14 h-14" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

export default SectionWrapper(Tech, "");
