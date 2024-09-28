import { useState } from "react";
import styles from "./Portfolio.module.css";
import { portfolioItems } from "./PortfolioData";
import { PortfolioImages } from "./PortfolioImages";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

export const Portfolio: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  console.log(activeItem, portfolioItems[activeItem]);

  return (
    <div className={styles.grid}>
      <LayoutGroup key="portfolioItems">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0.75 }}
            className={styles.portfolioListContainer}
          >
            <h2>Projects</h2>
            <ul className={styles.portfolioList}>
              {portfolioItems.map((item, index) => (
                <motion.li
                  exit={{ opacity: 0, scale: 0.75 }}
                  whileHover={{ scale: 1.025, x: -5 }}
                  whileTap={{ scale: 0.975 }}
                  key={index}
                  className={`${styles.portfolioItem} ${index === activeItem ? styles.active : ""}`}
                  onClick={() => setActiveItem(index)}
                >
                  <div className={styles.border}></div>
                  <div className={styles.portfolioItemContent}>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemTech}>{item.tech.join(", ")}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
      <AnimatePresence>
        <motion.div
          animate={{ opacity: [0, 0.5, 1], scale: [0.8, 1] }}
          transition={{ delay: 0.2, type: "tween" }}
          className={styles.contentContainer}
        >
          <h2>{portfolioItems[activeItem].title}</h2>
          <a href={portfolioItems[activeItem].siteLink} target="_blank" className={styles.link}>
            View Project
          </a>
          {!portfolioItems[activeItem].private && (
            <a href={portfolioItems[activeItem].repoLink} target="_blank" className={styles.link}>
              View Code
            </a>
          )}
          <p>{portfolioItems[activeItem].synopsis}</p>
          {portfolioItems[activeItem].notes && (
            <p>
              <span>NOTE:</span> {portfolioItems[activeItem]?.notes}
            </p>
          )}
          <p>
            <span>Built With:</span> {portfolioItems[activeItem].tech.join(", ")}
          </p>
          <p>
            <span>Coded in:</span> {portfolioItems[activeItem].date}
          </p>
        </motion.div>
      </AnimatePresence>
      <PortfolioImages
        images={portfolioItems[activeItem].images}
        imageAltTexts={portfolioItems[activeItem].imageAltTexts}
      />
    </div>
  );
};
