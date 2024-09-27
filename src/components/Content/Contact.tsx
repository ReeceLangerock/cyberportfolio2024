import { useState } from "react";
import styles from "./Contact.module.css";
import { Email, GitHub, LinkedIn } from "@/icons/brandIcons";
import { AnimatePresence, motion, spring } from "framer-motion";

export const Contact = () => {
  return (
    <AnimatePresence>
      <motion.div
        animate={{
          scale: [0.8, 0.9, 1],
        }}
        transition={{ type: "spring" }}
        exit={{ opacity: 0, scale: 0.75 }}
        key="contact"
        className={styles.contactContainer}
      >
        <div className={styles.top}>
          <a
            href="https://www.linkedin.com/in/reece-langerock/"
            target="_blank"
            className={styles.contactItem}
          >
            <div>LinkedIn</div>
            <LinkedIn />
          </a>
          <a
            href="mailto:reecelangerock@gmail.com"
            className={styles.contactItem}
          >
            <div>Email</div>
            <Email />
          </a>
        </div>
        <div className={styles.center}>
          <span>Contact</span>
        </div>
        <div className={styles.top}>
          <a
            href="https://github.com/ReeceLangerock"
            target="_blank"
            className={styles.contactItem}
          >
            <div>GitHub</div>
            <GitHub />
          </a>
          <div className={styles.contactItem}>
            <div>GitLab</div>
            <LinkedIn />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
