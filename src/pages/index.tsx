import Head from "next/head";
import { useState } from "react";
import styles from "./page.module.css";
import { Clock } from "@/components/Clock";
import { CenterNav } from "@/components/UI/CenterNav";
import { TopNav } from "@/components/UI/TopNav";
import { LINKS } from "@/types/enums";
import { Portfolio } from "@/components/Content/Portfolio/Portfolio";
import { About } from "@/components/Content/About";
import { Contact } from "@/components/Content/Contact";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "next/font/google";
import localFont from "next/font/local";
import { Button } from "@/components/UI/Button";

// Font files can be colocated inside of `pages`
const cyber = localFont({ src: "./CyberwayRiders.ttf" });
const play = Play({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [activePage, setActivePage] = useState("HOME");

  const renderContent = () => {
    switch (activePage) {
      case LINKS.HOME:
        return <CenterNav handlePageChange={setActivePage} />;
      case LINKS.ABOUT:
        return <About />;
      case LINKS.PORTFOLIO:
        return <Portfolio />;
      case LINKS.CONTACT:
        return <Contact />;

      default:
        return <CenterNav handlePageChange={setActivePage} />;
    }
  };

  // get current year
  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Langerock Portfolio {year} </title>
        <meta
          name="description"
          content="Personal portfolio for Reece Langerock"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${play.className}`}>
        <div className={styles.topFiller}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key="title"
              className={styles.title}
            >
              <h1 className={cyber.className}>
                Langerock
                <span className={play.className}>{year}</span>
              </h1>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            {activePage !== "HOME" && (
              <motion.div
                key="topNav"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <TopNav handlePageChange={setActivePage} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.topBar}>
            <div></div>
            {activePage !== "HOME" && (
              <span className={styles.activePage}>{activePage}</span>
            )}
            <div></div>
          </div>

          {renderContent()}

          <div className={styles.bottomContainer}>
            <Clock />

            {activePage !== "HOME" && (
              <Button
                text="Back"
                handleClick={() => setActivePage(LINKS.HOME)}
              />
            )}
          </div>
          <div className={`${styles.topBar} ${styles.bottomBar}`}>
            <div></div>
            <span className={styles.activePage}></span>

            <div
              style={{ display: activePage === "HOME" ? "none" : "block" }}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}
