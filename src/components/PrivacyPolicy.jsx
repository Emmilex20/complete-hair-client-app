import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen py-12 px-4 sm:px-6 md:px-8 lg:px-10 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 pt-16">
            Privacy Policy
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600">
            Your privacy is important to us. This privacy policy outlines how we
            collect, use, and protect your personal information.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 text-gray-700">
          {/* Section 1 - Information We Collect */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              1. Information We Collect
            </h3>
            <p className="mb-4">
              We collect personal information that you provide to us, such as
              your name, email address, shipping address, phone number, and
              payment information when you purchase our products or sign up for
              our services.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Contact Information (name, email, phone, etc.)</li>
              <li>Billing and Shipping Information</li>
              <li>Payment Information</li>
              <li>Login Credentials (for registered users)</li>
              <li>Browser and Device Information</li>
            </ul>
          </div>

          {/* Section 2 - How We Use Your Information */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              2. How We Use Your Information
            </h3>
            <p className="mb-4">
              The information we collect is used to fulfill your orders, provide
              customer support, improve your shopping experience, and for other
              legal purposes. We may use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Process and fulfill orders</li>
              <li>Send order updates and support inquiries</li>
              <li>Improve our website and services</li>
              <li>Send promotional offers, if you have opted in</li>
              <li>Protect against fraud and unauthorized transactions</li>
            </ul>
          </div>

          {/* Section 3 - How We Protect Your Information */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              3. How We Protect Your Information
            </h3>
            <p className="mb-4">
              We are committed to protecting your personal information. We use
              secure technologies and procedures to ensure that your data is
              safe from unauthorized access, use, or disclosure.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>SSL encryption to protect your data during transmission</li>
              <li>Secure storage of payment information</li>
              <li>Restricted access to personal information</li>
              <li>Regular security audits and updates</li>
            </ul>
          </div>

          {/* Section 4 - Cookies */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              4. Cookies and Tracking Technologies
            </h3>
            <p className="mb-4">
              We use cookies and similar tracking technologies to personalize
              your experience, analyze site traffic, and improve our services.
              You can manage your cookie preferences through your browser
              settings.
            </p>
            <p className="mb-4">
              Some cookies are essential for site functionality, while others
              help us improve your experience by remembering your preferences.
            </p>
          </div>

          {/* Section 5 - Third-Party Services */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              5. Third-Party Services
            </h3>
            <p className="mb-4">
              We may share your personal information with third-party service
              providers that assist us in operating our website, processing
              payments, or delivering products. These providers are contractually
              obligated to protect your data.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Payment processors</li>
              <li>Shipping and delivery companies</li>
              <li>Marketing platforms</li>
              <li>Analytics services</li>
            </ul>
          </div>

          {/* Section 6 - Your Rights */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              6. Your Rights and Choices
            </h3>
            <p className="mb-4">
              You have the right to access, update, or delete your personal
              information. If you would like to manage your preferences or
              exercise your rights, please contact us at:
              <span className="text-blue-600 font-semibold"> privacy@yourcompany.com</span>.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Access or correct your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your account</li>
            </ul>
          </div>

          {/* Section 7 - Changes to Our Privacy Policy */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              7. Changes to Our Privacy Policy
            </h3>
            <p className="mb-4">
              We may update this privacy policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review our privacy policy periodically to stay
              informed about how we are protecting your data.
            </p>
            <p className="text-gray-600">
              Last updated: <span className="font-semibold">[DATE]</span>
            </p>
          </div>

          {/* Section 8 - Contact Us */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              8. Contact Us
            </h3>
            <p className="mb-4">
              If you have any questions or concerns about our privacy practices,
              please contact us at:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <span className="text-blue-600 font-semibold">
                support@yourcompany.com
              </span>
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong>{" "}
              <span className="text-blue-600 font-semibold">+234 8062720552</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
