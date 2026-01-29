import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Reknock',
  description: 'Privacy Policy for the Reknock platform.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose-legal">
          <h1>Privacy Policy</h1>
          <p><strong>Last Updated: January 15, 2026</strong></p>

          <h2>1. Introduction</h2>
          <p>
            Reknock (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy and is committed to protecting personal data. This Privacy Policy explains how we collect, use, and share information when you use our Service.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide</h3>

          <p><strong>Account Information</strong></p>
          <ul>
            <li>Name, email address, phone number</li>
            <li>Company name and business information (B2B accounts)</li>
            <li>Billing and payment information</li>
          </ul>

          <p><strong>Lead/Customer Data</strong></p>
          <ul>
            <li>Names and phone numbers of leads you capture</li>
            <li>Location data (GPS coordinates, addresses)</li>
            <li>Notes and lead quality ratings</li>
            <li>Consent records and timestamps</li>
          </ul>

          <p><strong>Message Content</strong></p>
          <ul>
            <li>SMS messages sent and received through the Service</li>
            <li>Message templates and campaign configurations</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>

          <p><strong>Usage Data</strong></p>
          <ul>
            <li>Features used and actions taken in the app</li>
            <li>Login times and session duration</li>
            <li>Device type, operating system, app version</li>
          </ul>

          <p><strong>Location Data</strong></p>
          <ul>
            <li>GPS location when capturing leads (with your permission)</li>
            <li>Approximate location based on IP address</li>
          </ul>

          <p><strong>Message Delivery Data</strong></p>
          <ul>
            <li>Delivery status, timestamps</li>
            <li>Carrier responses and error codes</li>
            <li>Opt-out events</li>
          </ul>

          <h2>3. How We Use Information</h2>

          <h3>3.1 To Provide the Service</h3>
          <ul>
            <li>Process and send SMS messages on your behalf</li>
            <li>Store and display lead information</li>
            <li>Generate analytics and performance reports</li>
            <li>Provide customer support</li>
          </ul>

          <h3>3.2 To Ensure Compliance</h3>
          <ul>
            <li>Monitor for prohibited content</li>
            <li>Track consent and opt-out records</li>
            <li>Respond to carrier and regulatory inquiries</li>
            <li>Investigate potential Terms violations</li>
          </ul>

          <h3>3.3 To Improve the Service</h3>
          <ul>
            <li>Analyze usage patterns to improve features</li>
            <li>Develop new functionality</li>
            <li>Fix bugs and technical issues</li>
          </ul>

          <h3>3.4 To Communicate With You</h3>
          <ul>
            <li>Send account notifications and updates</li>
            <li>Provide customer support responses</li>
            <li>Send product announcements (with your consent)</li>
          </ul>

          <h2>4. How We Share Information</h2>

          <p>
            The Company will not share your mobile number or SMS opt-in consent with any third parties or affiliates for marketing or promotional purposes.
          </p>

          <h3>4.1 Service Providers</h3>
          <p>We share data with third parties who help us provide the Service:</p>
          <ul>
            <li>SMS delivery providers (to send and receive messages)</li>
            <li>Payment processors (to process billing)</li>
            <li>Cloud hosting providers (to store data)</li>
            <li>Analytics services (to understand usage)</li>
          </ul>

          <h3>4.2 Carriers and Regulators</h3>
          <p>We may share information with mobile carriers and regulators:</p>
          <ul>
            <li>As required for 10DLC registration and compliance</li>
            <li>In response to spam or abuse complaints</li>
            <li>As required by law or legal process</li>
          </ul>

          <h3>4.3 Business Transfers</h3>
          <p>
            If Reknock is acquired or merged, your information may be transferred to the new owner.
          </p>

          <h3>4.4 With Your Consent</h3>
          <p>
            We may share information in other circumstances with your explicit consent.
          </p>

          <h2>5. Data Retention</h2>

          <h3>5.1 Account Data</h3>
          <p>
            We retain your account information for as long as your account is active, plus 3 years after account closure for legal and compliance purposes.
          </p>

          <h3>5.2 Lead/Customer Data</h3>
          <ul>
            <li>Active leads: Retained while your account is active</li>
            <li>Opted-out numbers: Retained indefinitely to prevent re-contact</li>
            <li>Message content: Retained for 7 years for compliance records</li>
          </ul>

          <h3>5.3 Deletion Requests</h3>
          <p>
            You may request deletion of your account and associated data. Some data may be retained as required by law or for legitimate business purposes.
          </p>

          <h2>6. Your Rights</h2>

          <h3>6.1 Access and Portability</h3>
          <p>
            You can access your lead data and export it in standard formats through the dashboard or by contacting support.
          </p>

          <h3>6.2 Correction</h3>
          <p>
            You can update your account information and lead data directly in the app.
          </p>

          <h3>6.3 Deletion</h3>
          <p>
            You can delete individual leads or request full account deletion. Contact support at <a href="mailto:privacy@reknockapp.com" className="text-primary-600 hover:text-primary-700">privacy@reknockapp.com</a>.
          </p>

          <h3>6.4 California Residents (CCPA)</h3>
          <p>California residents have additional rights:</p>
          <ul>
            <li>Right to know what personal information is collected</li>
            <li>Right to delete personal information</li>
            <li>Right to opt-out of sale of personal information (we do not sell personal information)</li>
            <li>Right to non-discrimination</li>
          </ul>
          <p>
            To exercise these rights, contact <a href="mailto:privacy@reknockapp.com" className="text-primary-600 hover:text-primary-700">privacy@reknockapp.com</a>.
          </p>

          <h2>7. Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data, including:
          </p>
          <ul>
            <li>Encryption of data in transit (TLS) and at rest</li>
            <li>Access controls and authentication requirements</li>
            <li>Regular security assessments</li>
            <li>Employee training on data protection</li>
          </ul>
          <p>
            However, no system is 100% secure. You are responsible for maintaining the security of your account credentials.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            The Service is not intended for users under 18 years of age. We do not knowingly collect information from children.
          </p>

          <h2>9. International Data Transfers</h2>
          <p>
            Your data may be processed in the United States or other countries where our service providers operate. By using the Service, you consent to this transfer.
          </p>

          <h2>10. Third-Party Links</h2>
          <p>
            The Service may contain links to third-party websites. We are not responsible for the privacy practices of those sites.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes via email or in-app notification.
          </p>

          <h2>12. Contact Us</h2>
          <p>For questions about this Privacy Policy or to exercise your rights:</p>
          <ul>
            <li>Email: <a href="mailto:privacy@reknockapp.com" className="text-primary-600 hover:text-primary-700">privacy@reknockapp.com</a></li>
            <li>Address: Reknock LLC, 2402 Timothy Circle, Pleasant Grove, UT 84062</li>
          </ul>
        </article>
      </div>
    </div>
  )
}
