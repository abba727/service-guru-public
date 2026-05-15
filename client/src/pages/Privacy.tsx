/**
 * Privacy Policy page for Service Guru
 * Design: matches the main landing page — navy/cream/amber palette, Geist + Instrument Serif typography
 */
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", display: "flex", flexDirection: "column" }}>
      {/* ── Nav ── */}
      <nav className="sg-nav">
        <div className="sg-container sg-nav-inner">
          <Link className="sg-logo" href="/">
            <img src="/manus-storage/logo_4a44b036.png" alt="Service Guru" className="sg-logo-img" />
            <span>Service Guru</span>
          </Link>
          <div className="sg-nav-right">
            <a href="https://secure.serviceguru.app" className="sg-btn sg-btn-primary" target="_blank" rel="noopener noreferrer">
              Sign in
            </a>
          </div>
        </div>
      </nav>

      {/* ── Content ── */}
      <main style={{ flex: 1, paddingTop: 64, paddingBottom: 96 }}>
        <div className="sg-container" style={{ maxWidth: 760 }}>
          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-blue)", marginBottom: 12 }}>
              Legal
            </p>
            <h1 style={{ fontFamily: "'Geist', sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--sg-navy)", lineHeight: 1.1, marginBottom: 16 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: 15, color: "var(--sg-ink-soft)", lineHeight: 1.7 }}>
              Last updated: <strong>May 15, 2026</strong>
            </p>
          </div>

          {/* Intro */}
          <div className="sg-prose">
            <p>
              Service Guru ("we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web application and mobile apps (collectively, the "Platform"). Please read this policy carefully. If you disagree with its terms, please discontinue use of the Platform.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <h3>Information You Provide Directly</h3>
            <ul>
              <li><strong>Account registration:</strong> name, email address, phone number, company name, and password when you create an account.</li>
              <li><strong>Profile data:</strong> job title, profile photo, and role (manager, worker, resident, or owner).</li>
              <li><strong>Property and unit data:</strong> addresses, unit numbers, lease information, and related property details you enter into the Platform.</li>
              <li><strong>Task and inspection records:</strong> descriptions, photos, notes, and status updates you create or upload.</li>
              <li><strong>Messages:</strong> content of messages sent through our in-app messaging system.</li>
              <li><strong>Payment information:</strong> billing address and payment card details, processed securely through our third-party payment processor (Stripe). We do not store full card numbers on our servers.</li>
            </ul>
            <h3>Information Collected Automatically</h3>
            <ul>
              <li><strong>Usage data:</strong> pages visited, features used, actions taken, timestamps, and session duration.</li>
              <li><strong>Device information:</strong> IP address, browser type and version, operating system, device identifiers, and screen resolution.</li>
              <li><strong>Cookies and similar technologies:</strong> session cookies for authentication, preference cookies, and analytics cookies. See Section 7 for more detail.</li>
            </ul>
            <h3>Information from Third Parties</h3>
            <p>
              If you sign in via a third-party identity provider (e.g., Google), we receive your name and email address from that provider in accordance with their privacy policy and your authorization.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain the Platform and its features.</li>
              <li>Create and manage your account and authenticate your identity.</li>
              <li>Process transactions and send related billing communications.</li>
              <li>Send service notifications, task updates, inspection reminders, and announcements.</li>
              <li>Respond to your support requests and communicate with you about your account.</li>
              <li>Analyze usage patterns to improve the Platform's performance, reliability, and user experience.</li>
              <li>Detect, prevent, and address fraud, abuse, security incidents, and technical issues.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
            <p>
              We do not sell your personal information to third parties. We do not use your data to serve you third-party advertising.
            </p>

            <h2>3. How We Share Your Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>Within your organization:</strong> information you enter is visible to other authorized users within your property management company on the Platform (e.g., managers can see tasks assigned to workers).</li>
              <li><strong>Service providers:</strong> we engage trusted third-party vendors to perform services on our behalf (cloud hosting, payment processing, email delivery, analytics). These vendors are contractually bound to use your data only as necessary to provide their services.</li>
              <li><strong>Legal requirements:</strong> we may disclose information if required by law, subpoena, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
              <li><strong>Business transfers:</strong> in the event of a merger, acquisition, or sale of all or substantially all of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on the Platform before your data becomes subject to a different privacy policy.</li>
            </ul>

            <h2>4. Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data at any time by contacting us at <a href="mailto:privacy@serviceguru.app">privacy@serviceguru.app</a>. We will respond within 30 days. Note that some information may be retained for a limited period thereafter as required by law or for legitimate business purposes (e.g., resolving disputes, preventing fraud).
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These include TLS encryption in transit, AES-256 encryption at rest, role-based access controls, and regular security reviews. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Access:</strong> request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> request that we correct inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> request that we delete your personal data, subject to certain exceptions.</li>
              <li><strong>Portability:</strong> request that we provide your data in a structured, machine-readable format.</li>
              <li><strong>Objection / Restriction:</strong> object to or request restriction of certain processing activities.</li>
              <li><strong>Withdraw consent:</strong> where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at <a href="mailto:privacy@serviceguru.app">privacy@serviceguru.app</a>. We will respond within the timeframe required by applicable law (generally 30 days).
            </p>

            <h2>7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to operate the Platform. Strictly necessary cookies are required for authentication and cannot be disabled. Analytics cookies (e.g., Umami) help us understand aggregate usage patterns; these are privacy-friendly and do not track you across third-party sites. You can control non-essential cookies through your browser settings, though disabling them may affect Platform functionality.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              The Platform is not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Service Guru is operated in the United States. If you access the Platform from outside the United States, your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. By using the Platform, you consent to such transfers. We take steps to ensure that appropriate safeguards are in place for any cross-border transfers of personal data.
            </p>

            <h2>10. Third-Party Links</h2>
            <p>
              The Platform may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties and encourage you to review their privacy policies before providing any personal information.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we make material changes, we will notify you by updating the "Last updated" date at the top of this page and, where appropriate, by sending you an email notification. Your continued use of the Platform after the effective date of any changes constitutes your acceptance of the updated policy.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <address style={{ fontStyle: "normal", lineHeight: 1.8 }}>
              <strong>Service Guru</strong><br />
              Privacy Team<br />
              Email: <a href="mailto:privacy@serviceguru.app">privacy@serviceguru.app</a><br />
              Website: <a href="https://serviceguru.app">serviceguru.app</a>
            </address>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid var(--sg-line-cool)", padding: "24px 0", background: "#fafafa" }}>
        <div className="sg-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "var(--sg-ink-soft)", margin: 0 }}>
            © {new Date().getFullYear()} Service Guru. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24, fontSize: 13 }}>
            <Link href="/privacy" style={{ color: "var(--sg-blue)", fontWeight: 500 }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "var(--sg-ink-soft)" }}>Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
