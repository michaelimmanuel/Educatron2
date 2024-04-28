import type { NextPage } from "next";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const HeaderLoggedIn2: NextPage = () => {

  return (
    <header className={styles.headerLoggedIn}>

      <div className={styles.headerLoggedIn1}>
        <div className={styles.greetingsBox}>
          <div className={styles.profilePicContainer} />

          <div className={styles.login}>Login</div>
          <div className={styles.greetingsBoxInner}>
            <div className={styles.educatronHighResolutionLogoParent}>
              <img
                className={styles.educatronHighResolutionLogoIcon}
                loading="lazy"
                alt=""
                src="/educatronhighresolutionlogowhitetransparent-1@2x.png"
              />
              <div className={styles.menuWrapper}>
                <img
                  className={styles.menuIcon}
                  loading="lazy"
                  alt=""
                  src="/menu@2x.png"
                />
              </div>
            </div>

          </div>
          <div className={styles.frameParent}>
            <div className={styles.greetingsWrapper}>
              <div className={styles.greetings}>
                <div className={styles.welcomeWrapper}>
                  <h2 className={styles.welcome}>Welcome!</h2>
                </div>
                <h2 className={styles.edwardNathanS}>Edward Nathan .S</h2>
              </div>
            </div>
            <img
              className={styles.profilePicIcon}
              loading="lazy"
              alt=""
              src="/profile-pic@2x.png"
            />
          </div>

        </div>
      </div>
    </header>

  );
};

export default HeaderLoggedIn2;

