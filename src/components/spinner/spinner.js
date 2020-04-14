import React from "react";
import classNames from "classnames";
import styles from "./spinner.module.css";

const Spinner = ({ style }) => (
  <div className={classNames([styles.spinner, styles.spinnerCenter])} style={style}>
    <div className={styles.spinnerInner}></div>
    <div className={styles.spinnerInner}></div>
    <div className={styles.spinnerInner}></div>
    <div className={styles.spinnerInner}></div>
  </div>
);

export default Spinner;
