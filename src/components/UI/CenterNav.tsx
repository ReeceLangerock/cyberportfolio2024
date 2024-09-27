import styles from "./Nav.module.css";
import { LINKS } from "@/types/enums";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./Button";

type Props = {
  handlePageChange: (page: string) => void;
};

export const CenterNav: React.FC<Props> = ({ handlePageChange }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="centerNav"
        animate={{
          opacity: [0.9, 1],
          scale: [0.8, 0.9, 1],
          y: [20, 0],
          transition: { duration: 1, type: "spring" },
        }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={styles.buttonContainer}
      >
        <Button
          text="ABOUT"
          handleClick={() => handlePageChange(LINKS.ABOUT)}
        />
        <Button
          text="PORTFOLIO"
          handleClick={() => handlePageChange(LINKS.PORTFOLIO)}
        />
        <Button
          text="CONTACT"
          handleClick={() => handlePageChange(LINKS.CONTACT)}
        />
      </motion.div>
    </AnimatePresence>
  );
};
