import type { NextPage } from "next";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const InfoIcon: NextPage = () => {
  return (
    <img className={styles.infoIcon} loading="lazy" alt="" src="/info.svg" />
  );
};

export default InfoIcon;
