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
      

      <div className="flex flex-row mt-20">
        {technologies.map((category) => (
          <div key={category.category} className="w-full mb-10">
            <h2 className="text-2xl font-bold text-center mb-5">{category.category}</h2>
            <div className="flex flex-row flex-wrap justify-center gap-10">
              {category.items.map((technology) => (
                <div
                  key={technology.name}
                  className="w-28 h-28 flex items-center justify-center">
                  <img src={technology.icon} alt={technology.name} className="w-16 h-16" />
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
