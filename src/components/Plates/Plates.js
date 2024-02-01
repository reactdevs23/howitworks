import React from "react";
import styles from "./Plates.module.css";

const Plates = ({ plates }) => {
  return (
    <div className={styles.wrapper}>
      {" "}
      {plates.map((el, i) => (
        <div className={styles.plateContainer} key={i}>
          {el.icon && <div className={styles.icon}>{el.icon}</div>}
          <div className={styles.plate}>{el.plate}</div>
        </div>
      ))}
    </div>
  );
};

export default Plates;
