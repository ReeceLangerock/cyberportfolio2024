import styles from "./Nav.module.css";
import { LINKS } from "@/types/enums";

type Props = {
  handlePageChange: (page: string) => void;
};

export const TopNav: React.FC<Props> = ({ handlePageChange }) => {
  return (
    <div className={styles.linkContainer}>
      <button
        className={styles.link}
        onClick={() => handlePageChange(LINKS.ABOUT)}
      >
        About
      </button>
      <button
        className={styles.link}
        onClick={() => handlePageChange(LINKS.PORTFOLIO)}
      >
        Portfolio
      </button>
      <button
        className={styles.link}
        onClick={() => handlePageChange(LINKS.CONTACT)}
      >
        Contact
      </button>
    </div>
  );
};
