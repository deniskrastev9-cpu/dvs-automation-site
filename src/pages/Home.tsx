import { useState, useEffect } from 'react';
import { Phone, MessageSquare, CheckCircle, ArrowRight, Menu, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-transparent'
      }`}>

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center">
              <img src="/logo2.png" alt="logo" style={{ width: 34, height: 34 }} />
            </div>
            <div>
              <span className="font-bold text-lg block">DVS Automation</span>
              <span className="text-xs text-gray-500">Solutions LLC</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">

            {/* SERVICES DROPDOWN */}
            <div className="relative group">

              <button className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                Services <span className="text-xs">▾</span>
              </button>

              <div className="absolute top-12 left-0 w-72 bg-white border border-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">

                <Link className="block px-5 py-3 hover:bg-gray-50 text-sm" to="/services/missed-call-text-back">
                  📞 Missed Call Text Back
                </Link>

                <Link className="block px-5 py-3 hover:bg-gray-50 text-sm" to="/services/customer-follow-up">
                  💬 Customer Follow-Up Automation
                </Link>

                <Link className="block px-5 py-3 hover:bg-gray-50 text-sm" to="/services/lead-capture">
                  🧲 Lead Capture Automation
                </Link>

                <Link className="block px-5 py-3 hover:bg-gray-50 text-sm" to="/services/crm-automation">
                  📊 CRM Automation System
                </Link>

                <Link className="block px-5 py-3 hover:bg-gray-50 text-sm" to="/services/ai-receptionist">
                  🤖 AI Receptionist
                </Link>

              </div>
            </div>

            <a href="#how-it-works" className="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-100">
              How It Works
            </a>

            <a href="#industries" className="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-100">
              Industries
            </a>

            <a
              href="mailto:service@dvsautomationsolutionsllc.com"
              className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800"
            >
              Get a Demo
            </a>

          </nav>

          {/* MOBILE BUTTON */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">

            <p className="text-xs text-gray-400 uppercase">Services</p>

            <Link className="px-4 py-3 rounded-xl hover:bg-gray-100 text-sm"
              to="/services/missed-call-text-back"
              onClick={() => setMenuOpen(false)}
            >
              📞 Missed Call Text Back
            </Link>

            <Link className="px-4 py-3 rounded-xl hover:bg-gray-100 text-sm"
              to="/services/customer-follow-up"
              onClick={() => setMenuOpen(false)}
            >
              💬 Follow-Up Automation
            </Link>

            <Link className="px-4 py-3 rounded-xl hover:bg-gray-100 text-sm"
              to="/services/lead-capture"
              onClick={() => setMenuOpen(false)}
            >
              🧲 Lead Capture
            </Link>

            <Link className="px-4 py-3 rounded-xl hover:bg-gray-100 text-sm"
              to="/services/crm-automation"
              onClick={() => setMenuOpen(false)}
            >
              📊 CRM System
            </Link>

            <Link className="px-4 py-3 rounded-xl hover:bg-gray-100 text-sm"
              to="/services/ai-receptionist"
              onClick={() => setMenuOpen(false)}
            >
              🤖 AI Receptionist
            </Link>

            <div className="border-t pt-3 mt-2">
              <a
                href="mailto:service@dvsautomationsolutionsllc.com"
                className="block bg-black text-white text-center py-3 rounded-xl text-sm font-semibold"
              >
                Get a Demo
              </a>
            </div>

          </div>
        )}

      </header>

      {/* HERO */}
      <main>
        <section className="pt-36 pb-24 px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Never Miss Another Customer Call Again
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            We build AI automation systems that respond instantly, capture leads, and book jobs automatically.
          </p>

          <a
            href="mailto:service@dvsautomationsolutionsllc.com"
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
          >
            Request Demo <ArrowRight size={16} />
          </a>
        </section>

        {/* SIMPLE SERVICES PREVIEW */}
        <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-24">

          <div className="p-6 border rounded-2xl">
            <Phone />
            <h3 className="font-bold mt-3">Missed Call Automation</h3>
            <p className="text-sm text-gray-500">Instant SMS reply when you miss a call.</p>
          </div>

          <div className="p-6 border rounded-2xl">
            <MessageSquare />
            <h3 className="font-bold mt-3">Lead Capture</h3>
            <p className="text-sm text-gray-500">Turn website visitors into leads.</p>
          </div>

          <div className="p-6 border rounded-2xl">
            <CheckCircle />
            <h3 className="font-bold mt-3">CRM Automation</h3>
            <p className="text-sm text-gray-500">Auto-organize your customers & follow-ups.</p>
          </div>

        </section>
      </main>

    </div>
  );
}
