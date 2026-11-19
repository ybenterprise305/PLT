import React from 'react';
import { FileText, Phone, Mail } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LocalizedA } from '../components/LocalizedA';

const sections: Array<{heading:string; paragraphs:string[]; bullets?:string[]}> = [
  {
    heading: '1. Who We Are and What These Terms Cover',
    paragraphs: [
      'Pro Locksmith Tech LLC, doing business as Pro Locksmith Tech (“Pro Locksmith Tech,” “we,” “our,” or “us”), is a mobile locksmith service-area business serving supported locations in South Florida. We do not operate a public walk-in storefront.',
      'These Terms describe website use, service inquiries, dispatch, estimates and certain service-related risks. Any separate written work order, quote, invoice, authorization or applicable legal requirement controls to the extent it conflicts with these website Terms. Merely viewing this website does not itself establish a signed service contract or waiver.'
    ]
  },
  {
    heading: '2. Service Availability, Arrival Estimates and Emergencies',
    paragraphs: [
      'We accept service inquiries 24 hours a day, 7 days a week, but availability at any particular address and time depends on technicians, service type, travel conditions, equipment and other circumstances. We may decline or reschedule requests we cannot safely or lawfully perform.',
      'Any advertised or communicated arrival time, including a 15–20-minute or 15–25-minute estimate, is an approximation only—not a promise, deadline or guarantee. Traffic, weather, location, dispatch volume, road closures, access conditions, verification requirements, prior jobs and unforeseen events may change the actual arrival time. Call for a current estimate; it can change after dispatch.',
      'We do not provide law enforcement, emergency medical or fire services. For an immediate threat to life or safety, contact 911 or the appropriate emergency authority.'
    ]
  },
  {
    heading: '3. Independent Contractors and Third-Party Technicians',
    paragraphs: [
      'We may arrange service using our personnel or qualified third-party independent locksmith technicians and subcontractors. The individual or company performing the service may be a separate business. We may share information reasonably needed to arrange and complete your service with the technician or contractor.',
      'A subcontractor may have its own license, credentials, insurance, policies or responsibilities where required. We do not represent that every dispatched technician is an employee. Where relevant, the identity of the service provider and applicable contractual terms should be communicated before work begins.',
      'The use of a subcontractor does not eliminate any responsibility that the law places on Pro Locksmith Tech. Responsibility for acts or omissions depends on the actual circumstances, applicable law and relevant agreements.'
    ]
  },
  {
    heading: '4. Authorization, Identity and Lawful Access',
    paragraphs: [
      'You must have legal authority to request work on the vehicle, building, lock, safe, storage unit or other property. You agree to provide accurate information about your identity, the property, your authority to access it and relevant safety conditions.',
      'Work may be declined or stopped when a requested service would be unsafe or unlawful.',
      'You are responsible for false statements or unauthorized instructions you provide, subject to applicable law.'
    ]
  },
  {
    heading: '5. Service Conditions, Tools and Possible Property Damage',
    paragraphs: [
      'Locksmith work can involve worn or defective locks, damaged keys, corroded hardware, altered doors, aging ignitions, malfunctioning electronics or previously modified security equipment. These conditions can affect the available procedures and outcome.',
      'When appropriate, technicians may attempt non-destructive entry techniques. However, no method is guaranteed to be damage-free or successful. Some situations may reasonably require drilling, cutting, disassembly, hardware replacement or other invasive work. Technicians should explain material choices and obtain authorization before proceeding where reasonably practicable.',
      'Unavoidable damage to an already defective component is not necessarily evidence of negligent work. At the same time, these Terms do not automatically excuse negligent, reckless, unlawful or otherwise legally actionable damage. Any claim will be evaluated based on the specific facts and applicable law.'
    ]
  },
  {
    heading: '6. Quotes, Pricing and Payment',
    paragraphs: [
      'A preliminary estimate given by telephone, text, online or before inspection is not necessarily a final quote. Price may depend on the vehicle, key system, lock type, parts, travel, complexity, labor, time of service and actual on-site conditions.',
      'Before chargeable work begins, the technician should explain the proposed service, reasonably foreseeable fees and any material change to a previously discussed price. You may decline a revised proposal before additional work begins, subject to any valid, previously disclosed and authorized dispatch or diagnostic fee.',
      'Payment is due as agreed in the applicable invoice or work order. We do not impose an undisclosed cancellation, trip or diagnostic fee merely because these website Terms exist. Taxes or payment processing terms, if applicable, should be disclosed.'
    ]
  },
  {
    heading: '7. Cancellations, Delays and Incomplete Service',
    paragraphs: [
      'If your situation changes, notify dispatch promptly at (754) 261-6528. A dispatch or cancellation fee may apply only if specifically disclosed and agreed before dispatch, and only to the extent permitted by law.',
      'Service may be delayed, interrupted or not completed due to safety, authorization, incompatible parts, vehicle or lock conditions, weather, traffic, system failures or other circumstances. Any amounts due for partial or unsuccessful work are determined by the actual approved service arrangement and applicable law—not a blanket nonrefundable policy.'
    ]
  },
  {
    heading: '8. No Universal Outcome or Compatibility Guarantee',
    paragraphs: [
      'Unless expressly included in a separate written warranty or applicable law, we do not promise that every lock can be opened without damage, that any key can be copied or programmed, that all components are compatible, that every problem can be solved on the first visit, or that a particular repair will remain effective for a specified period.',
      'Statements describing common service capabilities are not warranties of a particular result. Manufacturer warranties, written service warranties and nonwaivable legal rights, if any, remain governed by their terms and applicable law.'
    ]
  },
  {
    heading: '9. Website Information and Third-Party Services',
    paragraphs: [
      'Website text, images, directions, availability statements and general educational content are informational and may change. Photos may be illustrative and do not necessarily show your exact vehicle, lock, property or technician.',
      'Links to Google, Yelp, Nextdoor, social networks, payment providers and other third-party sites are provided for convenience. Those services have their own terms and policies. We are not responsible for their independently operated systems to the extent permitted by law.'
    ]
  },
  {
    heading: '10. Limitation of Liability — To the Extent Law Permits',
    paragraphs: [
      'To the fullest extent allowed by applicable law, neither Pro Locksmith Tech nor its owners, officers, staff or service providers will be liable for indirect, incidental, special, exemplary or consequential losses arising from website use, dispatch delays or service interruptions, including lost business opportunities or loss of use, when such limitations are legally permitted.',
      'To the fullest extent permitted by law, and only for claims where such a monetary limit is legally enforceable, our aggregate contractual liability for a particular service is limited to the amount paid to Pro Locksmith Tech for that service. This limitation is not intended to waive any nonwaivable rights or remedies.',
      'Nothing in these Terms excludes liability that cannot lawfully be excluded, including liability for fraud, intentional misconduct, gross negligence where applicable, unlawful acts, or other duties and consumer protections that cannot be waived. These Terms are not a promise that Pro Locksmith Tech will never be responsible for property damage, personal injury or a technician’s conduct.'
    ]
  },
  {
    heading: '11. Customer Responsibility for Misrepresentations and Unsafe Conditions',
    paragraphs: [
      'You agree not to request unlawful entry, knowingly provide false authorization documents, conceal known hazards or direct a technician to perform unsafe or unauthorized work.',
      'To the extent permitted by law, you may be responsible for reasonably documented losses caused by your own fraudulent statements, unlawful conduct or intentional misrepresentation. This provision does not require you to indemnify us for our own negligence or other conduct for which we are legally responsible.'
    ]
  },
  {
    heading: '12. Complaints, Damage Reports and Dispute Resolution',
    paragraphs: [
      'Please report concerns about workmanship, charges or damage as soon as reasonably possible, preferably with the service date, invoice or job number, description of the issue and relevant photographs. Prompt notice can help preserve evidence but does not eliminate rights protected by applicable law.',
      'We may investigate with the assigned technician, review records and offer an appropriate response. Any dispute may be pursued in the court or other forum authorized by applicable law. We do not require a customer to waive the right to sue, accept mandatory arbitration or relinquish statutory protections merely by using our website.'
    ]
  },
  {
    heading: '13. Privacy, Communications and Call Records',
    paragraphs: [
      'Please review our Privacy Policy for information about contact details, service locations, website analytics, dispatch communications, subcontractor access and third-party providers. Calls, messages or other communications may be recorded or retained only where lawful and subject to applicable notice and consent requirements.'
    ]
  },
  {
    heading: '14. Florida Law, Severability and Changes',
    paragraphs: [
      'To the extent permitted by applicable law, Florida law governs these website Terms, without overriding mandatory consumer laws or applicable jurisdiction and venue rules.',
      'If a term is determined unenforceable, the remaining provisions remain effective to the extent legally permitted. We may update these Terms by posting a revised version and effective date. A later website update does not retroactively alter the terms of a completed service arrangement.'
    ]
  }
];

