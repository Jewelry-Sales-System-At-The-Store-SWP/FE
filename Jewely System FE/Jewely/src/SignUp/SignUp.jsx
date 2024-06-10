import styles from "./SignUp.model.css";
const SignUp = () => {
  return (
    <div className={styles.root}>
      <div className={styles.inputFieldsWrapper}>
        <div className={styles.inputFields}>
          <div className={styles.inputFieldsInner}>
            <div className={styles.frameParent}>
              <div className={styles.createAnAccountWrapper}>
                <h1 className={styles.createAnAccount}>Create an account</h1>
              </div>
              <p className={styles.loremIpsumDolorContainer}>
                <span
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</span>
                <span className={styles.adipiscingElitMorbi}>
                  adipiscing elit. Morbi lobortis maximus
                </span>
              </p>
            </div>
          </div>
          <div className={styles.textFieldWrapper}>
            <div className={styles.textField}>
              <div className={styles.labelWrapper}>
                <div className={styles.label}>Email</div>
                <div className={styles.passwordHideSee}>
                  <img className={styles.icon} alt="" />
                  <div className={styles.hide}>Hide</div>
                </div>
              </div>
              <div className={styles.textField1}>
                <div className={styles.inputs}>
                  <div className={styles.div}>123456</div>
                  <div className={styles.inputBackground} />
                </div>
                <img className={styles.icons} alt="" />
              </div>
              <div className={styles.errorMessage}>Error message</div>
            </div>
          </div>
          <div className={styles.textFieldContainer}>
            <div className={styles.textField2}>
              <div className={styles.labelParent}>
                <div className={styles.label1}>Phone</div>
                <div className={styles.passwordHideSee1}>
                  <img className={styles.icon1} alt="" />
                  <div className={styles.hide1}>Hide</div>
                </div>
              </div>
              <input className={styles.textField3} type="text" />
              <p className={styles.errorMessage1}>
                <span
                  className={styles.weStronglyRecommend}
                >{`We strongly recommend adding a phone number. This will help verify your account `}</span>
                <span className={styles.andKeepIt}>and keep it safe.</span>
              </p>
            </div>
          </div>
          <div className={styles.signupButtonWrapper}>
            <div className={styles.textFieldParent}>
              <div className={styles.textField4}>
                <div className={styles.passwordLabelWrapper}>
                  <div className={styles.label2}>Password</div>
                  <div className={styles.passwordHideSee2}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.icon2}
                        loading="lazy"
                        alt=""
                        src="/icon-2.svg"
                      />
                    </div>
                    <div className={styles.hide2}>Hide</div>
                  </div>
                </div>
                <input className={styles.textField5} type="text" />
                <div className={styles.errorMessage2}>
                  <p
                    className={styles.weStronglyRecommend1}
                  >{`We strongly recommend adding a phone number. This will help verify your account `}</p>
                  <p className={styles.andKeepIt1}>and keep it safe.</p>
                </div>
              </div>
              <div className={styles.bullets}>
                <div className={styles.bullet}>
                  <div className={styles.bulletPoint}>
                    <div className={styles.requirementIconWrapper}>
                      <div className={styles.requirementIcon} />
                    </div>
                    <div className={styles.oneLowercaseCharacter}>
                      Use 8 or more characters
                    </div>
                  </div>
                  <div className={styles.bulletPoint1}>
                    <div className={styles.caseIconWrapper}>
                      <div className={styles.caseIcon} />
                    </div>
                    <div className={styles.oneLowercaseCharacter1}>
                      Use upper and lower case letters (e.g. Aa)
                    </div>
                  </div>
                </div>
                <div className={styles.bullet1}>
                  <div className={styles.bulletPoint2}>
                    <div className={styles.bulletPointInner}>
                      <div className={styles.frameChild} />
                    </div>
                    <div className={styles.oneLowercaseCharacter2}>
                      Use a number (e.g. 1234)
                    </div>
                  </div>
                  <div className={styles.bulletPoint3}>
                    <div className={styles.bulletPointChild}>
                      <div className={styles.frameItem} />
                    </div>
                    <div className={styles.oneLowercaseCharacter3}>
                      Use a symbol (e.g. !@#$)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>
                <div className={styles.iconsParent}>
                  <img className={styles.icons1} alt="" />
                  <a className={styles.signUp}>Sign in</a>
                </div>
              </button>
            </div>
            <div className={styles.linkText}>
              <div className={styles.byCreatingAnContainer}>
                <span
                  className={styles.byCreatingAn}
                >{`By creating an account, you agree to the `}</span>
                <span className={styles.termsOfUse}>Terms of use</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.and}>and</span>
                <span className={styles.span1}>{` `}</span>
                <span className={styles.privacyPolicy}>
                  <span>Privacy Policy.</span>
                  <span className={styles.span2}>{` `}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.login}>
        <div className={styles.haveAnAccountLogin}>
          <div className={styles.alreadyHaveAnContainer}>
            <span className={styles.alreadyHaveAn}>
              Already have an ccount?
            </span>
            <span className={styles.span3}>{` `}</span>
            <span className={styles.logIn}>{`Log in  `}</span>
          </div>
        </div>
        <div className={styles.haveAnAccountLogin1}>
          <div className={styles.alreadyHaveAn1}>
            Forget your user ID or password?
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
