import type { NextPage } from "next";
import styles from "./skills.module.css";

const Skills: NextPage = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.wrapperSkills}>
        <img className={styles.skillsIcon} alt="" src="/skills@2x.png" />
      </div>
    </div>
  );
};

export default Skills;
