import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./login1.module.css";

const LoginIcon: NextPage = () => {
  const router = useRouter();

  const onLoginTextClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onDontHaveAnClick = useCallback(() => {
    router.push("/register");
  }, [router]);

  return (
    <div className={styles.login}>
      <section className={styles.background}>
        <div className={styles.backgroundChild} />
        <img
          className={styles.backgroundItem}
          alt=""
          src="/rectangle-5@2x.png"
        />
        <h1 className={styles.welcomeToEducatronContainer}>
          <p className={styles.welcomeTo}>{`Welcome To `}</p>
          <p className={styles.educatron}>Educatron!</p>
        </h1>
        <img className={styles.backgroundInner} alt="" src="/frame-3.svg" />
      </section>
      <div className={styles.foreground}>
        <h2 className={styles.alreadyHaveAnContainer}>
          <p className={styles.alreadyHaveAn}>Already have an account?</p>
          <p className={styles.login1}>Login</p>
        </h2>
        <div className={styles.rdPartyLogin}>
          <div className={styles.googleWrapper}>
            <div className={styles.google}>
              <div className={styles.googleChild} />
              <img
                className={styles.image1Icon}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.microsoftWrapper}>
            <div className={styles.microsoft}>
              <div className={styles.microsoftChild} />
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
        <div className={styles.username}>
          <div className={styles.usernameChild} />
          <input
            className={styles.username1}
            placeholder="username"
            type="text"
          />
        </div>
        <div className={styles.password}>
          <div className={styles.passwordChild} />
          <div className={styles.password1}>password</div>
        </div>
        <div className={styles.login2} onClick={onLoginTextClick}>
          Login
        </div>
        <div className={styles.dontHaveAn} onClick={onDontHaveAnClick}>
          Don’t have an account? Register.
        </div>
      </div>
    </div>
  );
};

export default LoginIcon;
