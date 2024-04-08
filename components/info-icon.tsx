import type { NextPage } from "next";
import styles from "./info-icon.module.css";

const InfoIcon: NextPage = () => {
  return (
    <img className={styles.infoIcon} loading="lazy" alt="" src="/info.svg" />
  );
};

export default InfoIcon;
