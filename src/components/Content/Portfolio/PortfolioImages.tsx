import Image from "next/image";
import styles from "./PortfolioImages.module.css";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  images?: string[];
  imageAltTexts?: string[];
};

export const PortfolioImages: React.FC<Props> = ({ images, imageAltTexts }) => (
  <>
    {images && (
      <AnimatePresence>
        <motion.div
          key="portfolioImages"
          animate={{ opacity: [0, 0.5, 1], scale: [0.8, 1] }}
          transition={{ delay: 0.4 }}
          className={styles.imageContainer}
        >
          {images.map((image, index) => {
            const altText = imageAltTexts ? imageAltTexts[index] : "";
            return (
              <motion.div
                whileHover={{
                  scale: 1.5,
                  x: -50,
                  zIndex: 10,
                }}
                animate={{ opacity: [0, 0.5, 1], scale: [0.8, 1] }}
                key={image}
                className={styles.imageWrapper}
              >
                <Image
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  height={250}
                  width={350}
                  key={index}
                  src={`/images/${image}.png`}
                  alt={altText}
                  className={styles.image}
                />
                <div className={styles.altText}>{altText}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    )}
  </>
);
