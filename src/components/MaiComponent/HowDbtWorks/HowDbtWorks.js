import React from "react";
import styles from "./HowDbtWorks.module.css";

const HowDbtWorks = ({ heading, data }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{heading}</h2>

      <div className={styles.infoContainer}>
        {data.map((el, i) => (
          <div className={styles.box} key={i}>
            <h2 className={styles.title}>{el.title}</h2>
            <p className={styles.info}>{el.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDbtWorks;
