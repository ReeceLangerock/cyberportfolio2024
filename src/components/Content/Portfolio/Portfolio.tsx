import { useState } from "react";
import styles from "./Portfolio.module.css";
import { portfolioItems } from "./PortfolioData";
import { PortfolioImages } from "./PortfolioImages";

export const Portfolio: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className={styles.grid}>
      <div className={styles.portfolioListContainer}>
        <h2>Projects</h2>
        <ul className={styles.portfolioList}>
          {portfolioItems.map((item, index) => (
            <li
              key={index}
              className={`${styles.portfolioItem} ${
                index === activeItem ? styles.active : ""
              }`}
              onClick={() => setActiveItem(index)}
            >
              <div className={styles.border}></div>
              <div className={styles.portfolioItemContent}>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemTech}>{item.tech.join(", ")}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contentContainer}>
        <h2>{portfolioItems[activeItem].title}</h2>
        <a
          href={portfolioItems[activeItem].siteLink}
          target="_blank"
          className={styles.link}
        >
          View Project
        </a>
        {!portfolioItems[activeItem].private && (
          <a
            href={portfolioItems[activeItem].repoLink}
            target="_blank"
            className={styles.link}
          >
            View Code
          </a>
        )}
        <p>{portfolioItems[activeItem].synopsis}</p>
        <p>Built With: {portfolioItems[activeItem].tech.join(", ")}</p>
      </div>
      <PortfolioImages activeProject={portfolioItems[activeItem]} />
    </div>
  );
};
