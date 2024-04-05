import type { NextPage } from "next";
import styles from "./header.module.css";

const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.navigation}>
          <div className={styles.classes}>Classes</div>
          <div className={styles.tutors}>Tutors</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.login}>Login</div>
        </div>
      </div>
      <img
        className={styles.educatronHighResolutionLogoIcon}
        alt=""
        src="/educatronhighresolutionlogowhitetransparent-1@2x.png"
      />
    </div>
  );
};

export default Header;
