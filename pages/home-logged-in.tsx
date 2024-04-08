import type { NextPage } from "next";
import styles from "./home-logged-in.module.css";

const HomeLoggedIn: NextPage = () => {
  return (
    <div className={styles.homeLoggedIn}>
      <div className={styles.home}>
        <img className={styles.contentsIcon} alt="" src="/contents.svg" />
        <div className={styles.footer}>
          <div className={styles.educatronLtd2023}>® Educatron Ltd. 2023</div>
          <div className={styles.footerNavigation}>
            <div className={styles.contactUs}>Contact Us:</div>
            <div className={styles.logos}>
              <img
                className={styles.instagramCircleIcon}
                alt=""
                src="/instagram-circle@2x.png"
              />
              <img
                className={styles.facebookIcon}
                alt=""
                src="/facebook@2x.png"
              />
              <img
                className={styles.linkedinIcon}
                alt=""
                src="/linkedin@2x.png"
              />
              <img
                className={styles.whatsappIcon}
                alt=""
                src="/whatsapp@2x.png"
              />
              <img
                className={styles.circledEnvelopeIcon}
                alt=""
                src="/circled-envelope@2x.png"
              />
            </div>
          </div>
          <div className={styles.policies}>
            <div className={styles.policiesChild} />
            <div className={styles.privacy}>Privacy</div>
            <div className={styles.tc}>{`T&C`}</div>
            <div className={styles.copyright}>Copyright</div>
            <div className={styles.policies1}>Policies:</div>
          </div>
          <div className={styles.policies2}>
            <div className={styles.policiesChild} />
            <div className={styles.career}>Career</div>
            <div className={styles.advertise}>Advertise</div>
            <div className={styles.collaborate}>Collaborate:</div>
          </div>
          <img
            className={styles.educatronHighResolutionLogoIcon}
            alt=""
            src="/educatronhighresolutionlogowhitetransparent-3@2x.png"
          />
        </div>
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
                className={styles.educatronHighResolutionLogoIcon1}
                alt=""
                src="/educatronhighresolutionlogowhitetransparent-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoggedIn;
