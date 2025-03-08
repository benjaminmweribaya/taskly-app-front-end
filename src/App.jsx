import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import WorkspaceLayout from "./components/workspace/WorkspaceLayout.jsx";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Signup from "./components/auth/Signup.jsx";
import LoginModal from "./components/auth/LoginModal.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";
import VerifyEmail from "./components/auth/VerifyEmail.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import Accessibility from "./pages/Accessibility.jsx";

function App() {
  const { user } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.title = `Taskly | ${location.pathname.replace("/", "").toUpperCase() || "HOME"}`;
  }, [location.pathname]);

  return (
    <MainLayout user={user} isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
  );
}
function MainLayout({ user, isLoginModalOpen, setIsLoginModalOpen }) {
  const location = useLocation();
  const isWorkspace = location.pathname.startsWith("/workspace");

  return (
    <div className="flex flex-col min-h-screen">
      {!isWorkspace && <Navbar onLogin={() => setIsLoginModalOpen(true)} />}

      <div className="flex-1 flex">
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/verify-email/:token" element={<VerifyEmail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/workspace/*" element={<WorkspaceLayout />} />
          </Routes>
        </main>
      </div>

      {!isWorkspace && <Footer />}

      {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
    </div>
  );
}

export default App;
