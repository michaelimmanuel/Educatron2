import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.frameParent}>
          <div className={styles.policiesParent}>
            <div className={styles.policies}>
              <div className={styles.facebookLogo} />
              <div className={styles.policies1}>Policies:</div>
              <div className={styles.privacy}>Privacy</div>
              <div className={styles.tc}>{`T&C`}</div>
              <div className={styles.copyright}>Copyright</div>
            </div>
            <div className={styles.footerNavigation}>
              <div className={styles.contactUs}>Contact Us:</div>
              <div className={styles.logos}>
                <img
                  className={styles.instagramCircleIcon}
                  loading="lazy"
                  alt=""
                  src="/instagram-circle@2x.png"
                />
                <img
                  className={styles.instagramCircleIcon}
                  loading="lazy"
                  alt=""
                  src="/facebook@2x.png"
                />
                <img
                  className={styles.instagramCircleIcon}
                  loading="lazy"
                  alt=""
                  src="/linkedin@2x.png"
                />
                <img
                  className={styles.instagramCircleIcon}
                  loading="lazy"
                  alt=""
                  src="/whatsapp@2x.png"
                />
                <img
                  className={styles.circledEnvelopeIcon}
                  loading="lazy"
                  alt=""
                  src="/circled-envelope@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.policies2}>
            <div className={styles.facebookLogo} />
            <div className={styles.collaborate}>Collaborate:</div>
            <div className={styles.career}>Career</div>
            <div className={styles.advertise}>Advertise</div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.educatronHighResolutionLogoWrapper}>

          <img
            className={styles.educatronHighResolutionLogoIcon}
            loading="lazy"

            alt=""
            src="/educatronhighresolutionlogowhitetransparent-3@2x.png"

          />
          <img className={styles.facebookIcon} alt="" src="/facebook@2x.png" />
          <img className={styles.linkedinIcon} alt="" src="/linkedin@2x.png" />
          <img className={styles.whatsappIcon} alt="" src="/whatsapp@2x.png" />
          <img
            className={styles.circledEnvelopeIcon}
            alt=""
            src="/circled-envelope@2x.png"
          />
        </div>
        <div className={styles.educatronLtd2023}>® Educatron Ltd. 2023</div>

      </div>
    </footer>

  );
};

export default Footer;
