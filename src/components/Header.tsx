import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo2.png" alt="logo" className="w-10 h-10" />
          <div>
            <div className="font-bold leading-none">DVS Automation</div>
            <div className="text-xs text-gray-500">Solutions LLC</div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">

          {/* SERVICES DROPDOWN */}
          <div className="relative group">
            <button className="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-100">
              Services ▼
            </button>

            <div className="absolute top-12 left-0 w-72 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">

              <Link to="/services/missed-call-text-back" className="block px-4 py-3 hover:bg-gray-50">
                📞 Missed Call Text Back
              </Link>

              <Link to="/services/customer-follow-up" className="block px-4 py-3 hover:bg-gray-50">
                💬 Customer Follow-Up
              </Link>

              <Link to="/services/lead-capture" className="block px-4 py-3 hover:bg-gray-50">
                🧲 Lead Capture Automation
              </Link>

              <Link to="/services/crm-automation" className="block px-4 py-3 hover:bg-gray-50">
                📊 CRM Automation
              </Link>

              <Link to="/services/ai-receptionist" className="block px-4 py-3 hover:bg-gray-50">
                🤖 AI Receptionist
              </Link>

            </div>
          </div>

          {/* PRICING */}
          <Link
            to="/pricing"
            className="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-100"
          >
            Pricing
          </Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-2">

          <p className="text-xs text-gray-400 uppercase">Services</p>

          <Link onClick={closeMenu} to="/services/missed-call-text-back" className="py-2">
            📞 Missed Call Text Back
          </Link>

          <Link onClick={closeMenu} to="/services/customer-follow-up" className="py-2">
            💬 Customer Follow-Up
          </Link>

          <Link onClick={closeMenu} to="/services/lead-capture" className="py-2">
            🧲 Lead Capture
          </Link>

          <Link onClick={closeMenu} to="/services/crm-automation" className="py-2">
            📊 CRM Automation
          </Link>

          <Link onClick={closeMenu} to="/services/ai-receptionist" className="py-2">
            🤖 AI Receptionist
          </Link>

          <Link onClick={closeMenu} to="/pricing" className="py-2 font-semibold">
            Pricing
          </Link>

        </div>
      )}
    </header>
  );
}
