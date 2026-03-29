import { Link } from "react-router-dom";

export default function MaracPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
          <li><Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">Safeguarding adults</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">MARAC</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#004E3E]">MARAC</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          The Multi-Agency Risk Assessment Conference (MARAC) is a meeting where information is shared
          about the highest-risk domestic abuse cases to develop a coordinated safety plan.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* What is MARAC */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is MARAC?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          MARAC stands for Multi-Agency Risk Assessment Conference. It is a regular local meeting to
          discuss how to help victims at high risk of murder or serious harm from domestic abuse.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          A MARAC is attended by representatives from the police, health services, social care, housing,
          probation, Independent Domestic Violence Advisors (IDVAs), and other relevant agencies. The
          meeting shares information about each case and agrees on a coordinated action plan to increase
          the safety of the victim and manage the behaviour of the perpetrator.
          </p>
          </section>

          {/* How it works */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">How does MARAC work?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The MARAC process follows these key steps:
          </p>
          <ol className="mt-4 space-y-3 list-decimal pl-6 text-wf-dark">
          <li>
          <strong>Identification</strong> - A professional identifies a victim of domestic abuse who
          is at high risk. This is usually assessed using the Domestic Abuse, Stalking and Harassment
          (DASH) risk assessment checklist.
          </li>
          <li>
          <strong>Referral</strong> - A MARAC referral is made by the professional. Any agency can
          refer to MARAC, not just the police.
          </li>
          <li>
          <strong>Information sharing</strong> - Before the meeting, agencies research their records
          for relevant information about the victim, the perpetrator, and any children in the household.
          </li>
          <li>
          <strong>The meeting</strong> - Agencies share information and discuss the case. An action
          plan is developed with specific actions assigned to individual agencies.
          </li>
          <li>
          <strong>Safety planning</strong> - Actions are carried out after the meeting. The IDVA
          works directly with the victim to develop and implement a safety plan.
          </li>
          </ol>
          </section>

          {/* Who can refer */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who can refer to MARAC?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Any professional can refer a case to MARAC if they believe the victim is at high risk of
          serious harm or murder. Common referring agencies include:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-wf-dark">
          <li>Police</li>
          <li>Independent Domestic Violence Advisors (IDVAs)</li>
          <li>Health professionals (GPs, A&E staff, midwives, health visitors)</li>
          <li>Social workers (both adult and children's services)</li>
          <li>Housing officers</li>
          <li>Probation officers</li>
          <li>Voluntary sector organisations</li>
          <li>Education professionals</li>
          </ul>
          <p className="mt-4 text-wf-dark leading-relaxed">
          You do not need the victim's consent to make a referral to MARAC. If you believe someone is at
          high risk, you should refer even if the victim has not consented, as the priority is safety.
          </p>
          </section>

          {/* Referral process */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Making a MARAC referral</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          To make a MARAC referral in Waltham Forest:
          </p>
          <ol className="mt-4 space-y-3 list-decimal pl-6 text-wf-dark">
          <li>Complete a DASH (Domestic Abuse, Stalking and Harassment) risk assessment with the victim where possible</li>
          <li>If the DASH score indicates high risk (14 or above ticks), or if you have professional judgement that the case is high risk, complete the MARAC referral form</li>
          <li>Submit the referral form to the Waltham Forest MARAC coordinator</li>
          </ol>
          <p className="mt-4 text-wf-dark">
          <strong>MARAC coordinator contact:</strong>
          </p>
          <p className="mt-2 text-wf-dark">
          <strong>Email:</strong>{" "}
          <a href="mailto:marac@walthamforest.gov.uk" className="text-wf-blue underline hover:text-wf-green">
          marac@walthamforest.gov.uk
          </a>
          </p>
          <p className="mt-2 text-wf-dark">
          <strong>Phone:</strong>{" "}
          <a href="tel:02084963130" className="font-bold text-[#004E3E] no-underline">020 8496 3130</a>
          </p>
          </section>

          {/* Confidentiality */}
          <section className="mb-8 rounded-md border border-wf-gray-light bg-[#f3f2f1] p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Confidentiality</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Information shared at MARAC is confidential and must only be used for the purpose of reducing
          risk to the victim. All agencies attending MARAC sign an information sharing protocol.
          Information should not be shared with the perpetrator.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The victim should be informed that a referral to MARAC has been made, unless doing so would
          increase risk to the victim or others.
          </p>
          </section>

          {/* Domestic abuse support */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Domestic abuse support services</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you or someone you know is affected by domestic abuse, the following services can help:
          </p>
          <ul className="mt-4 space-y-4 text-wf-dark">
          <li>
          <strong>National Domestic Abuse Helpline:</strong>{" "}
          <a href="tel:08082000247" className="font-bold text-[#004E3E] no-underline">0808 200 0247</a>
          <br />
          <span className="text-sm text-wf-gray">Free, 24-hour helpline run by Refuge</span>
          </li>
          <li>
          <strong>Waltham Forest Domestic Abuse services:</strong>{" "}
          <a href="tel:02084963130" className="font-bold text-[#004E3E] no-underline">020 8496 3130</a>
          <br />
          <span className="text-sm text-wf-gray">Local support and advice</span>
          </li>
          </ul>
          </section>

          {/* Related links */}
          <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/safeguarding/abuse-and-neglect" className="text-wf-blue underline hover:text-wf-green">
          Types of abuse and neglect
          </Link>
          </li>
          <li>
          <Link to="/safeguarding/professionals" className="text-wf-blue underline hover:text-wf-green">
          Information for professionals
          </Link>
          </li>
          <li>
          <Link to="/safeguarding/report-abuse" className="text-wf-blue underline hover:text-wf-green">
          Report abuse or neglect
          </Link>
          </li>
          <li>
          <Link to="/safeguarding" className="text-wf-blue underline hover:text-wf-green">
          Safeguarding adults overview
          </Link>
          </li>
          </ul>
          </section>

          {/* Last updated */}
          <p className="text-sm text-wf-gray">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
