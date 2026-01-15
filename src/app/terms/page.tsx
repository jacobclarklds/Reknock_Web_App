import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Reknock',
  description: 'Terms of Service for the Reknock platform.',
}

export default function TermsOfServicePage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose-legal">
          <h1>Terms of Service</h1>
          <p><strong>Last Updated: January 15, 2026</strong></p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Reknock platform (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you are using the Service on behalf of an organization, you agree to these Terms on behalf of that organization.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Reknock provides a software platform that enables door-to-door sales representatives to capture lead information and automate SMS follow-up communications with prospective customers. The Service includes:
          </p>
          <ul>
            <li>Mobile application for lead capture and messaging</li>
            <li>Web dashboard for account management and analytics</li>
            <li>Automated SMS messaging infrastructure</li>
            <li>Campaign management tools</li>
          </ul>

          <h2>3. Account Types</h2>

          <h3>3.1 Individual Accounts (B2C)</h3>
          <p>
            Individual users operate under Reknock&apos;s shared SMS brand and campaign registration. Individual users agree to:
          </p>
          <ul>
            <li>Send messages only under the Reknock brand identity</li>
            <li>Follow all consent and messaging guidelines provided by Reknock</li>
            <li>Accept that Reknock may modify or terminate messaging capabilities for compliance reasons</li>
          </ul>

          <h3>3.2 Business Accounts (B2B)</h3>
          <p>
            Business users register their own brand and 10DLC campaign. Business users agree to:
          </p>
          <ul>
            <li>Complete all required 10DLC registration and verification</li>
            <li>Maintain their own compliance with TCPA and carrier requirements</li>
            <li>Ensure all team members follow consent and messaging requirements</li>
            <li>Accept responsibility for their reps&apos; compliance violations</li>
          </ul>

          <h2>4. User Obligations</h2>

          <h3>4.1 Consent Requirements</h3>
          <p>
            You MUST obtain proper consent before adding any person to the Service. This means:
          </p>
          <ul>
            <li>Clearly informing the person they will receive text messages</li>
            <li>Obtaining affirmative agreement (verbal or written) to receive messages</li>
            <li>Recording the time and context of consent in the Service</li>
            <li>Never adding persons who have not explicitly agreed</li>
          </ul>

          <h3>4.2 Prohibited Content</h3>
          <p>You may NOT send messages that:</p>
          <ul>
            <li>Contain false, misleading, or deceptive information</li>
            <li>Promote illegal products or services</li>
            <li>Include hate speech, harassment, or threats</li>
            <li>Violate intellectual property rights</li>
            <li>Are sexual or adult in nature</li>
            <li>Promote weapons, drugs, or controlled substances</li>
            <li>Impersonate another person or organization</li>
          </ul>

          <h3>4.3 Opt-Out Compliance</h3>
          <p>
            You MUST honor all opt-out requests immediately. When a recipient replies STOP or otherwise requests to stop receiving messages:
          </p>
          <ul>
            <li>The system will automatically cease messaging</li>
            <li>You may NOT contact that person through other means to continue the sales conversation via SMS</li>
            <li>You may NOT re-add that person to the Service without new explicit consent</li>
          </ul>

          <h2>5. TCPA Compliance</h2>
          <p>
            The Telephone Consumer Protection Act (TCPA) governs text message marketing. You acknowledge and agree that:
          </p>
          <ul>
            <li>You are solely responsible for obtaining proper consent before messaging</li>
            <li>Violations of TCPA can result in statutory damages of $500-$1,500 per message</li>
            <li>Reknock provides tools to assist compliance but does not guarantee compliance</li>
            <li>You will indemnify Reknock for any claims arising from your messaging practices</li>
          </ul>

          <h2>6. 10DLC Requirements (Business Accounts)</h2>
          <p>
            Business accounts must complete 10DLC registration, which includes:
          </p>
          <ul>
            <li>Brand verification with The Campaign Registry</li>
            <li>Campaign use case registration and approval</li>
            <li>Ongoing compliance with carrier requirements</li>
            <li>You acknowledge that registration may take 2-4 weeks and is not guaranteed</li>
          </ul>

          <h2>7. Fees and Payment</h2>

          <h3>7.1 Subscription Fees</h3>
          <ul>
            <li>Fees are charged monthly or annually as selected at signup</li>
            <li>Fees are non-refundable except as required by law</li>
            <li>Reknock may change pricing with 30 days notice</li>
          </ul>

          <h2>8. Termination</h2>

          <h3>8.1 By You</h3>
          <p>
            You may cancel your account at any time through the account settings. Cancellation takes effect at the end of your current billing period.
          </p>

          <h3>8.2 By Reknock</h3>
          <p>Reknock may suspend or terminate your account immediately if:</p>
          <ul>
            <li>You violate these Terms or applicable law</li>
            <li>Your messaging generates excessive complaints or opt-outs</li>
            <li>Carriers or regulators require us to do so</li>
            <li>You fail to pay fees when due</li>
          </ul>

          <h2>9. Data and Privacy</h2>
          <p>Your use of the Service is also governed by our Privacy Policy. You agree that:</p>
          <ul>
            <li>Lead data you capture is stored on Reknock&apos;s systems</li>
            <li>Reknock may access data to provide support and ensure compliance</li>
            <li>You are responsible for your own privacy obligations to the people you message</li>
          </ul>

          <h2>10. Disclaimers</h2>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. REKNOCK DOES NOT WARRANT THAT:
          </p>
          <ul>
            <li>The Service will be uninterrupted or error-free</li>
            <li>Messages will be delivered to all recipients</li>
            <li>The Service will meet your specific requirements</li>
            <li>Your use of the Service will comply with all applicable laws</li>
          </ul>

          <h2>11. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, REKNOCK&apos;S LIABILITY FOR ANY CLAIMS ARISING FROM YOUR USE OF THE SERVICE SHALL NOT EXCEED THE FEES YOU PAID IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>
          <p>
            REKNOCK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>

          <h2>12. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Reknock, its officers, directors, employees, and agents from any claims, damages, or expenses (including attorney fees) arising from:
          </p>
          <ul>
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable law, including TCPA</li>
            <li>Your messaging content or practices</li>
            <li>Any claim by a person you messaged through the Service</li>
          </ul>

          <h2>13. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Indiana, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Hamilton County, Indiana.
          </p>

          <h2>14. Changes to Terms</h2>
          <p>
            Reknock may update these Terms from time to time. We will notify you of material changes via email or in-app notification. Continued use of the Service after changes constitutes acceptance.
          </p>

          <h2>15. Contact</h2>
          <p>For questions about these Terms, contact us at:</p>
          <ul>
            <li>Email: <a href="mailto:legal@reknock.com" className="text-primary-600 hover:text-primary-700">legal@reknock.com</a></li>
            <li>Address: Reknock LLC, Carmel, Indiana</li>
          </ul>
        </article>
      </div>
    </div>
  )
}
