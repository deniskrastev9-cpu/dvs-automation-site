import { Link } from 'react-router-dom';
import { Zap, ArrowLeft } from 'lucide-react';

export default function Terms() {
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
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-500">Last updated: May 14, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website and services provided by DVS Automation Solutions LLC ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on DVS Automation Solutions LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              <li>Obtaining or attempting to obtain any materials or information through any means not intentionally made available</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Disclaimer</h2>
            <p>
              The materials on DVS Automation Solutions LLC's website are provided on an 'as is' basis. DVS Automation Solutions LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Limitations</h2>
            <p>
              In no event shall DVS Automation Solutions LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DVS Automation Solutions LLC's website, even if DVS Automation Solutions LLC or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on DVS Automation Solutions LLC's website could include technical, typographical, or photographic errors. DVS Automation Solutions LLC does not warrant that any of the materials on its website are accurate, complete, or current. DVS Automation Solutions LLC may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Links</h2>
            <p>
              DVS Automation Solutions LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DVS Automation Solutions LLC of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Modifications</h2>
            <p>
              DVS Automation Solutions LLC may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts located in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Service Description</h2>
            <p>
              DVS Automation Solutions LLC provides automated business communication and lead qualification services designed for local service businesses. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automated missed call text-back responses</li>
              <li>Lead qualification and data collection</li>
              <li>Customer communication automation</li>
              <li>Appointment booking assistance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. User Responsibilities</h2>
            <p>
              Users agree to use our Services only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of our Services. Prohibited behavior includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Transmitting offensive or sexually explicit messages or images</li>
              <li>Disrupting the normal flow of dialogue within our website or services</li>
              <li>Sending unsolicited messages or spam</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Intellectual Property Rights</h2>
            <p>
              All materials on our website, including text, graphics, logos, images, and software, are the property of DVS Automation Solutions LLC or its content suppliers and are protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Service Availability</h2>
            <p>
              While we strive to provide reliable services, we do not guarantee that our Services will be available at all times. We reserve the right to suspend or discontinue Services at any time, with or without notice, for maintenance, updates, or any other reason at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Limitation of Liability</h2>
            <p>
              To the fullest extent allowed by law, DVS Automation Solutions LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless DVS Automation Solutions LLC, its officers, directors, employees, and agents from any claim, demand, loss, or damage arising out of your use of our Services or your violation of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">15. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
