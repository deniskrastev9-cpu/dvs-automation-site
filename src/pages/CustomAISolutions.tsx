import { ArrowRight, CheckCircle, Brain, Workflow, Settings, Headphones } from "lucide-react";
import LeadForm from "../components/LeadForm";

export default function CustomAISolutions() {
  return (
    <main className="bg-white text-gray-900">
      <section className="pt-36 pb-24 px-6 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm font-semibold mb-8">
            Custom AI Solutions
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            AI Solutions Built Around Your Business
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Every business is different. DVS Automation Solutions designs and builds custom AI systems that help automate workflows, improve customer communication, streamline operations, and support business growth.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Schedule a Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Solutions Designed For Your Workflow
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Whether you need a simple automation or a fully customized AI-powered system, we work with you to identify challenges, streamline processes, and build solutions tailored to your daily operations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our goal is to help your business save time, improve efficiency, reduce repetitive work, and deliver a better customer experience.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">What We Can Help With</h3>
            <div className="space-y-4">
              {[
                "Customer communication automation",
                "Lead capture and qualification",
                "AI receptionist workflows",
                "CRM and software integrations",
                "Internal workflow automation",
                "Dispatch and operations automation",
                "Custom AI assistants",
                "Reporting and notifications",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={18} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              We build around your business process, not a one-size-fits-all template.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              icon={<Headphones size={28} />}
              title="1. Consultation"
              desc="We learn about your business, workflow, challenges, and goals."
            />
            <StepCard
              icon={<Brain size={28} />}
              title="2. Solution Design"
              desc="We identify where AI and automation can create the biggest impact."
            />
            <StepCard
              icon={<Workflow size={28} />}
              title="3. Implementation"
              desc="We build, test, and connect the solution into your existing workflow."
            />
            <StepCard
              icon={<Settings size={28} />}
              title="4. Optimization"
              desc="We improve and adjust the system as your business grows."
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Custom Pricing
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Custom AI solutions are not included in standard monthly packages.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Pricing depends on workflow complexity, integrations, business requirements, call volume, development needs, and implementation scope.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Why Choose DVS?</h3>
            <ul className="space-y-4 text-gray-200">
              <li>✓ Tailored to your business</li>
              <li>✓ AI and automation expertise</li>
              <li>✓ Custom development available</li>
              <li>✓ Built around real business needs</li>
              <li>✓ Scalable solutions</li>
              <li>✓ Ongoing support</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">
            Let’s Build Something That Works For Your Business
          </h2>
          <p className="text-lg text-gray-600">
            Tell us about your workflow, challenges, and goals. We’ll help you identify where AI and automation can make the biggest impact.
          </p>
        </div>

        <LeadForm
          service="Custom AI Solutions"
          plan="Custom Solution"
        />
      </section>
    </main>
  );
}

function StepCard({ icon, title, desc }: any) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7 hover:shadow-lg transition">
      <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
