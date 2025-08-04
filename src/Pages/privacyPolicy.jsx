import React, { useEffect } from "react";

export default function PrivacyPolicy() {
 useEffect(() => {
    window.scrollTo(0, 0); // Only perform side effect here
  }, []); 
    return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-4xl mx-5">
      <h1 className="text-3xl font-bold mt-8 mb-6">Privacy Policy</h1>

      <p className="text-sm text-gray-500 mb-4">Effective Date: 02/07/2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Company Information</h2>
        <p>
          <strong>Company Name:</strong> DevNexus Solutions Private Limited
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="https://devnexussolutions.com"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://devnexussolutions.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>
          At DevNexus Solutions Private Limited (“we”, “our”, “us” or
          “DevNexus”), we value your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we
          collect, use, store, and protect your data when you interact with our
          website, services, or communications.
        </p>
        <p className="mt-2">
          By using our website or engaging with our services, you agree to the
          practices described in this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>City</li>
          <li>Company/organization name</li>
          <li>IP address and browser/device data</li>
          <li>
            Messages, inquiries, or feedback submitted via forms or emails
          </li>
        </ul>
        <p className="mt-2">
          We may also collect non-personal data such as cookies, analytics data,
          and usage trends to improve our website experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Purpose of Data Collection
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To respond to your enquiries or requests</li>
          <li>To provide and improve our IT solutions and services</li>
          <li>To personalise your experience on our website</li>
          <li>
            To process proposals, support, or project-related communication
          </li>
          <li>
            To send service updates, newsletters, and marketing (with opt-out
            options)
          </li>
          <li>To comply with applicable laws and regulations</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p>
          We implement industry-standard security practices to protect your
          personal data from unauthorized access, misuse, alteration, or
          destruction. These include:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>SSL encryption for secure data transmission</li>
          <li>Secure hosting and firewalls</li>
          <li>Access controls and regular system audits</li>
        </ul>
        <p className="mt-2">
          Please note that while we follow best practices, no method of
          transmission over the Internet is 100% secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Cookies & Tracking Technologies
        </h2>
        <p>Our website may use cookies or similar tracking tools to:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Monitor and analyze user activity</li>
          <li>Remember your preferences</li>
          <li>Improve website performance and user experience</li>
        </ul>
        <p className="mt-2">
          You can manage or disable cookies through your browser settings at any
          time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sharing of Information</h2>
        <p>
          We do not sell, rent, or trade your personal data to third parties. We
          may share your information only under the following conditions:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>With your explicit consent</li>
          <li>
            With trusted service providers (e.g., hosting, analytics) under
            strict confidentiality
          </li>
          <li>When legally required (e.g., government or court requests)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p>As a user, you have the right to:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Request access to the personal information we hold about you</li>
          <li>Request corrections or updates to inaccurate data</li>
          <li>
            Request deletion of your personal data (where applicable by law)
          </li>
          <li>Withdraw consent for communications at any time</li>
        </ul>
        <p className="mt-2">
          To exercise these rights, please contact us at:{" "}
          <a
            href="mailto:contactus@devnexus.in"
            className="text-blue-600 underline"
          >
            contactus@devnexus.in
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
        <p>
          We may update or modify this Privacy Policy from time to time to
          reflect changes in our practices, technologies, or legal obligations.
          The revised version will be posted on this page with an updated
          "Effective Date" at the top.
        </p>
        <p className="mt-2">
          We encourage you to review this policy periodically.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          <strong>DevNexus Solutions Private Limited</strong>
        </p>
        <p>📍 26-B, Spaze Itech Park, Sector-49, Gurgaon, Haryana – 122018</p>
        <p>
          📧{" "}
          <a
            href="mailto:contactus@devnexus.in"
            className="text-blue-600 underline"
          >
            contactus@devnexus.in
          </a>
        </p>
        <p>📞 +91 9211815556</p>
      </section>
    </div>
  );
}

