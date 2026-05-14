import { Link } from 'react-router-dom';
import { Zap, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: May 14, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introduction</h2>
            <p>
              DVS Automation Solutions LLC ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Personal Information You Provide</h3>
            <p>We may collect information you provide directly, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information (company name, address, industry)</li>
              <li>Service preferences and requirements</li>
              <li>Communication history and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800 mt-6">Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information (browser type, IP address)</li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
              <li>Analytics information through cookies and similar technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing, maintaining, and improving our Services</li>
              <li>Responding to your inquiries and customer support requests</li>
              <li>Sending transactional and promotional communications</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Complying with legal obligations</li>
              <li>Detecting and preventing fraudulent or harmful activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With service providers who assist us in delivering Services</li>
              <li>When required by law or in response to legal processes</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With your explicit consent or at your direction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our Services and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:service@dvsautomationsolutionsllc.com" className="text-blue-600 hover:underline">service@dvsautomationsolutionsllc.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Cookies and Similar Technologies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Disabling cookies may affect certain functionalities of our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Children's Privacy</h2>
            <p>
              Our Services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our Services constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="font-semibold mb-2">DVS Automation Solutions LLC</p>
              <p className="text-sm text-gray-600">
                Email: <a href="mailto:service@dvsautomationsolutionsllc.com" className="text-blue-600 hover:underline">service@dvsautomationsolutionsllc.com</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Zap size={14} className="text-white" />
            </div>
            <span className="font-bold text-sm">DVS Automation Solutions LLC</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <a href="mailto:service@dvsautomationsolutionsllc.com" className="hover:text-gray-700 transition-colors">
              service@dvsautomationsolutionsllc.com
            </a>
            <span className="hidden md:inline">&bull;</span>
            <span>© 2026 DVS Automation Solutions LLC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
