import React from "react";
import styles from "./Plates.module.css";

const Plates = ({ plates }) => {
  return (
    <div className={styles.wrapper}>
      {" "}
      {plates.map((el, i) => (
        <div className={styles.plateContainer} key={i}>
          {el.icon && <img src={el.icon} alt="#" className={styles.icon} />}
          <div className={styles.plate}>{el.plate}</div>
        </div>
      ))}
    </div>
  );
};

export default Plates;
