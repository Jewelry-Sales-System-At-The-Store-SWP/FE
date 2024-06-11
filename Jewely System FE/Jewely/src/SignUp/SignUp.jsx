import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigateToSignIn = () => {
    navigate("/login");
  };
  return (
    <div className="root">
      <main className="form-login-label">
        <div className="form-field-wrapper">
          <h1 className="log-in">Sign Up</h1>
          <form className="form-login-have-account">
            <div className="email">
              <div className="email-label-wrapper">
                <div className="label">What should we call you?</div>
                <div className="password-hide-see">
                  <img className="icon" alt="" />
                  <div className="hide">Hide</div>
                </div>
              </div>
              <input
                className="text-field"
                type="text"
                placeholder="Enter your profile name here"
              />
              <div className="error-message">Error message</div>
            </div>
            <div className="password-field-wrapper">
              <div className="text-field1">
                <div className="password-label-wrapper">
                  <div className="label1">What's your email?</div>

                  <div className="password-hide-see1" onClick="">
                    <div className="password-icon-wrapper"></div>
                    <div className="hide1"></div>
                  </div>
                </div>
                <input
                  className="text-field2"
                  type=""
                  placeholder="Enter your email address"
                />
                <div className="error-message1">Error message</div>
              </div>
            </div>
            <div className="password-field-wrapper">
              <div className="text-field1">
                <div className="password-label-wrapper">
                  <div className="label1">Create a password</div>
                  <div
                    className="password-hide-see1"
                    onClick={togglePasswordVisibility}
                  >
                    <div className="password-icon-wrapper">
                      {passwordVisible ? (
                        <img
                          className="icon1"
                          loading="lazy"
                          alt=""
                          src="./src/assets/icon-1.svg"
                        />
                      ) : (
                        <img
                          className="icon1"
                          loading="lazy"
                          alt=""
                          src="./src/assets/show.svg"
                        />
                      )}
                    </div>
                    <div className="hide1">
                      {passwordVisible ? "Hide" : "Show"}
                    </div>
                  </div>
                  <div
                    style={{ marginLeft: "-380px" }}
                    className="password-hide-see1"
                    onClick=""
                  >
                    <div className="password-icon-wrapper"></div>
                    <div className="hide1"></div>
                  </div>
                </div>
                <input
                  className="text-field2"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <div className="error-message1">Error message</div>
              </div>
            </div>
            <div className="terms-and-signup">
              <div className="link-text">
                <div className="by-creating-an-container">
                  <span className="by-continuing-you">{`By continuing, you agree to the `}</span>
                  <span className="terms-of-use">Terms of use</span>
                  <span className="span">{` `}</span>
                  <span className="and">and</span>
                  <span className="span1">{` `}</span>
                  <span className="privacy-policy">
                    <span className="privacy-policy1">Privacy Policy.</span>
                    <span className="span2">{` `}</span>
                  </span>
                </div>
              </div>
              <button className="sign-up-button">
                <div className="signup-button-label-wrapper">
                  <img className="icons" alt="" />
                  <div className="sign-up">Sign In</div>
                </div>
              </button>
            </div>
            <div className="have-an-account-login-container">
              <div className="have-an-account-login1">
                <div className="already-have-an-container">
                  <span className="dont-have-an">{`Already have an account? `}</span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={navigateToSignIn}
                    className="sign-up1"
                  >{`Sign In`}</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
