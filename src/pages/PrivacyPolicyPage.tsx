import React from 'react';
import { Shield, Phone, Mail } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LocalizedA } from '../components/LocalizedA';

const sections: Array<{heading:string; paragraphs:string[]; bullets?:string[]}> = [
  {
    heading:'1. Who We Are and Scope',
    paragraphs:[
      'Pro Locksmith Tech LLC, doing business as Pro Locksmith Tech (“we,” “us,” or “our”), operates a mobile locksmith service in South Florida. This Privacy Policy explains how information may be collected, used, disclosed and retained in connection with our website, advertising, calls, messages and locksmith services.',
      'Third-party websites such as Google, Yelp, Nextdoor, payment processors and social media services have separate privacy policies. Please review their policies when using those platforms.'
    ]
  },
  {
    heading:'2. Information We May Collect',
    paragraphs:['Information depends on how you contact us and which service you request. We may collect:'],
    bullets:[
      'Contact information, including your name, telephone number, email address and communication preferences.',
      'Service and dispatch information, such as the requested address or location, appointment details, vehicle make/model/year, key or lock type, technician assignment, job notes and related correspondence.',
      'Reasonable verification information needed to establish authority to access or modify property. A technician may inspect identification or ownership documents; collection or retention of copies, if any, depends on the circumstances and lawful operational need.',
      'Transaction information, such as invoices, prices charged, payment status and refunds. Payments may be processed by outside providers; do not send payment-card details through unsecured forms or messages.',
      'Website usage and attribution data, such as pages viewed, approximate region, device/browser information, referrer, Google Analytics events, UTM parameters, Google advertising click identifiers, and whether a visitor clicked a telephone link.',
      'Service-related photographs, communications or incident reports when reasonably needed for a requested job, quality concerns, legal compliance or dispute resolution.',
      'Call recordings or message logs only if recording or retention is enabled and permitted under applicable notice and consent laws.'
    ]
  },
  {
    heading:'3. How We Use Information',
    paragraphs:['We may use information to:'],
    bullets:[
      'Answer inquiries, coordinate mobile technician dispatch, confirm availability and communicate changing arrival estimates.',
      'Confirm appropriate authorization, safely assess service needs, perform or document approved work, and provide customer support.',
      'Prepare quotes, process payments, issue invoices, prevent fraud and resolve complaints.',
      'Operate and secure our website, diagnose technical problems, analyze website traffic and understand the effectiveness of advertising and business profile links.',
      'Meet lawful recordkeeping requirements, respond to valid legal requests and protect the safety and rights of customers, technicians and the business.',
      'Send service-related calls or texts, and marketing communications only when permitted by law and applicable consent requirements.'
    ]
  },
  {
    heading:'4. Dispatchers, Technicians, Subcontractors and Service Providers',
    paragraphs:[
      'We may assign jobs to employees or independent subcontractor locksmith technicians. To perform the service, we may share reasonably necessary customer contact details, service location, job description, access details and transaction information with the assigned provider.',
      'We may also use providers for website hosting and security, analytics, communications, dispatch software, payment processing, cloud storage and business operations. Providers may process information under their own applicable terms and privacy commitments.',
      'We do not promise that customer information is shared only with an internal dispatcher or technician: technical, financial and compliance providers may also have access where needed. We do not authorize unrestricted use of customer data by subcontractors or vendors.'
    ]
  },
  {
    heading:'5. Google Analytics, Advertising, UTM Links and Cookies',
    paragraphs:[
      'The site may use Google Analytics 4 and Google Ads measurement tools to understand visits, landing pages, referral sources and phone-link clicks. Links from Google Business Profile, Yelp and social accounts may contain UTM parameters to identify the referring channel.',
      'Analytics and advertising services may use cookies or similar technologies and receive usage data under their own policies. A phone-button click represents intent to call; it does not by itself establish that a call connected or a service was completed.',
      'Depending on your browser and privacy settings, you may limit cookies, use privacy controls, or contact us about options applicable to your data. We do not intentionally place customer phone numbers, personal identification documents or home addresses into UTM tracking parameters.'
    ]
  },
  {
    heading:'6. Location Information and Mobile Service',
    paragraphs:[
      'We need the service address or an approximate location to determine travel feasibility and dispatch availability. You may provide this information by telephone, message or other means.',
      'If a website feature requests precise device location, your browser should ask permission. You may refuse and instead provide a location verbally. Where a “Text My Location” option is available, the drafted text is sent only if you choose to send it.',
      'Location information may be included in dispatch records and shared with the assigned technician as reasonably needed for your request.'
    ]
  },
  {
    heading:'7. Call Recording, Text Messages and Consent',
    paragraphs:[
      'Calls may be recorded for training, quality assurance, dispatch documentation or dispute resolution only when enabled and legally permitted. Florida and other jurisdictions may require the consent of all participants. Recording will not be treated as authorized merely because a visitor opens this website.',
      'If you call or text us, we may reply about your request, appointment or technician. Message and data rates may apply from your carrier. You can ask us to stop optional promotional messages. Essential service communications may continue as permitted by law.'
    ]
  },
  {
    heading:'8. Data Retention, Security and Your Requests',
    paragraphs:[
      'We retain information only as reasonably needed for service delivery, accounting, fraud prevention, resolving claims and applicable legal obligations. Retention varies by information type; no universal fixed deletion period is promised.',
      'We use reasonable organizational and technical safeguards appropriate to the information handled, but no website, network or data storage system is absolutely secure. We cannot guarantee that unauthorized access will never occur.',
      'You may contact us to request access, correction or deletion of information or ask questions about data practices. We will review requests in light of applicable law, identity verification needs, legitimate records and contractual obligations. Some records may need to be retained.'
    ]
  },
  {
    heading:'9. Children, Other Websites and Policy Updates',
    paragraphs:[
      'Our locksmith services and website are not directed to children under 13, and we do not knowingly seek personal information from them through the website.',
      'External links are controlled by third parties. We do not control their privacy practices or content.',
      'We may update this policy to reflect operational, legal or technical changes. The effective date shown below identifies the published version. Material changes will be handled as required by applicable law.'
    ]
  }
];

