import styles from "./CenterNav.module.css";
import { motion } from "framer-motion";

export const CenterNav: React.FC = () => {
  return (
    <div className={styles.buttonContainer}>
      <motion.button whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.975 }} className={styles.button}>
        About
      </motion.button>
      <button className={styles.button}>Portfolio</button>
      <button className={styles.button}>Contact</button>
      <button className={styles.button}>Settings</button>
    </div>
  );
};
