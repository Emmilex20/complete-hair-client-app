import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 lg:px-16 pt-16">
      <div className="max-w-screen-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-2">Terms & Conditions</h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Last updated: September 18, 2024
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Hair Heritage. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with these terms. If you do not agree with any part of these terms, you should not use our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These terms are subject to change. We may update them from time to time to reflect changes in the law or our practices. Your continued use of our services following any changes constitutes your acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">2. User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed">
            As a user of our website, you agree to use our services in a lawful and respectful manner. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You agree not to use our website for any illegal or unauthorized purpose, including but not limited to any action that could damage, disable, overburden, or impair our website or interfere with any other party's use of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">3. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content on our website, including text, images, and logos, is the property of Hair Heritage or its licensors and is protected by intellectual property laws. You may not use any content from our website without our express written permission.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unauthorized use of our intellectual property may result in legal action. If you have any questions about permissible use, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">4. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            We shall not be liable for any damages arising from your use of our website or services, including but not limited to direct, indirect, incidental, or consequential damages. We make no warranties regarding the accuracy or reliability of the content on our website.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In jurisdictions that do not allow the exclusion or limitation of liability, our liability shall be limited to the fullest extent permitted by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">5. Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Please review our Privacy Policy regularly to stay informed about our data practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">6. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites or services. We are not responsible for the content or practices of these third parties. You should review their terms and conditions and privacy policies before using their services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The inclusion of a link does not imply endorsement by us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">7. Dispute Resolution</h2>
          <p className="text-gray-700 leading-relaxed">
            Any disputes arising from or related to these Terms and Conditions or our services shall be resolved through binding arbitration in accordance with the laws of Lagos, Nigeria. Any arbitration proceedings shall be conducted in English.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you have a dispute, please contact us first to attempt to resolve the issue informally before seeking arbitration.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">8. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to terminate or suspend your access to our website and services at our sole discretion, without notice, for any violation of these Terms and Conditions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Upon termination, all provisions of these Terms and Conditions which by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, and limitations of liability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">9. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions are governed by and construed in accordance with the laws of Lagos, Nigeria, without regard to its conflict of law principles.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Any legal action or proceeding arising under these Terms and Conditions shall be brought exclusively in the courts located in Lagos, Nigeria.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us at{" "}
            <a href="mailto:info@hairheritage.com" className="text-blue-600 hover:underline">info@hairheritage.com</a>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may also reach us by phone at <a href="tel:+2348062720552" className="text-blue-600 hover:underline">+234 8062720552</a>.
          </p>
        </section>

        <footer className="text-center mt-12">
          <p className="text-gray-600">
            <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
