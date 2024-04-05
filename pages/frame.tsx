import type { NextPage } from "next";
import DetailPage from "../components/detail-page";
import styles from "./frame.module.css";

const Frame: NextPage = () => {
  return (
    <div className={styles.courses}>
      <DetailPageIcon />
    </div>
  );
};

export default Frame;
