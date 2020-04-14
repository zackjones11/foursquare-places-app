import React from "react";

import styles from "./loading-container.module.css";

const LoadingContainer = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.loadingContainerInner}></div>
    <div className={styles.loadingContainerInner}></div>
    <div className={styles.loadingContainerInner}></div>
    <div className={styles.loadingContainerInner}></div>
  </div>
);

export default LoadingContainer;
