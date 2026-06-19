import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">

      <div className="text-center mb-16 max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Pricing
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Flexible Automation Pricing Built Around Your Business
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed">
          Choose the package that fits your current needs. Setup pricing is customized
          based on your workflows, integrations, phone system, CRM, and automation complexity.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* STARTER */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm flex flex-col">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Starter</h2>
            <p className="text-gray-500 text-sm mt-2">
              Never Miss Another Lead.
              
              Best for small businesses that want to capture customer inquiries when they can’t answer the phone.
            </p>

            <p className="text-3xl font-bold mt-5">
              $99<span className="text-sm text-gray-400">/mo</span>
            </p>

            <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-800">
                Setup Fee: Starting at $199
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Setup depends on your phone system, customer inquiry flow, and required connection.
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-sm text-gray-600 flex-1">
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Missed Call Text Back</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Basic Customer Inquiry Automation</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Email Notifications</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Google Sheets Lead Logging</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Basic SMS Follow-Up</li>
          </ul>

          <Link
            to="/services/missed-call-text-back?plan=Starter"
            className="block text-center bg-black text-white py-3 rounded-xl font-semibold mt-8 hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </div>

        {/* GROWTH */}
        <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-md flex flex-col relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full">
            Most Popular
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold">Growth</h2>
            <p className="text-gray-500 text-sm mt-2">
              Best for businesses that want better customer inquiry automation, follow-up, and CRM automation.
            </p>

            <p className="text-3xl font-bold mt-5">
              $199<span className="text-sm text-gray-400">/mo</span>
            </p>

            <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-800">
                Setup Fee: Custom
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Setup depends on workflows, integrations, CRM requirements, and automation complexity.
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-sm text-gray-600 flex-1">
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Everything in Starter</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Customer Inquiry Automation</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Customer Follow-Up Automation</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> CRM Automation</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Appointment Reminders</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Customer Inquiry Tracking System</li>
          </ul>

          <Link
            to="/services/crm-automation?plan=Growth"
            className="block text-center bg-black text-white py-3 rounded-xl font-semibold mt-8 hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </div>

        {/* PRO */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm flex flex-col">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Pro</h2>
            <p className="text-gray-500 text-sm mt-2">
              Best for advanced AI systems, AI receptionist, dispatch, freight, and custom workflows.
            </p>

            <p className="text-3xl font-bold mt-5">
              $399<span className="text-sm text-gray-400">/mo</span>
            </p>

            <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-800">
                Setup Fee: Custom
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Advanced AI receptionist, dispatch workflows, broker counteroffer support,
                fuel assistance, CRM integrations, and custom automations may require additional setup.
              </p>
            </div>
          </div>

          <ul className="space-y-3 text-sm text-gray-600 flex-1">
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Everything in Growth</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> AI Receptionist</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> AI Dispatch & Freight Management Assistant</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> AI Broker Negotiation Assistant</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Counteroffer Support</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Fuel Optimization Assistance</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Custom AI Workflows</li>
            <li className="flex gap-2"><Check size={16} className="text-green-500 flex-shrink-0" /> Priority Setup</li>
          </ul>

          <Link
            to="/services/ai-receptionist?plan=Pro"
            className="block text-center bg-black text-white py-3 rounded-xl font-semibold mt-8 hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </div>

      </div>

      {/* CUSTOM SETUP EXPLANATION */}
      <div className="max-w-5xl mx-auto mt-16 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Setup Pricing Depends on Your Business
          </h2>

          <p className="text-gray-500 leading-relaxed">
            Every business operates differently. Setup fees vary depending on how complex
            your automation is, what tools need to be connected, how many workflows are required,
            whether phone systems or CRMs are involved, and whether advanced AI features are included.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {[
            {
              title: "Simple Setup",
              text: "Basic missed-call text back, Google Sheets logging, and simple notifications."
            },
            {
              title: "Custom Workflow Setup",
              text: "Customer inquiry automation, follow-up sequences, CRM automation, appointment reminders, and integrations."
            },
            {
              title: "Advanced AI Setup",
              text: "AI receptionist, dispatch systems, broker negotiation support, fuel assistance, and custom AI workflows."
            }
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">
          Not Sure Which Package You Need?
        </h2>

        <p className="text-gray-500 mb-6">
          Start with a consultation. We’ll review your business process and recommend the right automation package and setup level.
        </p>

        <a
  href="/#contact"
  className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
>
  Request a Free Consultation
</a>
      </div>

    </div>
  );
}
