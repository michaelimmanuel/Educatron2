import type { NextPage } from "next";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Info: NextPage = () => {
  return (
    <div className={styles.info}>
      <section className={styles.infoInner}>
        <div className={styles.frameChild} />
      </section>
      <section className={styles.nameParent}>
        <div className={styles.name}>
          <div className={styles.div}>Name:</div>
          <div className={styles.edwardMichaelAlleandro}>
            Edward Michael Alleandro Widjaja
          </div>
        </div>
        <div className={styles.birthday}>
          <div className={styles.id}>ID:</div>
          <div className={styles.div}>#696969420</div>
        </div>
        <div className={styles.gender}>
          <div className={styles.div}>Gender:</div>
          <div className={styles.male}>Male</div>
        </div>
        <div className={styles.birthday1}>
          <div className={styles.div}>Phone No.:</div>
          <div className={styles.div1}>+62 89869696969</div>
        </div>
      </section>
    </div>
  );
};

export default Info;
