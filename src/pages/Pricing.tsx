import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Simple Pricing That Grows With Your Business
        </h1>
        <p className="text-gray-500 text-lg">
          Start automating missed calls, leads, and customer follow-ups today.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* STARTER */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold">Starter</h2>
          <p className="text-3xl font-bold mt-2">$99<span className="text-sm text-gray-400">/mo</span></p>

          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex gap-2"><Check size={16} /> Missed Call Text Back</li>
            <li className="flex gap-2"><Check size={16} /> Basic Lead Capture</li>
            <li className="flex gap-2"><Check size={16} /> Email Notifications</li>
          </ul>

          <a
            href="https://buy.stripe.com/test_STARTER"
            className="block mt-6 bg-black text-white text-center py-3 rounded-xl"
          >
            Start Starter
          </a>
        </div>

        {/* GROWTH */}
        <div className="bg-white border-2 border-black rounded-2xl p-8 shadow-md">
          <h2 className="text-xl font-bold">Growth</h2>
          <p className="text-3xl font-bold mt-2">$199<span className="text-sm text-gray-400">/mo</span></p>

          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex gap-2"><Check size={16} /> Everything in Starter</li>
            <li className="flex gap-2"><Check size={16} /> CRM Automation</li>
            <li className="flex gap-2"><Check size={16} /> Follow-up Sequences</li>
          </ul>

          <a
            href="https://buy.stripe.com/test_GROWTH"
            className="block mt-6 bg-black text-white text-center py-3 rounded-xl"
          >
            Start Growth
          </a>
        </div>

        {/* PRO */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold">Pro</h2>
          <p className="text-3xl font-bold mt-2">$399<span className="text-sm text-gray-400">/mo</span></p>

          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex gap-2"><Check size={16} /> AI Receptionist</li>
            <li className="flex gap-2"><Check size={16} /> Full CRM + Automation</li>
            <li className="flex gap-2"><Check size={16} /> Priority Setup</li>
          </ul>

          <a
            href="https://buy.stripe.com/test_PRO"
            className="block mt-6 bg-black text-white text-center py-3 rounded-xl"
          >
            Start Pro
          </a>
        </div>

      </div>
    </div>
  );
}
