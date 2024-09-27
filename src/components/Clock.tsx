import { AnimatePresence, motion } from "framer-motion";
import styles from "./Clock.module.css";
import { useState, useEffect } from "react";

export const Clock: React.FC = () => {
  const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 30000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <AnimatePresence>
      <motion.div
        key={"clock"}
        animate={{
          opacity: [0.9, 1],
          scale: [0.8, 0.9, 1],
          transition: { duration: 1, type: "spring" },
        }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={styles.timeContainer}
      >
        {time}
      </motion.div>
      ;
    </AnimatePresence>
  );
};
