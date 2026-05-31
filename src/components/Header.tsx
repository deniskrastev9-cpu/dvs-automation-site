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
          scrolled ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center">
              <img
  src="/logo2.png"
  alt="DVS Logo"
  style={{ width: '40px', height: '40px' }}
/>
            </div>
            <div>
              <span className="font-bold text-lg leading-none block">DVS Automation</span>
              <span className="text-xs text-gray-500 leading-none">Solutions LLC</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">

  {/* SERVICES DROPDOWN */}
  <div className="relative group">

    <button className="
      px-4 py-2 rounded-xl text-sm font-semibold
      text-gray-700 hover:text-black hover:bg-gray-100
      transition-all flex items-center gap-2
    ">
      Services
      <span className="text-xs">▼</span>
    </button>

    {/* DROPDOWN */}
    <div className="
      absolute top-12 left-0 w-72
      bg-white border border-gray-100
      shadow-xl rounded-2xl
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-200 z-50 overflow-hidden
    ">

      <Link to="/services/missed-call-text-back"
        className="block px-5 py-3 hover:bg-gray-50 text-sm font-medium"
      >
        📞 Missed Call Text Back
      </Link>

      <Link to="/services/customer-follow-up"
        className="block px-5 py-3 hover:bg-gray-50 text-sm font-medium"
      >
        💬 Customer Follow-Up Automation
      </Link>

      <Link to="/services/lead-capture"
        className="block px-5 py-3 hover:bg-gray-50 text-sm font-medium"
      >
        🧲 Lead Capture Automation
      </Link>

      <Link to="/services/crm-automation"
        className="block px-5 py-3 hover:bg-gray-50 text-sm font-medium"
      >
        📊 CRM Automation System
      </Link>
     
      <Link
  to="/services/ai-receptionist"
  className="block px-5 py-3 hover:bg-gray-50 text-sm font-medium"
>
  🤖 AI Receptionist
</Link>

    </div>
  </div>

  {/* OTHER NAV BUTTONS */}
  <Link
  to="/#how-it-works"
  className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
>
  How It Works
</Link>

  <Link
  to="/#industries"
  className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
>
  Industries
</Link>

  {/* CTA BUTTON */}
  <Link
  to="/pricing"
  className="
    bg-black text-white px-5 py-2.5 rounded-xl
    text-sm font-semibold hover:bg-gray-800
    transition-all shadow-sm
  "
>
  Pricing
</Link>

</nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
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
      🧲 Lead Capture Automation
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
