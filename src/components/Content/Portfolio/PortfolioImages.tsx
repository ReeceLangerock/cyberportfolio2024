import Image from "next/image";
import styles from "./PortfolioImages.module.css";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  activeProject: {
    images?: string[];
    imageAltTexts?: string[];
  };
};

export const PortfolioImages: React.FC<Props> = ({
  activeProject: { imageAltTexts, images },
}) => (
  <>
    {images && (
      <AnimatePresence>
        <motion.div
          key="portfolioImages"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: [0, 0.33, 1], scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ delay: 0.4 }}
          className={styles.imageContainer}
        >
          {images.map((image, index) => {
            const altText = imageAltTexts ? imageAltTexts[index] : "";
            return (
              <div className={styles.imageWrapper} key={image}>
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  height={250}
                  width={350}
                  key={index}
                  src={`/images/${image}` || ""}
                  alt={altText}
                  className={styles.image}
                />
                <div className={styles.altText}>{altText}</div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    )}
  </>
);
