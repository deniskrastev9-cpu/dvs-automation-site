import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

import MissedCallTextBack from "./pages/MissedCallTextBack";
import CustomerFollowUpAutomation from "./pages/CustomerFollowUpAutomation";
import LeadCaptureAutomation from "./pages/LeadCaptureAutomation";
import CRMAutomation from "./pages/CRMAutomation";
import AiReceptionist from "./pages/AiReceptionist";

import Privacy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PRICING */}
        <Route path="/pricing" element={<Pricing />} />

        {/* SERVICES */}
        <Route path="/services/missed-call-text-back" element={<MissedCallTextBack />} />
        <Route path="/services/customer-follow-up" element={<CustomerFollowUp />} />
        <Route path="/services/lead-capture" element={<LeadCapture />} />
        <Route path="/services/crm-automation" element={<CrmAutomation />} />
        <Route path="/services/ai-receptionist" element={<AiReceptionist />} />

        {/* LEGAL PAGES */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
    </BrowserRouter>
  );
}
