import styles from "./CenterNav.module.css";

export const TopNav: React.FC = () => {
  return (
    <div className={styles.linkContainer}>
      <button className={styles.link}>About</button>
      <button className={styles.link}>Portfolio</button>
      <button className={styles.link}>Contact</button>
      <button className={styles.link}>Settings</button>
    </div>
  );
};
