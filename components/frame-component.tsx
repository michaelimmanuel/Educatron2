import type { NextPage } from "next";
import HeaderLoggedIn from "./header-logged-in";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.headerLoggedInWrapper}>
      <HeaderLoggedIn />
    </div>
  );
};

export default FrameComponent;
