import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    axios
      .post("http://localhost:5188/api/User/Login", { email, password })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/dashboard");
        });
      })
      .catch((error) => {
        let errorMessage =
          error.response?.data?.message || "Login failed. Please try again.";
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: "Your email or password is incorrect! Please try again.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="root">
      <main className="form-login-label">
        <div className="form-field-wrapper">
          <h1 className="log-in">Log in</h1>
          <form className="form-login-have-account" onSubmit={handleLogin}>
            <div className="email">
              <div className="email-label-wrapper">
                <div className="label">Email address</div>
                <div className="password-hide-see">
                  <img className="icon" alt="" />
                  <div className="hide">Hide</div>
                </div>
              </div>
              <input className="text-field" type="text" name="email" />
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
                  name="password"
                />
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
              <button className="button" type="submit">
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
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={navigateToSignUp}
                    className="sign-up1"
                  >{`Sign up`}</span>
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
                <img
                  className="social-media-logo"
                  loading="lazy"
                  alt=""
                  src="src/assets/social-media-logo.svg"
                />
                <img
                  className="social-media-logo1"
                  loading="lazy"
                  alt=""
                  src="src/assets/social-media-logo-1.svg"
                />
                <img
                  className="social-media-logo2"
                  loading="lazy"
                  alt=""
                  src="src/assets/social-media-logo-2.svg"
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
