import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import MissedCallTextBack from "./pages/MissedCallTextBack";
import CustomerFollowUpAutomation from "./pages/CustomerFollowUpAutomation";
import LeadCaptureAutomation from "./pages/LeadCaptureAutomation";
import CRMAutomationSystem from "./pages/CRMAutomationSystem";
import AiReceptionist from "./pages/AiReceptionist";
import Pricing from "./pages/Pricing";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/missed-call-text-back" element={<MissedCallTextBack />} />
        <Route path="/services/customer-follow-up" element={<CustomerFollowUpAutomation />} />
        <Route path="/services/lead-capture" element={<LeadCaptureAutomation />} />
        <Route path="/services/crm-automation" element={<CRMAutomationSystem />} />
        <Route path="/services/ai-receptionist" element={<AiReceptionist />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}