export function TermsPage({ onNavigate: _onNavigate }: {onNavigate:(path:string)=>void}) {
  return <div className="min-h-screen bg-slate-900 py-12 text-slate-100">
    <SEOHead title="Terms of Service | Pro Locksmith Tech" description="Terms for Pro Locksmith Tech mobile locksmith services, dispatch estimates, subcontractors, authorization, property care and liability limitations." canonicalPath="/terms" />
    <div className="mx-auto max-w-5xl space-y-8 px-5 sm:px-8">
      <header className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-10">
        <div className="mb-3 flex items-center gap-2 text-sm font-bold text-amber-300"><FileText className="h-5 w-5"/>Service Terms & Dispatch Information</div>
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-400">Effective November 14, 2026</p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">Please review these terms before requesting locksmith service. Important topics include arrival estimates, independent technicians, authorization, property risks, payment and limitations of liability.</p>
      </header>
      <article className="space-y-8 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-base leading-8 text-slate-300 sm:p-10">
        {sections.map((section,i)=><section key={i} className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">{section.heading}</h2>
          {section.paragraphs.map((paragraph,j)=><p key={j}>{paragraph}</p>)}
          {section.bullets && <ul className="list-disc space-y-2 pl-6">{section.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>}
        </section>)}
        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="font-heading text-xl font-bold text-white">15. Contact Us</h2>
          <p>Questions about these Terms or a service issue? Contact Pro Locksmith Tech LLC:</p>
          <p className="flex flex-wrap items-center gap-2"><Phone className="h-4 w-4 text-amber-400"/><LocalizedA href="tel:+17542616528" className="font-semibold text-amber-300 underline">(754) 261-6528</LocalizedA></p>
          <p className="flex flex-wrap items-center gap-2"><Mail className="h-4 w-4 text-amber-400"/><LocalizedA href="mailto:prolocksmithtech@gmail.com" className="text-amber-300 underline">prolocksmithtech@gmail.com</LocalizedA></p>
          <p>Also see our <LocalizedA href="/privacy" className="text-amber-300 underline">Privacy Policy</LocalizedA>.</p>
        </section>
      </article>
    </div>
  </div>;
}
export default TermsPage;