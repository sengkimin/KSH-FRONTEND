import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
import Program from "./pages/ProgramPage/Program";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppLayout from "./components/AppLayout";
import ResidentList from "./pages/ResidentPage/ResidentList";
import AssesmentPage from "./pages/Assesment/AssesmentPage";
import ReportingPage from "./pages/Reporting/ReportingPage";
function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user-account">
          <Route index element={<ResidentList />} />
        </Route>
        <Route path="/book-catalog" element={<Program />} />
        <Route path="/book-issue" element={<AssesmentPage />} />
        <Route path="/member" element={<ReportingPage />} />
    
      </Route>

    </Routes>
  );
}

export default App;
