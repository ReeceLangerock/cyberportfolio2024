import { AnimatePresence, motion } from "framer-motion";

import styles from "./Button.module.css";
type Props = {
  text: string;
  handleClick: (val: any) => void;
  variant?: "primary" | "secondary";
};

export const Button = ({ text, handleClick, variant = "primary" }: Props) => {
  return (
    <AnimatePresence>
      <motion.button
        key="backButton"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={
          variant === "primary" ? styles.button : styles.secondaryButton
        }
        onClick={handleClick}
      >
        {text}
      </motion.button>
    </AnimatePresence>
  );
};
