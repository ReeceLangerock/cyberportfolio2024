import { useState } from "react";
import styles from "./About.module.css";
import { ABOUT } from "./AboutContent";
import { AnimatePresence, motion } from "framer-motion";

export const About = () => {
  const [activeItem, setActiveItem] = useState<string | null>("front");

  return (
    <div className={styles.aboutContainer}>
      <AnimatePresence>
        <motion.div
          key="about"
          animate={{
            scale: [0.8, 0.9, 1],
          }}
          transition={{ type: "spring" }}
          className={styles.container}
        >
          <div className={styles.leftBorder}></div>
          <div className={styles.content}>
            <h2>Alias</h2>
            <hr />
            <div className={styles.name}>Reece Langerock</div>

            <h2>Backstory</h2>
            <hr />

            <h3>Software Engineer</h3>
            <p>
              Hello, I'm Reece. I'm a Senior Software Engineer working remotely
              from the Chicago suburbs. With a passion for continuous learning,
              I thrive on tackling new challenges and exploring emerging
              technologies. Over the years, I've gained a wealth of experience
              across full-stack development, from building scalable systems to
              crafting responsive, user-friendly interfaces. Whether I'm
              integrating AI-driven features, developing greenfield solutions,
              or mentoring teams, I’m driven by the excitement of solving
              complex problems and making a meaningful impact.
            </p>
            <p>
              Feel free to check out my portfolio and the skills I’ve been
              honing, but rest assured, my list of things to explore never stops
              growing!
            </p>

            <hr />

            <div className={styles.biometric}>
              <h2>Biometric Data</h2>

              <img src={`/images/barcode.png`} width="300px" />
            </div>
            {/* 
          barcode svg */}
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key="aboutTech"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ delay: 0.15 }}
          className={styles.infoContainer}
        >
          <div className={styles.techStack}>
            <h3>Front End</h3>
            <div className={styles.techContainer}>
              {ABOUT[activeItem].map((item, index) => (
                <div className={styles.button}>{item}</div>
              ))}
            </div>
          </div>
          <div className={styles.techStack}>
            <h3>Back End</h3>
            <div className={styles.techContainer}>
              {ABOUT.back.map((item, index) => (
                <div className={styles.button}>{item}</div>
              ))}
            </div>
          </div>
          <div className={styles.techStack}>
            <h3>Misc</h3>
            <div className={styles.techContainer}>
              {ABOUT.other.map((item, index) => (
                <div className={styles.button}>{item}</div>
              ))}
            </div>
          </div>
          <div className={styles.techStack}>
            <h3>Personal Interests</h3>
            <div className={styles.techContainer}>
              {ABOUT.personal.map((item, index) => (
                <div className={styles.button}>{item}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
