import "./App.css";
import DashBoardPage from "./components/DashBoardPage";
import SignInPage from "./components/SignInPage";
import SchedulesPage from "./components/SchedulesPage";
import TransactionsPage from "./components/TransactionsPage";
import UsersPage from "./components/UsersPage";
import SettingsPage from "./components/SettingsPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // const handleCallbackResponse = (response) => {
  //   Cookies.set("Encoded JWT ID Token", response.credential);
  // };

  // useEffect(() => {
  //   // Load the Google API client script
  //   const script = document.createElement("script");
  //   script.src = "https://apis.google.com/js/platform.js";
  //   script.onload = () => {
  //     // Initialize the Google API client
  //     window.gapi.load("auth2", () => {
  //       window.gapi.auth2.init({
  //         client_id:
  //           "921722741487-21dqi0de3s2ehlsvpf800nqujp8o3bjq.apps.googleusercontent.com",
  //       });
  //     });
  //   };
  //   document.body.appendChild(script);
  // }, []);

  return (
    <BrowserRouter>
      <div className="main-container">
        <Routes>
          <Route exact path="/signin" element={<SignInPage />} />
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <DashBoardPage />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/schedules"
            element={
              <ProtectedRoute>
                <SchedulesPage />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/transactions"
            element={
              <ProtectedRoute>
                <TransactionsPage />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/users"
            element={
              <ProtectedRoute>
                <UsersPage />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/settings"
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
