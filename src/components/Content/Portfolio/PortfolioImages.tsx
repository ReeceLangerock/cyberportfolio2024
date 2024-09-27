import Image from "next/image";
import styles from "./PortfolioImages.module.css";

type Props = {
  activeProject: {
    images?: string[];
    imageAltTexts?: string[];
  };
};

export const PortfolioImages: React.FC<Props> = ({
  activeProject: { imageAltTexts, images },
}) => (
  <div className={styles.imageContainer}>
    {(images || []).map((image, index) => {
      const altText = imageAltTexts ? imageAltTexts[index] : "";
      return (
        <div className={styles.imageWrapper}>
          <Image
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            height={250}
            width={350}
            key={index}
            src={`/images/mm.png`}
            alt={altText}
            className={styles.image}
          />
          <div className={styles.altText}>{altText}</div>
        </div>
      );
    })}
  </div>
);
