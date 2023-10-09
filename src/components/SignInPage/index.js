import SignInBanner from "../SignInBanner";
import SignInCard from "../SignInCard";
import Cookies from "js-cookie";

import "./index.css";
import { Navigate } from "react-router-dom";

const SignInPage = () => {
  const jwtToken = Cookies.get("Encoded JWT ID Token");

  if (jwtToken) {
    return <Navigate to="/" />;
  }
  return (
    <div className="sign-in-page">
      <SignInBanner />
      <SignInCard />
    </div>
  );
};

export default SignInPage;