export function PrivacyPolicyPage({ onNavigate:_onNavigate }:{onNavigate:(path:string)=>void}) {
  return <div className="min-h-screen bg-slate-900 py-12 text-slate-100">
    <SEOHead title="Privacy Policy | Pro Locksmith Tech" description="How Pro Locksmith Tech handles dispatch information, independent technicians, messages, analytics, website UTM tracking and customer privacy." canonicalPath="/privacy"/>
    <div className="mx-auto max-w-5xl space-y-8 px-5 sm:px-8">
      <header className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-10">
        <div className="mb-3 flex items-center gap-2 text-sm font-bold text-amber-300"><Shield className="h-5 w-5"/>Customer Information and Privacy</div>
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-400">Effective November 14, 2026</p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">This policy describes the information involved in coordinating locksmith services and operating our website, including our use of dispatch partners, analytics and third-party service providers.</p>
      </header>
      <article className="space-y-8 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-base leading-8 text-slate-300 sm:p-10">
        {sections.map((section,i)=><section key={i} className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">{section.heading}</h2>
          {section.paragraphs.map((paragraph,j)=><p key={j}>{paragraph}</p>)}
          {section.bullets && <ul className="list-disc space-y-2 pl-6">{section.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>}
        </section>)}
        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="font-heading text-xl font-bold text-white">10. Contact</h2>
          <p>For privacy questions or data requests, contact Pro Locksmith Tech LLC:</p>
          <p className="flex flex-wrap items-center gap-2"><Phone className="h-4 w-4 text-amber-400"/><LocalizedA href="tel:+17542616528" className="font-semibold text-amber-300 underline">(754) 261-6528</LocalizedA></p>
          <p className="flex flex-wrap items-center gap-2"><Mail className="h-4 w-4 text-amber-400"/><LocalizedA href="mailto:prolocksmithtech@gmail.com" className="text-amber-300 underline">prolocksmithtech@gmail.com</LocalizedA></p>
          <p>See our <LocalizedA href="/terms" className="text-amber-300 underline">Terms of Service</LocalizedA> for dispatch terms, service risks and legal limitations.</p>
        </section>
      </article>
    </div>
  </div>;
}
export default PrivacyPolicyPage;