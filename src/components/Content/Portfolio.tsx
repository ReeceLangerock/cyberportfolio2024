import { useState } from "react";
import styles from "./Portfolio.module.css";
import {portfolioItems} from "./PortfolioItems";

export const Portfolio: React.FC = () => {

    const [activeItem, setActiveItem] = useState(0);

  return (
    <div className={styles.grid}>
      <div className={styles.portfolioListContainer}>
        <h2>Projects</h2>
        <ul className={styles.portfolioList}>
            {portfolioItems.map((item, index) => (
                <li key={index} className={`${styles.portfolioItem} ${index === activeItem ? styles.active : ""}`} onClick={()=>setActiveItem(index)}>
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
        <a className={styles.link}>View Project</a>
        <a className={styles.link}>View Code</a>
        <p>{portfolioItems[activeItem].synopsis}</p>
      </div>
      <div className={styles.imageContainer}>
        {portfolioItems[activeItem].images.map((image, index) => (
            <>
            <img key={index} src={`/images/${image}.png`} alt={portfolioItems[activeItem].imageAltTexts[index]} className={styles.image}/>
            <div className={styles.altText}>{portfolioItems[activeItem].imageAltTexts[index]}</div>
            </>
        ))}
      </div>
    </div>
  );
};


// background: radial-gradient(
//     circle at 30% -100px, /* Offset the center by 100px from both top and left */
//     var(--backgroundRed) 10%,
//     var(--backgroundDark) 70%
//   );