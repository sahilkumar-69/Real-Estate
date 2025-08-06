import React, { useEffect } from "react";

const TermsAndPrivacy = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className=" px-6 py-12 max-w-4xl mx-5 mt-15 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

      <section className="mb-10 space-y-4">
        <p>
          Welcome to our real estate platform. By using this website, you agree
          to comply with and be bound by the following terms and conditions.
          Please review them carefully before using our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Use of Website</h2>
        <p>
          You agree to use this website only for lawful purposes and in a manner
          that does not infringe the rights of others or restrict their use of
          the site.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Property Listings</h2>
        <p>
          All property information listed is provided by owners, developers, or
          agents. We do not guarantee the accuracy of listings. Users are
          encouraged to verify property details independently.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          3. Intellectual Property
        </h2>
        <p>
          All content including logos, texts, graphics, and software are the
          property of our company and may not be reproduced without written
          permission.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          4. Limitation of Liability
        </h2>
        <p>
          We are not liable for any loss or damage arising directly or
          indirectly from your use of this site or any content therein.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Changes to Terms</h2>
        <p>
          We may update these terms at any time without prior notice. It is your
          responsibility to review the terms regularly.
        </p>
      </section>

      <h1 className="text-4xl font-bold mt-16 mb-8">Privacy Policy</h1>

      <section className="mb-10 space-y-4">
        <p>
          We are committed to protecting your privacy. This policy explains how
          we collect, use, and safeguard your personal data.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          1. Information Collection
        </h2>
        <p>
          We may collect personal data such as your name, email, phone number,
          and IP address when you register, list properties, or contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Use of Information</h2>
        <p>
          Your data may be used to respond to inquiries, improve user
          experience, send promotional messages, and comply with legal
          obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Data Protection</h2>
        <p>
          We implement appropriate technical and organizational measures to
          secure your data from unauthorized access, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Third-Party Sharing</h2>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share data with trusted partners who support our operations (e.g.,
          CRM tools, payment gateways).
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Cookies</h2>
        <p>
          Our site may use cookies to enhance your browsing experience. You can
          disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. User Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data by contacting our support team.
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. Policy Updates</h2>
        <p>
          We reserve the right to modify this policy at any time. Changes will
          be updated on this page.
        </p>

        <p className="text-sm mt-8 text-gray-500">
          Last Updated: August 5, 2025
        </p>
      </section>
    </div>
  );
};

export default TermsAndPrivacy;
