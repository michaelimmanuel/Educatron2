import type { NextPage } from "next";
import styles from "./home.module.css";

const Home11: NextPage = () => {
  return (
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
          className={styles.educatronHighResolutionLogoIcon1}
          alt=""
          src="/educatronhighresolutionlogowhitetransparent-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Home11;
