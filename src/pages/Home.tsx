import { useState, useEffect } from 'react';
import { Phone, MessageSquare, CheckCircle, Zap, ArrowRight, Menu, X, Star } from 'lucide-react';
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
      {/* Header */}
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

    </div>
  </div>

  {/* OTHER NAV BUTTONS */}
  <a
    href="#how-it-works"
    className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
  >
    How It Works
  </a>

  <a
    href="#industries"
    className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
  >
    Industries
  </a>

  {/* CTA BUTTON */}
  <a
    href="mailto:service@dvsautomationsolutionsllc.com"
    className="
      bg-black text-white px-5 py-2.5 rounded-xl
      text-sm font-semibold hover:bg-gray-800
      transition-all shadow-sm
    "
  >
    Get a Demo
  </a>

</nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
  <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">

    <Link
      to="/"
      className="text-sm font-medium text-gray-700"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </Link>

    <p className="text-xs text-gray-400 uppercase mt-2">Services</p>

    <Link
      to="/services/missed-call-text-back"
      className="text-sm font-medium text-gray-700"
      onClick={() => setMenuOpen(false)}
    >
      📞 Missed Call Text Back
    </Link>

    <Link
      to="/services/customer-follow-up"
      className="text-sm font-medium text-gray-700"
      onClick={() => setMenuOpen(false)}
    >
      💬 Customer Follow-Up Automation
    </Link>

    <Link
      to="/services/lead-capture"
      className="text-sm font-medium text-gray-700"
      onClick={() => setMenuOpen(false)}
    >
      🧲 Lead Capture Automation
    </Link>

    <Link
      to="/services/crm-automation"
      className="text-sm font-medium text-gray-700"
      onClick={() => setMenuOpen(false)}
    >
      📊 CRM Automation System
    </Link>

    <div className="border-t pt-3 mt-2">

      <a
        href="/privacy"
        className="text-sm font-medium text-gray-500 block"
        onClick={() => setMenuOpen(false)}
      >
        Privacy Policy
      </a>

      <a
        href="/terms"
        className="text-sm font-medium text-gray-500 block mt-2"
        onClick={() => setMenuOpen(false)}
      >
        Terms of Service
      </a>

    </div>

    <a
      href="mailto:service@dvsautomationsolutionsllc.com"
      className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold text-center mt-3"
    >
      Get a Demo
    </a>

  </div>
)}
      </header>

      <main>
        {/* Hero */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                AI-Powered Business Automation
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
                Never Lose Another Customer to a Missed Call
              </h1>

              <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                DVS Automation Solutions helps local service businesses automatically follow up with missed calls, qualify leads, and book more jobs using smart messaging automation.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:service@dvsautomationsolutionsllc.com"
                  className="group bg-black text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center gap-2"
                >
                  Request a Free Demo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="border border-gray-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-gray-700"
                >
                  See How It Works
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-green-500" />
                  No contract required
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-green-500" />
                  Setup in 24 hours
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-green-500" />
                  24/7 automation
                </div>
              </div>
            </div>

            {/* Chat demo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-2 scale-[0.98]"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <MessageSquare size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">DVS Auto-Reply</p>
                    <p className="text-xs text-green-500 font-medium">Active &bull; Responding instantly</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone size={12} className="text-red-500" />
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[80%]">
                      <p className="text-xs text-gray-400 mb-1">System &bull; 6:47 PM</p>
                      <p className="text-gray-700 font-medium">Missed call from (555) 348-2910</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-gray-900 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[80%]">
                      <p className="text-xs text-gray-400 mb-1">DVS Auto-Reply &bull; Instantly</p>
                      <p>Hey! Sorry we missed your call. We'd love to help — what service do you need today?</p>
                    </div>
                    <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <img 
  src="/logo2.png" 
  alt="DVS Logo" 
  style={{ width: '40px', height: '40px' }}
/>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">C</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[80%]">
                      <p className="text-xs text-gray-400 mb-1">Customer &bull; 6:49 PM</p>
                      <p className="text-gray-700">Leaking pipe under the kitchen sink, need someone ASAP</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-gray-900 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[80%]">
                      <p className="text-xs text-gray-400 mb-1">DVS Auto-Reply &bull; Instantly</p>
                      <p>Got it! We can get someone out first thing tomorrow. Can I grab your address to confirm the booking?</p>
                    </div>
                    <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <img 
  src="/logo2.png" 
  alt="DVS Logo" 
  style={{ width: '40px', height: '40px' }}
/>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-100 rounded-2xl px-4 py-3 text-sm flex items-center gap-2 mt-2">
                    <CheckCircle size={15} className="text-green-500 flex-shrink-0" />
                    <span className="text-green-700 font-medium">Lead qualified &amp; appointment booked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-gray-950 text-white py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '62%', label: 'of missed calls never call back' },
              { value: '< 60s', label: 'average auto-response time' },
              { value: '3x', label: 'more leads captured after hours' },
              { value: '24/7', label: 'automated customer follow-up' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-gray-400 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Smart Automation for Your Business</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                We build systems that work while you're on the job — so you never miss a lead, even after hours.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Phone size={22} />,
                  title: 'Missed Call Text Back',
                  desc: 'The moment a call goes unanswered, an automated text goes out instantly — keeping the conversation alive before your customer calls a competitor.',
                  highlight: 'Responds in under 60 seconds',
                },
                {
                  icon: <MessageSquare size={22} />,
                  title: 'Lead Qualification',
                  desc: 'Our system asks the right questions: service needed, location, urgency. You receive a fully qualified lead — not just a phone number.',
                  highlight: 'Collects all key service details',
                },
                {
                  icon: <img 
  src="/logo2.png" 
  alt="DVS Logo" 
  style={{ width: '40px', height: '40px' }}
/>,
                  title: 'Business Automation',
                  desc: 'From appointment reminders to follow-up sequences, we build smart workflows that reduce admin work and keep customers informed at every step.',
                  highlight: 'Save hours every single week',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-900 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <span className="text-gray-700 group-hover:text-white transition-colors duration-300">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-5 text-sm">{service.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                    <CheckCircle size={14} className="text-green-500" />
                    {service.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">Process</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Up and Running in 24 Hours</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                We handle the entire setup. You focus on your work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 relative">
              {[
                {
                  step: '01',
                  title: 'Connect Your Phone',
                  desc: 'We connect to your existing business phone number. No new number, no disruption to how your business currently operates.',
                },
                {
                  step: '02',
                  title: 'We Build Your Workflow',
                  desc: 'Custom automated responses and lead qualification scripts built specifically for your trade and the services you offer.',
                },
                {
                  step: '03',
                  title: 'Start Capturing Leads',
                  desc: 'Go live and watch your system respond to missed calls, qualify leads, and book appointments around the clock.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold text-gray-400 shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">Results</p>
              <h2 className="text-4xl font-bold mb-4">Businesses That Never Miss a Lead</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "We used to lose customers every evening after 5 PM. Now our auto-reply captures those leads and we've seen a 40% increase in booked jobs.",
                  name: 'Mike R.',
                  trade: 'HVAC Contractor',
                },
                {
                  quote: "Setup was painless and the system works exactly as promised. Customers actually appreciate the instant response — it sets us apart from competitors.",
                  name: 'Sarah L.',
                  trade: 'Plumbing Company Owner',
                },
                {
                  quote: "The lead qualification alone saves me an hour a day. I get a complete summary of what the customer needs before I even call them back.",
                  name: 'James T.',
                  trade: 'Electrical Services',
                },
              ].map((t) => (
                <div key={t.name} className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.trade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="py-20 px-6 bg-gray-50 border-y border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">Industries We Serve</p>
            <h2 className="text-4xl font-bold mb-4">Built for Local Service Businesses</h2>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Any trade business that relies on inbound calls can benefit from our automation platform.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Plumbers', 'HVAC', 'Roofers', 'Electricians', 'Contractors',
                'Landscapers', 'Painters', 'Pest Control', 'Handymen', 'Pool Service',
              ].map((industry) => (
                <span
                  key={industry}
                  className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-gray-950 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Get Started Today</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Every Missed Call is a Missed Paycheck
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Request a free demo and see how DVS Automation Solutions can put your lead capture on autopilot — starting tonight.
            </p>
            <a
              href="mailto:service@dvsautomationsolutionsllc.com"
              className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Get a Free Demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-500 mt-5">
              service@dvsautomationsolutionsllc.com &bull; No commitment required
            </p>
          </div>
        </section>
      </main>

      {/* SMS Disclosure */}
      <section className="bg-gray-50 border-t border-gray-200 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By providing your phone number, you consent to receive SMS messages related to your inquiry or services. Reply STOP to opt out.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
               <img 
  src="/logo2.png" 
  alt="DVS Logo" 
  style={{ width: '40px', height: '40px' }}
/> 
              </div>
              <span className="font-bold text-sm">DVS Automation Solutions LLC</span>
            </div>
            <p className="text-xs text-gray-500">
              Helping local businesses turn missed calls into booked jobs with smart automation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a></li>
              <li><a href="#industries" className="text-gray-600 hover:text-gray-900 transition-colors">Industries</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 DVS Automation Solutions LLC</p>
          <a href="mailto:service@dvsautomationsolutionsllc.com" className="hover:text-gray-700 transition-colors">
            service@dvsautomationsolutionsllc.com
          </a>
        </div>
      </footer>
    </div>
  );
}
