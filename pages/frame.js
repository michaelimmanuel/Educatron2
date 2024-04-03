import DetailPage from "../components/detail-page";
import styles from "./frame.module.css";

const Frame = () => {
  return (
    <div className={styles.detailPageParent}>
      <DetailPageIcon />
    </div>
  );
};

export default Frame;
