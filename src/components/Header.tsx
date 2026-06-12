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

  const desktopLink =
    "px-4 py-2 rounded-xl text-sm font-semibold text-white hover:bg-white/10 transition";

  const dropdownLink =
    "block px-5 py-3 hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-black transition";

  const mobileLink =
    "px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-800 transition";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 border-b border-white/10 shadow-lg backdrop-blur"
          : "bg-gray-950 border-b border-white/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center overflow-hidden border border-white/10">
            <img
              src="/logo2.png"
              alt="DVS Logo"
              className="w-10 h-10 object-contain"
            />
          </div>

          <div>
            <span className="font-bold text-lg leading-none block text-white">
              DVS Automation
            </span>
            <span className="text-xs text-gray-400 leading-none">
              Solutions LLC
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <div className="relative group">
            <button className="px-4 py-2 rounded-xl text-sm font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-2">
              Services
              <span className="text-xs">▼</span>
            </button>

            <div className="absolute top-12 left-0 w-80 bg-white border border-gray-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
              <Link
                to="/services/missed-call-text-back"
                className={dropdownLink}
              >
                📞 Missed Call Text Back
              </Link>

              <Link
                to="/services/customer-follow-up"
                className={dropdownLink}
              >
                💬 Customer Follow-Up Automation
              </Link>

              <Link to="/services/lead-capture" className={dropdownLink}>
                🧲 Customer Inquiry Automation
              </Link>

              <Link to="/services/crm-automation" className={dropdownLink}>
                📊 CRM Automation System
              </Link>

              <Link to="/services/ai-receptionist" className={dropdownLink}>
                🤖 AI Receptionist
              </Link>

              <Link
                to="/ai-dispatch-freight-management"
                className={dropdownLink}
              >
                🚚 AI Dispatch & Freight Management
              </Link>
            </div>
          </div>

          <Link to="/#how-it-works" className={desktopLink}>
            How It Works
          </Link>

          <Link to="/#industries" className={desktopLink}>
            Industries
          </Link>

          <Link
            to="/pricing"
            className="bg-white text-black px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all shadow-sm"
          >
            Pricing
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>


        {menuOpen && (
  <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">

    <p className="text-xs text-gray-400 uppercase mb-2">Services</p>

    <Link className="px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"
      to="/services/missed-call-text-back"
      onClick={() => setMenuOpen(false)}
    >
      📞 Missed Call Text Back
    </Link>

    <Link className="px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"
      to="/services/customer-follow-up"
      onClick={() => setMenuOpen(false)}
    >
      💬 Customer Follow-Up Automation
    </Link>

    <Link className="px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"
      to="/services/lead-capture"
      onClick={() => setMenuOpen(false)}
    >
      🧲 Customer Inquiry Automation
    </Link>

    <Link className="px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"
      to="/services/crm-automation"
      onClick={() => setMenuOpen(false)}
    >
      📊 CRM Automation System
    </Link>
   
    <Link
  className="px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"
  to="/services/ai-receptionist"
  onClick={() => setMenuOpen(false)}
>
  🤖 AI Receptionist
</Link>

    <Link
  className="px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"
  to="/ai-dispatch-freight-management"
  onClick={() => setMenuOpen(false)}
>
  🚚 AI Dispatch & Freight Management
</Link>

    <div className="border-t mt-3 pt-3">

  <Link
    to="/pricing"
    onClick={() => setMenuOpen(false)}
    className="block bg-black text-white text-center py-3 rounded-xl text-sm font-semibold"
  >
    Pricing
  </Link>

</div>

  </div>
)}
      </header>
  );
}
