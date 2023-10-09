import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const jwtToken = Cookies.get("Encoded JWT ID Token");
  if (jwtToken === undefined) {
    return <Navigate to="/signin" />;
  }

  return props.children;
};

export default ProtectedRoute;
