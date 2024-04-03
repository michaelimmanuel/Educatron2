import { useMemo } from "react";
import styles from "./frame-component.module.css";

const FrameComponent = ({
  ellipse10,
  edwardNathanS,
  propWidth,
  propPadding,
  propPadding1,
  propPadding2,
}) => {
  const disconnectorStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const comment1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={styles.disconnector} style={disconnectorStyle}>
      <div className={styles.comment1} style={comment1Style}>
        <div className={styles.comment1Child} />
        <div className={styles.ellipseParent}>
          <img
            className={styles.ellipseIcon}
            loading="lazy"
            alt=""
            src={ellipse10}
          />
          <div className={styles.frameDiv}>
            <div className={styles.edwardNathanSParent}>
              <div className={styles.edwardNathanS}>{edwardNathanS}</div>
              <div className={styles.universitasMultimediaNusanta}>
                Universitas Multimedia Nusantara
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.loremIpsumDolorSitAmetCoWrapper}
          style={frameDivStyle}
        >
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            egestas erat imperdiet sed euismod nisi porta lorem mollis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
