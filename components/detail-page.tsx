import type { NextPage } from "next";
import styles from "./detail-page.module.css";

const DetailPage: NextPage = () => {
  return (
    <img className={styles.detailPageIcon} alt="" src="/detail-page.svg" />
  );
};

export default DetailPage;
