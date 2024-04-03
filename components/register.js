import styles from "./register.module.css";

const Register = () => {
  return (
    <div className={styles.register}>
      <section className={styles.registerInner}>
        <div className={styles.frameChild} />
      </section>
      <section className={styles.ellipseParent}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/ellipse-7@2x.png"
        />
        <img className={styles.frameInner} alt="" src="/ellipse-8@2x.png" />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-5@2x.png"
        />
      </section>
      <section className={styles.foreground}>
        <div className={styles.alreadyHaveAn}>
          Already have an account? Login
        </div>
        <div className={styles.createAnAccount}>
          <div className={styles.socialMediaLogins}>
            <div className={styles.googleLogin}>
              <div className={styles.facebookLogin}>
                <h2 className={styles.createAnAccount1}>Create an account</h2>
              </div>
              <div className={styles.rdPartyLogin}>
                <div className={styles.googleWrapper}>
                  <div className={styles.google}>
                    <div className={styles.passwordField} />
                    <img
                      className={styles.image1Icon}
                      loading="lazy"
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.emailIcon}>
                  <div className={styles.microsoft}>
                    <div className={styles.passwordIcons} />
                    <img
                      className={styles.image2Icon}
                      loading="lazy"
                      alt=""
                      src="/image-2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.facebookWrapper}>
                  <div className={styles.facebook}>
                    <div className={styles.facebookChild} />
                    <img
                      className={styles.image3Icon}
                      loading="lazy"
                      alt=""
                      src="/image-3@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.appleWrapper}>
                  <div className={styles.apple}>
                    <div className={styles.appleChild} />
                    <img
                      className={styles.image4Icon}
                      loading="lazy"
                      alt=""
                      src="/image-4@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.facebookLogo}>
            <div className={styles.appleLogo}>
              <div className={styles.email}>
                <div className={styles.emailChild} />
                <input
                  className={styles.email1}
                  placeholder="email"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.appleLogo1}>
              <div className={styles.username}>
                <div className={styles.usernameChild} />
                <input
                  className={styles.username1}
                  placeholder="username"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.passwordsMustHaveMin8ChaWrapper}>
              <div className={styles.passwordsMustHave}>
                Passwords must have min. 8 characters, 1 Uppercase letter, 1
                lowercase letter, 1 number, and 1 Symbol
              </div>
            </div>
            <div className={styles.appleLogo2}>
              <div className={styles.password}>
                <div className={styles.passwordChild} />
                <input
                  className={styles.password1}
                  placeholder="password"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.confirmPassword}>
              <div className={styles.confirmPasswordChild} />
              <div className={styles.confirmPassword1}>confirm password</div>
            </div>
          </div>
          <img
            className={styles.roundedShapeIcon}
            alt=""
            src="/rounded-shape@2x.png"
          />
          <div className={styles.register1}>Register</div>
        </div>
      </section>
    </div>
  );
};

export default Register;
