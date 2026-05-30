import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import MissedCallTextBack from "./pages/MissedCallTextBack";
import CustomerFollowUpAutomation from "./pages/CustomerFollowUpAutomation";
import LeadCaptureAutomation from "./pages/LeadCaptureAutomation";
import CRMAutomationSystem from "./pages/CRMAutomationSystem";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Router>
      <div>

        {/* NAVBAR */}
        <nav style={{
          display: "flex",
          gap: "20px",
          padding: "15px",
          background: "#0f172a",
          color: "white"
        }}>
          <Link style={linkStyle} to="/">Home</Link>

          {/* SERVICES DROPDOWN (simple version) */}
          <div style={{ position: "relative" }}>
            <span style={linkStyle}>Services ▼</span>

            <div style={{
              position: "absolute",
              top: "25px",
              left: 0,
              background: "white",
              color: "black",
              display: "flex",
              flexDirection: "column",
              minWidth: "240px",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
            }}>

              <Link style={dropdownLink} to="/services/missed-call-text-back">
                Missed Call Text Back
              </Link>

              <Link style={dropdownLink} to="/services/customer-follow-up">
                Customer Follow-Up Automation
              </Link>

              <Link style={dropdownLink} to="/services/lead-capture">
                Lead Capture Automation
              </Link>

              <Link style={dropdownLink} to="/services/crm-automation">
                CRM Automation System
              </Link>

            </div>
          </div>

          <Link style={linkStyle} to="/privacy">Privacy Policy</Link>
          <Link style={linkStyle} to="/terms">Terms</Link>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* SERVICES */}
          <Route path="/services/missed-call-text-back" element={<MissedCallTextBack />} />
          <Route path="/services/customer-follow-up" element={<CustomerFollowUpAutomation />} />
          <Route path="/services/lead-capture" element={<LeadCaptureAutomation />} />
          <Route path="/services/crm-automation" element={<CRMAutomationSystem />} />

          {/* LEGAL PAGES */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />

          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>

      </div>
    </Router>
  );
}

/* ================= STYLES ================= */

const linkStyle = {
  color: "white",
  textDecoration: "none",
  cursor: "pointer"
};

const dropdownLink = {
  padding: "12px",
  textDecoration: "none",
  color: "#111",
  borderBottom: "1px solid #eee"
};
