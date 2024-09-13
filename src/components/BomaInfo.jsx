import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const BomaInfo = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto py-24 md:h-auto" id="info-section">
      <motion.div
        className="flex-1 bg-black text-white p-8 sm:p-12 md:p-16 flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div>
          <h2 className="text-3xl font-serif sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">Our Process</h2>
          <p className="text-lg font-body sm:text-xl md:text-2xl">
            There is no one-size-fits-all approach for developing and implementing a successful hotel service strategy. 
            Expect consistent communication from our dedicated team, big enough to care, and small enough to deliver 
            personalized service.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex-1 bg-red-600 text-white p-8 sm:p-12 md:p-16 flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 md:mb-8">Why Work With Us</h2>
          <motion.ul className="space-y-4 font-body sm:space-y-6">
            {[
              "We are specialists in the hospitality industry.",
              "We're a full-service hotel management team.",
              "We deliver both large and small scale services.",
              "We're committed to exceptional customer care."
            ].map((text, index) => (
              <motion.li
                key={index}
                className="flex items-start text-lg sm:text-xl md:text-2xl"
                variants={itemVariants}
              >
                <FaCheckCircle className="text-white mr-3 sm:mr-4 mt-1" />
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default BomaInfo;
