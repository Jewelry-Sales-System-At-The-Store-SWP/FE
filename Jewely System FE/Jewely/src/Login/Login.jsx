import React, { useState } from "react";
import "./Login.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginGoogle = (credentialResponse) => {
    console.log(credentialResponse);
    useNavigate("/dashboard");
  };

  return (
    <div className="root">
      <main className="form-login-label">
        <div className="form-field-wrapper">
          <h1 className="log-in">Log in</h1>
          <form className="form-login-have-account">
            <div className="email">
              <div className="email-label-wrapper">
                <div className="label">Email address or user name</div>
                <div className="password-hide-see">
                  <img className="icon" alt="" />
                  <div className="hide">Hide</div>
                </div>
              </div>
              <input className="text-field" type="text" />
              <div className="error-message">Error message</div>
            </div>
            <div className="password-field-wrapper">
              <div className="text-field1">
                <div className="password-label-wrapper">
                  <div className="label1">Password</div>
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
                </div>
                <input
                  className="text-field2"
                  type={passwordVisible ? "text" : "password"}
                />
                <div className="error-message1">Error message</div>
              </div>
              <div className="check-box">
                <input className="check-box1" type="checkbox" />
                <div className="i-want-to">Remember me</div>
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
              <button className="button">
                <div className="signup-button-label-wrapper">
                  <img className="icons" alt="" />
                  <div className="sign-up">Log in</div>
                </div>
              </button>
            </div>
            <div className="have-an-account-login-wrapper">
              <div className="have-an-account-login">
                <u className="already-have-an">Forget your password</u>
              </div>
            </div>
            <div className="have-an-account-login-container">
              <div className="have-an-account-login1">
                <div className="already-have-an-container">
                  <span className="dont-have-an">{`Don’t have an account? `}</span>
                  <span className="sign-up1">{`Sign up  `}</span>
                </div>
              </div>
            </div>
          </form>
          <div className="social-login">
            <div className="divider">
              <div className="divider-wrapper">
                <div className="divider1" />
              </div>
              <div className="or">Or continue with</div>
              <div className="divider-container">
                <div className="divider2" />
              </div>
            </div>
            <div className="social-login-options">
              <div className="social-icons">
                <div className="social-media-logo-wrapper">
                  <img
                    className="social-media-logo"
                    loading="lazy"
                    alt=""
                    src="src/assets/social-media-logo.svg"
                  />
                </div>
                <img
                  className="social-media-logo1"
                  loading="lazy"
                  alt=""
                  src="src/assets/social-media-logo-1.svg"
                />
                <GoogleLogin
                  onSuccess={handleLoginGoogle}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
                <div className="social-media-logo-frame">
                  <img
                    className="social-media-logo3"
                    loading="lazy"
                    alt=""
                    src="src/assets/social-media-logo-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
