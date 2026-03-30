import { Link } from "react-router-dom";

export default function ProfessionalReferralPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
      <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
      <li className="flex items-center gap-1">
      <Link to="/" className="text-wf-blue underline hover:text-wf-green">
      Home
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link
      to="/adult-social-care"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Adult Social Care
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link
      to="/adult-social-care/learning-disability-support"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Learning disability support
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Professional referral</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Professional referral
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
      This page is for health and social care professionals who wish to refer
      someone for learning disability support in Waltham Forest. Please ensure you
      have the person's consent before making a referral.
      </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="space-y-10">
      {/* How to refer */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">How to refer someone</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Referrals can be made by GPs, hospital staff, community nurses, social
      workers and other health and social care professionals. You can make a
      referral by:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>
      Calling our Adult Social Care team on{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>
      </li>
      <li>
      Completing our{" "}
      <Link
      to="/adult-social-care/learning-disability-support/request-support"
      className="text-wf-blue underline hover:text-wf-green"
      >
      online referral form
      </Link>
      </li>
      <li>Sending a secure email to the learning disability team with the referral details</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      For urgent referrals, please call us directly so that we can prioritise the
      request.
      </p>
      </section>

      {/* What to include */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">
      What information to include
      </h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      To help us process the referral as quickly as possible, please include the
      following information:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>The person's full name, date of birth and address</li>
      <li>Contact details for the person and their next of kin or carer</li>
      <li>Details of the learning disability and any diagnosis</li>
      <li>Current living situation and any existing support</li>
      <li>The reason for the referral and what support is being requested</li>
      <li>Any risk factors or safeguarding concerns</li>
      <li>The person's GP name and surgery</li>
      <li>Confirmation that the person has given consent for the referral</li>
      <li>Your name, role and contact details as the referring professional</li>
      </ul>
      </section>

      {/* What happens after referral */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">
      What happens after you refer
      </h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Once we receive the referral, we will:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>Acknowledge receipt within two working days</li>
      <li>Review the information and decide on the appropriate response</li>
      <li>Contact the person or their representative to arrange an initial conversation</li>
      <li>Carry out a needs assessment if the person appears to be eligible for support</li>
      <li>Keep the referring professional informed of progress where consent has been given</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      If the referral does not meet the criteria for our learning disability
      services, we will signpost the person to other appropriate support.
      </p>
      </section>
      </div>
      </div>

      {/* Related links */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-xl font-bold text-wf-pink">Related pages</h2>
      <ul className="mt-4 space-y-2">
      <li>
      <Link
      to="/adult-social-care/learning-disability-support/request-support"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Request support form
      </Link>
      </li>
      <li>
      <Link
      to="/adult-social-care/learning-disability-support/ask-for-support"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Ask for support
      </Link>
      </li>
      <li>
      <Link
      to="/adult-social-care/learning-disability-support"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Learning disability support
      </Link>
      </li>
      </ul>
      </div>
      </div>

      {/* Last updated */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <p className="text-xs text-wf-gray">Last updated: March 2026</p>
      </div>
        </div>
      </div>
    </div>
  );
}
