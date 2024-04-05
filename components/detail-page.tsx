import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./detail-page.module.css";

const DetailPage: NextPage = () => {
  const router = useRouter();

  const onCompanyLogoClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className={styles.detailPage}>
      <section className={styles.logicGate}>
        <div className={styles.connectionPoint} />
      </section>
      <section className={styles.header}>
        <div className={styles.branch}>
          <div className={styles.input} />
          <div className={styles.output}>
            <div className={styles.companyLogoParent}>
              <div
                className={styles.companyLogo}
                onClick={onCompanyLogoClick}
              />
              <div className={styles.logo}>LOGO</div>
            </div>
          </div>
          <div className={styles.comparator}>
            <div className={styles.timer}>
              <div className={styles.classes}>Classes</div>
              <div className={styles.tutors}>Tutors</div>
            </div>
          </div>
          <div className={styles.actuator}>
            <div className={styles.aboutUs}>About Us</div>
          </div>
          <div className={styles.sequencer}>
            <div className={styles.login}>Login</div>
          </div>
          <div className={styles.stack}>
            <div className={styles.map} />
          </div>
        </div>
      </section>
      <section className={styles.filter}>
        <div className={styles.contents}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.opening}>
              <img
                className={styles.image10Icon}
                alt=""
                src="/image-10@2x.png"
              />
              <div className={styles.descriptionParent}>
                <div className={styles.description}>
                  <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                      <div className={styles.englishIndonesianParent}>
                        <div className={styles.englishIndonesian}>
                          English, Indonesian
                        </div>
                        <div className={styles.image11Wrapper}>
                          <img
                            className={styles.image11Icon}
                            loading="lazy"
                            alt=""
                            src="/image-11@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla...
                      </div>
                    </div>
                    <div className={styles.seeMore}>See More...</div>
                  </div>
                </div>
                <div className={styles.title}>
                  <img
                    className={styles.enrollmentIcon}
                    loading="lazy"
                    alt=""
                    src="/enrollment.svg"
                  />
                  <div className={styles.titleInner}>
                    <div className={styles.frameContainer}>
                      <div className={styles.image12Wrapper}>
                        <img
                          className={styles.image12Icon}
                          loading="lazy"
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                      <div className={styles.creativeJournalismForScholaParent}>
                        <h1 className={styles.creativeJournalismFor}>
                          Creative Journalism for Scholars
                        </h1>
                        <div className={styles.frameWrapper}>
                          <div className={styles.iconStarOutlineParent}>
                            <div className={styles.iconStarOutline}>
                              <img
                                className={styles.vectorIcon}
                                loading="lazy"
                                alt=""
                                src="/vector.svg"
                              />
                              <div className={styles.iconStarOutline1}>
                                <img
                                  className={styles.vectorIcon1}
                                  loading="lazy"
                                  alt=""
                                  src="/vector.svg"
                                />
                                <div className={styles.iconStarOutline2}>
                                  <img
                                    className={styles.monitorIcon}
                                    loading="lazy"
                                    alt=""
                                    src="/vector.svg"
                                  />
                                  <img
                                    className={styles.iconStarOutline3}
                                    loading="lazy"
                                    alt=""
                                    src="/-icon-star-outline.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <img
                              className={styles.iconStarOutline4}
                              loading="lazy"
                              alt=""
                              src="/-icon-star-outline-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logicGateway}>
            <div className={styles.nav}>
              <div className={styles.navInner}>
                <div className={styles.groupDiv}>
                  <div className={styles.overviewWrapper}>
                    <div className={styles.overview}>Overview</div>
                  </div>
                  <div className={styles.frameItem} />
                  <div className={styles.requirementsWrapper}>
                    <div className={styles.requirements}>Requirements</div>
                  </div>
                  <div className={styles.frameInner} />
                  <div className={styles.skillsWrapper}>
                    <div className={styles.skills}>Skills</div>
                  </div>
                  <div className={styles.lineDiv} />
                  <div className={styles.careerWrapper}>
                    <div className={styles.career}>Career</div>
                  </div>
                  <div className={styles.errorHandler}>
                    <div className={styles.functionCall} />
                  </div>
                  <div className={styles.academicWrapper}>
                    <div className={styles.academic}>Academic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.variableHolder}>
            <div className={styles.comments}>
              <div
                className={styles.whatPeopleSay}
              >{`What people say about this course: `}</div>
              <div className={styles.comments1}>
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
                          <div className={styles.edwardNathanS}>
                            {edwardNathanS}
                          </div>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.comment2Wrapper} style={frameDiv1Style}>
                  <div className={styles.comment2} style={comment2Style}>
                    <div className={styles.comment2Child} />
                    <div className={styles.ellipseGroup}>
                      <img
                        className={styles.frameChild1}
                        loading="lazy"
                        alt=""
                        src={ellipse10}
                      />
                      <div className={styles.frameWrapper1}>
                        <div className={styles.jamesEdwinWParent}>
                          <div className={styles.jamesEdwinW}>
                            {edwardNathanS}
                          </div>
                          <div className={styles.universitasMultimediaNusanta1}>
                            Universitas Multimedia Nusantara
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.loremIpsumDolorSitAmetCoContainer}
                      style={frameDiv2Style}
                    >
                      <div className={styles.loremIpsumDolor2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.commentsInner}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle-45.svg"
                    />
                    <div className={styles.comment3}>
                      <div className={styles.ellipseContainer}>
                        <img
                          className={styles.frameChild2}
                          loading="lazy"
                          alt=""
                          src="/ellipse-10-2@2x.png"
                        />
                        <div className={styles.frameWrapper2}>
                          <div className={styles.jacinthaCParent}>
                            <div
                              className={styles.jacinthaC}
                            >{`Jacintha C. `}</div>
                            <div
                              className={styles.universitasMultimediaNusanta2}
                            >
                              Universitas Multimedia Nusantara
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.loremIpsumDolorSitAmetCoFrame}>
                        <div className={styles.loremIpsumDolor3}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. In egestas erat imperdiet sed
                          euismod nisi porta lorem mollis.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapperSkills}>
            <img
              className={styles.skillsIcon}
              loading="lazy"
              alt=""
              src="/skills@2x.png"
            />
          </div>
          <h1 className={styles.enrollNow}>Enroll Now</h1>
          <div className={styles.contentsChild} />
          <h3 className={styles.addToCart}>Add to cart</h3>
        </div>
        <div className={styles.carousel1}>
          <div className={styles.functionCall1}>
            <div className={styles.classesYouMightLikeWrapper}>
              <div className={styles.classesYouMight}>
                Classes You Might Like:
              </div>
            </div>
            <button className={styles.viewAllButton}>
              <div className={styles.constant} />
              <div className={styles.viewAll}>View All</div>
            </button>
          </div>
          <div className={styles.classesCarousel}>
            <div className={styles.classes1}>
              <img
                className={styles.class1Icon}
                loading="lazy"
                alt=""
                src="/class-1.svg"
              />
              <img
                className={styles.class2Icon}
                loading="lazy"
                alt=""
                src="/class-2.svg"
              />
              <img
                className={styles.class3Icon}
                loading="lazy"
                alt=""
                src="/class-2.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.while}>
        <div className={styles.footer}>
          <div className={styles.switch}>
            <div className={styles.break}>
              <div className={styles.functionDefinitionParent}>
                <div className={styles.functionDefinition}>
                  <div className={styles.teachOnEducatron}>
                    Teach on Educatron
                  </div>
                  <div className={styles.aboutUs1}>About us</div>
                  <div className={styles.contactUs}>Contact us</div>
                  <div className={styles.amongUs}>Among us</div>
                </div>
                <div className={styles.assign}>
                  <div className={styles.careers}>Careers</div>
                  <div className={styles.compare}>
                    <div className={styles.blog}>Blog</div>
                  </div>
                  <div className={styles.compare1}>
                    <div className={styles.help}>Help</div>
                  </div>
                  <div className={styles.investors}>Investors</div>
                </div>
                <div className={styles.arithmeticOperator}>
                  <div className={styles.terms}>Terms</div>
                  <div className={styles.bitwiseOperator}>
                    <div className={styles.privacyPolicy}>Privacy policy</div>
                    <div className={styles.statementList}>
                      <div className={styles.assignmentStatement}>
                        <div className={styles.cookieSettings}>
                          Cookie settings
                        </div>
                      </div>
                      <div className={styles.sitemap}>Sitemap</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.forStatement}>
                <div className={styles.moonlayTechnologies}>
                  © 2024 Moonlay Technologies
                </div>
              </div>
            </div>
            <div className={styles.switchStatement}>
              <div className={styles.breakStatement}>
                <div className={styles.continueStatement} />
                <div className={styles.functionCallStatement}>
                  <h1 className={styles.lo}>LO</h1>
                </div>
                <div className={styles.expressionStatement}>
                  <h1 className={styles.go}>GO</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
