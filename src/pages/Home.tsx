import { useState, useEffect } from "react";
import {
  Phone,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Bot,
  Database,
  Truck,
  ClipboardList,
  Brain,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import LeadForm from "../components/LeadForm";

export default function Home() {
  const [showOffer, setShowOffer] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState("Free Consultation");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />

      {showOffer && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={() => setShowOffer(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
                Limited Offer
              </p>

              <h2 className="text-3xl font-bold mb-4">First Month Free</h2>

              <p className="text-gray-600 mb-6">
                Try our AI receptionist, lead capture, follow-up automation, and business automation system free for your first month.
              </p>

              <a
                href="#contact"
                onClick={() => {
                  setSelectedOffer("First Month Free");
                  setShowOffer(false);
                }}
                className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                Claim Free Month
              </a>
            </div>
          </div>
        </div>
      )}

      <main>
        {/* HERO */}
        <section className="pt-36 pb-24 px-6 relative overflow-hidden bg-gray-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb,transparent_35%),radial-gradient(circle_at_top_right,#22c55e,transparent_30%),linear-gradient(135deg,#020617,#111827)]"></div>

          <div className="absolute top-24 left-10 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-16 w-44 h-44 border border-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 left-1/3 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>

          <div className="absolute top-16 md:top-24 left-0 right-0 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-sm font-semibold backdrop-blur">
              ⚡ AI Receptionists • Business Automation • Custom AI Solutions
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 md:pt-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                AI Automation for Growing Businesses
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
                AI Receptionists, Business Automation & Custom AI Solutions
              </h1>

              <p className="text-base md:text-xl text-gray-300 mb-10 leading-relaxed">
                DVS Automation Solutions helps businesses automate customer communication, lead capture, follow-up, CRM workflows, AI receptionist systems, dispatch support, and custom AI solutions designed around their operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group bg-black text-white px-7 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                >
                  Claim First Month Free
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/services/custom-ai-solutions"
                  className="bg-white/10 border border-white/20 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  Explore Custom Solutions
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-blue-400" />
                  First month free
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-blue-400" />
                  Fast setup
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-blue-400" />
                  24/7 automation
                </div>
              </div>
            </div>

            {/* DEMO CARD */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-2 scale-[0.98]"></div>

              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <MessageSquare size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">DVS Automation</p>
                    <p className="text-xs text-green-500 font-medium">
                      Active • Responding instantly
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <ChatBubble
                    icon={<Phone size={12} className="text-red-500" />}
                    label="System • 6:47 PM"
                    text="Missed call from a new customer"
                  />

                  <ChatBubbleRight
                    label="DVS Auto-Reply • Instantly"
                    text="Sorry we missed your call. What service do you need today?"
                  />

                  <ChatBubble
                    icon={<span className="text-blue-600 text-xs font-bold">C</span>}
                    label="Customer • 6:49 PM"
                    text="Need help ASAP. Can someone come out today?"
                  />

                  <ChatBubbleRight
                    label="DVS Auto-Reply • Instantly"
                    text="Got it. Please send your location and the service needed so we can help."
                  />

                  <div className="bg-green-50 border border-green-100 rounded-2xl px-4 py-3 text-sm flex items-center gap-2 mt-2">
                    <CheckCircle size={15} className="text-green-500 flex-shrink-0" />
                    <span className="text-green-700 font-medium">
                      Customer inquiry received and ready for follow-up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-gray-950 text-white py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "24/7", label: "automated response coverage" },
              { value: "<60s", label: "instant follow-up speed" },
              { value: "100%", label: "lead tracking visibility" },
              { value: "More", label: "calls turned into jobs" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-gray-400 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Problems We Solve
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Customer Inquiries Are Expensive. Losing Them Shouldn’t Be Normal.
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Most businesses lose opportunities because calls are missed, follow-up is slow, or customer information is not organized.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Missed calls during busy hours",
                "After-hours inquiries going unanswered",
                "Customer inquiries not followed up fast enough",
                "Customers choosing competitors first",
                "Manual CRM and customer tracking",
                "Manual processes slowing down operations",
              ].map((problem) => (
                <div
                  key={problem}
                  className="bg-gray-50 border border-gray-100 rounded-3xl p-6 flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                  <p className="font-medium text-gray-800">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Automation Services
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Smart Systems That Help You Book More Jobs
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                We build practical automation systems for service businesses, local companies, logistics operations, and organizations that need custom AI solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                link="/services/ai-receptionist"
                icon={<Bot size={22} />}
                title="AI Receptionist"
                desc="Answer calls, collect customer information, qualify leads, and capture inquiries 24/7."
              />

              <ServiceCard
                link="/services/custom-ai-solutions"
                icon={<Brain size={22} />}
                title="Custom AI Solutions"
                desc="Custom AI and automation solutions designed around your business, workflows, and operational needs."
              />

              <ServiceCard
                link="/services/missed-call-text-back"
                icon={<Phone size={22} />}
                title="Missed Call Text Back"
                desc="Automatically text missed callers so they stay engaged instead of calling a competitor."
              />

              <ServiceCard
                link="/services/lead-capture"
                icon={<ClipboardList size={22} />}
                title="Customer Inquiry Automation"
                desc="Collect inquiries from forms, calls, and messages and send them directly to your sheet or CRM."
              />

              <ServiceCard
                link="/services/customer-follow-up"
                icon={<MessageSquare size={22} />}
                title="Customer Follow-Up Automation"
                desc="Automatically follow up with prospects until they respond, book, or request more information."
              />

              <ServiceCard
                link="/services/crm-automation"
                icon={<Database size={22} />}
                title="CRM Automation"
                desc="Organize customer information, track leads, and reduce manual admin work."
              />

              <ServiceCard
                link="/ai-dispatch-freight-management"
                icon={<Truck size={22} />}
                title="AI Dispatch & Operations Automation"
                desc="Custom automation for dispatch-heavy businesses that need better intake, communication, and workflow support."
              />
            </div>

            <div className="mt-12 bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-3">
                Don’t See Exactly What You Need?
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto mb-6">
                We also build custom AI and automation solutions tailored to your business process, software, and operational goals.
              </p>
              <Link
                to="/services/custom-ai-solutions"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                Explore Custom AI Solutions
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Process
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Simple Setup. Real Business Impact.
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                We review your workflow, build the automation, and help your business capture more opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <StepCard
                step="01"
                title="We Review Your Process"
                desc="We look at how calls, inquiries, messages, follow-ups, and internal workflows currently operate."
              />

              <StepCard
                step="02"
                title="We Build the Automation"
                desc="We create the AI receptionist, customer communication automation, CRM workflow, or custom system your business needs."
              />

              <StepCard
                step="03"
                title="You Save Time and Capture More"
                desc="Your system starts responding faster, tracking customer inquiries, reducing manual work, and helping turn opportunities into booked jobs."
              />
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50 border-y border-slate-200">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Industries We Help
            </p>
            <h2 className="text-4xl font-bold mb-4">
              Built for Service Businesses and Growing Organizations
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              If your business depends on calls, leads, appointments, customers, dispatching, or repeatable workflows, automation can help.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Roadside Assistance",
                "Towing Companies",
                "Trucking Companies",
                "Logistics",
                "Truck Repair",
                "Auto Repair",
                "Uniform & Linen Services",
                "Equipment Rental",
                "Plumbers",
                "HVAC",
                "Electricians",
                "Roofers",
                "Contractors",
                "Home Services",
              ].map((industry) => (
                <span
                  key={industry}
                  className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                FAQ
              </p>
              <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
            </div>

            <div className="space-y-4">
              <FAQ
                question="What does DVS Automation Solutions do?"
                answer="We build AI and automation systems that help businesses answer calls, capture leads, follow up with customers, organize CRM data, streamline workflows, and reduce manual work."
              />

              <FAQ
                question="Can DVS build custom AI solutions for my business?"
                answer="Yes. We design custom AI and automation systems around your existing workflow, software, and business processes. Every business operates differently, which is why we offer solutions tailored to your specific needs."
              />

              <FAQ
                question="Do I need new software?"
                answer="Not always. We can connect your automation to tools you already use, including Google Sheets, forms, phone systems, CRMs, calendars, and messaging platforms."
              />

              <FAQ
                question="Can this help me get more customers?"
                answer="Automation helps businesses respond faster, capture more opportunities, and follow up better. For many businesses, this means more customer inquiries turning into booked jobs."
              />

              <FAQ
                question="Do you offer AI receptionist or dispatch automation systems?"
                answer="Yes. We build AI receptionist workflows for businesses and custom dispatch or operations automation systems for companies with more complex processes."
              />

              <FAQ
                question="How fast can you set this up?"
                answer="Many basic systems can be set up quickly, depending on your business process and what tools need to be connected. Custom systems depend on complexity and integrations."
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-gray-950 text-white">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-4">
              First Month Free
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              See What Automation Can Fix in Your Business
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Tell us what you need help with and we’ll contact you about your free first month offer.
            </p>
          </div>

          <LeadForm
            plan={selectedOffer}
            service={
              selectedOffer === "First Month Free"
                ? "Homepage First Month Free Offer"
                : "Homepage Free Consultation"
            }
          />
        </section>
      </main>

      {/* SMS DISCLOSURE */}
      <section className="bg-gray-50 border-t border-gray-200 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By providing your phone number, you consent to receive SMS messages related to your inquiry or services. Reply STOP to opt out. Consent is not a condition of purchase.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <img
                  src="/logo2.png"
                  alt="DVS Logo"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <span className="font-bold text-sm">
                DVS Automation Solutions LLC
              </span>
            </div>

            <p className="text-xs text-gray-500">
              Helping businesses answer customers, capture leads, automate workflows, and grow smarter with AI.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a></li>
              <li><a href="#industries" className="text-gray-600 hover:text-gray-900">Industries</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 DVS Automation Solutions LLC</p>
          <a href="mailto:service@dvsautomationsolutionsllc.com" className="hover:text-gray-700">
            service@dvsautomationsolutionsllc.com
          </a>
        </div>
      </footer>
    </div>
  );
}

/* COMPONENTS */

function ServiceCard({ icon, title, desc, link }: any) {
  return (
    <Link to={link} className="block h-full">
      <div className="group h-full bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-900 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
          <span className="text-gray-700 group-hover:text-white transition-colors duration-300">
            {icon}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-gray-900">
          {title}
        </h3>

        <p className="text-gray-500 leading-relaxed text-sm mb-5">
          {desc}
        </p>

        <div className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          Learn More
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

function StepCard({ step, title, desc }: any) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold text-gray-400 shadow-sm">
        {step}
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FAQ({ question, answer }: any) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
      <h3 className="font-bold text-lg mb-2">{question}</h3>
      <p className="text-gray-500 leading-relaxed">{answer}</p>
    </div>
  );
}

function ChatBubble({ icon, label, text }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>

      <div className="bg-gray-50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm max-w-[80%]">
        <p className="text-xs text-gray-400 mb-1">{label}</p>
        <p className="text-gray-700 font-medium">{text}</p>
      </div>
    </div>
  );
}

function ChatBubbleRight({ label, text }: any) {
  return (
    <div className="flex items-start gap-3 justify-end">
      <div className="bg-gray-900 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[80%]">
        <p className="text-xs text-gray-400 mb-1">{label}</p>
        <p>{text}</p>
      </div>

      <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <img
          src="/logo2.png"
          alt="DVS Logo"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
}
