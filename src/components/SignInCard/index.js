import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const SignInCard = () => {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    console.log(response);
    Cookies.set("Encoded JWT ID Token", response.credential);
    navigate("/");
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "921722741487-21dqi0de3s2ehlsvpf800nqujp8o3bjq.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInButton"), {
      theme: "outline",
      size: "medium",
    });
  });

  return (
    <div className="sign-in">
      <div className="sign-in-card-container">
        <h1 className="sign-in-title">Sign In</h1>
        <p className="sign-in-caption">Sign in to your account</p>
        <section className="sign-in-button-container">
          {/* <button type="button" >
            <img
              src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695194583/Board-app/google-icon_1_iij1ph.png"
              className="sign-in-icon"
              alt="googleIcon"
            />
            <span>Sign in with Google</span>
          </button> */}
          <div id="signInButton"></div>

          <button type="button">
            <img
              src="https://res.cloudinary.com/ddaimmqrr/image/upload/v1695195300/Board-app/apple_1_pausum.png"
              className="sign-in-icon"
              alt="appleIcon"
            />
            <span>Sign in with Apple</span>
          </button>
        </section>
        <form className="sign-in-card">
          <label>Email address</label>
          <input
            type="text"
            value={emailInput}
            onChange={(event) => {
              setEmailInput(event.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            value={passwordInput}
            onChange={(event) => {
              setPasswordInput(event.target.value);
            }}
          />
          <p className="forgot-password">Forgot password?</p>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
        <p className="sign-in-register">
          Don’t have an account? <span>Register here</span>
        </p>
      </div>
    </div>
  );
};

export default SignInCard;
