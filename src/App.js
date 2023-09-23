import "./App.css";
import DashBoardPage from "./components/DashBoardPage";
import SignInPage from "./components/SignInPage";
import SchedulesPage from "./components/SchedulesPage";
import TransactionsPage from "./components/TransactionsPage";
import UsersPage from "./components/UsersPage";
import SettingsPage from "./components/SettingsPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Routes>
          <Route exact path="/signup" element={<SignInPage />} />
          <Route exact path="/" element={<DashBoardPage />} />
          <Route exact path="/schedules" element={<SchedulesPage />} />
          <Route exact path="/transactions" element={<TransactionsPage />} />
          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
