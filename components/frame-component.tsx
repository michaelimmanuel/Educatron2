import type { NextPage } from "next";
import HeaderLoggedIn from "./header-logged-in";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.headerLoggedInWrapper}>
      <HeaderLoggedIn />
    </div>
  );
};

export default FrameComponent;
