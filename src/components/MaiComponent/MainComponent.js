import React from "react";
import styles from "./MainComponent.module.css";

import Plates from "../Plates/Plates";
import HowDbtWorks from "./HowDbtWorks/HowDbtWorks";
const MainComponent = ({ background, plates, howDbtWorks }) => {
  return (
    <div className={styles.mainWrapper} style={{ background: background }}>
      <div className={styles.wrapper}>
        <Plates plates={plates} />
        <HowDbtWorks {...howDbtWorks} />
      </div>
    </div>
  );
};

export default MainComponent;
