import type { NextPage } from "next";
import styles from "./header-logged-in.module.css";

const HeaderLoggedIn: NextPage = () => {
  return (
    <div className={styles.headerLoggedIn}>
      <div className={styles.headerLoggedIn1}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.login}>Login</div>
          <img
            className={styles.profilePicIcon}
            alt=""
            src="/profile-pic@2x.png"
          />
          <div className={styles.greetings}>
            <b className={styles.edwardNathanS}>Edward Nathan .S</b>
            <div className={styles.welcome}>Welcome!</div>
          </div>
          <img className={styles.menuIcon} alt="" src="/menu@2x.png" />
          <img
            className={styles.educatronHighResolutionLogoIcon}
            alt=""
            src="/educatronhighresolutionlogowhitetransparent-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderLoggedIn;
