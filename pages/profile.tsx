import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import InfoIcon from "../components/info-icon";
import Footer from "../components/footer";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Profile: NextPage = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileChild} />
      <FrameComponent />
      <main className={styles.profileInner}>
        <section className={styles.policyLinkWrapper}>
          <div className={styles.policyLink}>
            <div className={styles.externalWrapper}>
              <div className={styles.external}>
                <div className={styles.logo}>
                  <img
                    className={styles.profilePicIcon}
                    alt=""
                    src="/profile-pic-1@2x.png"
                  />
                  <div className={styles.edwardNathanSamuelParent}>
                    <h1 className={styles.edwardNathanSamuel}>
                      Edward Nathan Samuel
                    </h1>
                    <div className={styles.id}>#696969420ID</div>
                  </div>
                </div>
                <div className={styles.navigation}>
                  <div className={styles.profileWrapper}>
                    <h1 className={styles.edwardNathanSamuel}>Profile</h1>
                  </div>
                  <div className={styles.profileWrapper}>
                    <h1 className={styles.edwardNathanSamuel}>Security</h1>
                  </div>
                  <div className={styles.profileFrame}>
                    <h1
                      className={styles.edwardNathanSamuel}
                    >{`Payments & History`}</h1>
                  </div>
                  <div className={styles.frameDiv}>
                    <h1 className={styles.edwardNathanSamuel}>Account</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <InfoIcon />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
