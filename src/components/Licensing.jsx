import React from "react";

const Licensing = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 pt-16">
            Licensing Information
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
            Learn more about how our products and content are licensed.
          </p>
        </div>

        {/* Licensing Information */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 text-gray-700">
          {/* Section 1 - License Overview */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              1. License Overview
            </h2>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              All products, content, and services provided through our website
              are subject to our licensing terms. By using or purchasing any of
              our products, you agree to the licensing terms outlined below.
            </p>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              Our licensing policy grants you a limited, non-transferable,
              non-exclusive, and revocable license to use our products for
              personal or commercial purposes, in accordance with these terms.
            </p>
          </div>

          {/* Section 2 - Personal Use License */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              2. Personal Use License
            </h2>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              If you purchase a product for personal use, you are granted the
              right to use the product in your personal projects or on your own
              devices. This license is for individuals who are not using the
              products for commercial gain or resale purposes.
            </p>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              Under this license, you may not:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-600">
              <li>Resell or redistribute the product</li>
              <li>Claim the product as your own work</li>
              <li>Use the product in any unlawful manner</li>
            </ul>
          </div>

          {/* Section 3 - Commercial Use License */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              3. Commercial Use License
            </h2>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              For customers intending to use our products in a business or for
              profit, our commercial use license applies. This license allows
              you to use the product for:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-600 mb-4">
              <li>Client projects</li>
              <li>Marketing materials</li>
              <li>Product resales (with attribution, if required)</li>
            </ul>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              If using a product for commercial purposes, you may be required to
              provide attribution to our company where applicable.
            </p>
          </div>

          {/* Section 4 - Restrictions on Use */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              4. Restrictions on Use
            </h2>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              Regardless of the type of license purchased, you are prohibited
              from:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-600 mb-4">
              <li>
                Modifying the product in a way that misrepresents its original
                design
              </li>
              <li>
                Sharing, reselling, or redistributing the product without
                appropriate authorization
              </li>
              <li>
                Using the product in any form of illegal activity or in a manner
                that violates the rights of others
              </li>
            </ul>
          </div>

          {/* Section 5 - Intellectual Property */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              5. Intellectual Property
            </h2>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              All content, designs, code, and other materials provided on this
              site are the intellectual property of [Your Company Name]. You do
              not gain ownership of any intellectual property rights by
              purchasing a license to our products. We reserve all rights not
              expressly granted under this license.
            </p>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              Any unauthorized use of our intellectual property is strictly
              prohibited.
            </p>
          </div>

          {/* Section 6 - Termination of License */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              6. Termination of License
            </h2>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              We reserve the right to terminate any license at our discretion if
              we find that you have violated any of the terms of this agreement.
              Upon termination, you must cease all use of the product and
              destroy any copies of the product in your possession.
            </p>
          </div>

          {/* Section 7 - Contact Us */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              7. Contact Us
            </h2>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              If you have any questions about our licensing terms or need
              further clarification, feel free to contact us at:
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              <strong>Email:</strong>{" "}
              <span className="text-blue-600 font-semibold">
              <a href="mailto:mercy.james203@gmail.com">mercy.james203@gmail.com</a>
              </span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              <strong>Phone:</strong>{" "}
              <span className="text-blue-600 font-semibold">
              <a href="tel:+2348062720552">+234 8062720552</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licensing;
