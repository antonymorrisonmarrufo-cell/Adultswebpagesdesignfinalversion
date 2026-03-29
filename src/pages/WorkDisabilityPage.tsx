import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Physical disabilities support", to: "/physical-disabilities" },
  { title: "Learning disability support", to: "/learning-disability" },
  { title: "Autism support", to: "/autism" },
  { title: "Paying for care", to: "/paying-for-care" },
  { title: "Live independently", to: "/live-independently" },
];

export default function WorkDisabilityPage() {
  return (
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
      <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
      <li className="flex items-center gap-1">
      <Link to="/" className="text-wf-blue underline hover:text-wf-green">Home</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link to="/adult-social-care" className="text-wf-blue underline hover:text-wf-green">Adult Social Care</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Work and disability</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Work and disability
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      {/* Intro */}
      <section>
      <p className="text-wf-dark leading-relaxed">
      Having a disability or long-term health condition does not mean you
      cannot work. Many disabled people are in employment, and there are
      schemes and support available to help you find, start and stay in
      work. Waltham Forest Council and our partners can help you access
      these opportunities.
      </p>
      </section>

      {/* Access to Work */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Access to Work scheme</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Access to Work is a government scheme that provides practical and
      financial support to help you start or stay in work if you have a
      disability or health condition. The scheme is available whether you
      are employed, self-employed or about to start a job.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Access to Work can help pay for:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Specialist equipment or adaptations to your workplace</li>
      <li>A support worker or job coach</li>
      <li>Travel to and from work if you cannot use public transport</li>
      <li>BSL interpreters or other communication support</li>
      <li>Mental health support in the workplace</li>
      <li>Disability awareness training for your colleagues</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      To apply, contact the Access to Work helpline on 0800 121 7479 or
      apply online at{" "}
      <a
      href="https://www.gov.uk/access-to-work"
      target="_blank"
      rel="noopener noreferrer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      gov.uk/access-to-work
      </a>
      .
      </p>
      </section>

      {/* Supported employment */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Supported employment in Waltham Forest</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Waltham Forest Council runs a supported employment service for
      disabled adults who want to find paid work. The service provides
      personalised, one-to-one support from an employment specialist who
      will work with you for as long as you need.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The service can help you with:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Identifying your skills, interests and career goals</li>
      <li>Job searching and applications</li>
      <li>Writing CVs and preparing for interviews</li>
      <li>Work experience and job tasters</li>
      <li>In-work support and coaching once you start a job</li>
      <li>Liaison with employers about reasonable adjustments</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The service is free and open to any adult living in Waltham Forest
      who has a disability or long-term health condition. Contact our Adult
      Social Care team for a referral.
      </p>
      </section>

      {/* Disability Confident employers */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Disability Confident employers</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Disability Confident is a government scheme that encourages employers
      to recruit and retain disabled people. Employers who sign up commit
      to:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Offering interviews to all disabled applicants who meet the minimum criteria</li>
      <li>Making reasonable adjustments in the workplace</li>
      <li>Supporting employees who become disabled or develop a long-term condition</li>
      <li>Promoting a positive and inclusive workplace culture</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Waltham Forest Council is a Disability Confident employer. When
      applying for jobs, look out for the Disability Confident symbol,
      which shows the employer is committed to supporting disabled staff.
      You can find Disability Confident employers at{" "}
      <a
      href="https://www.gov.uk/government/collections/disability-confident-campaign"
      target="_blank"
      rel="noopener noreferrer"
      className="text-wf-blue underline hover:text-wf-green"
      >
      gov.uk/disability-confident
      </a>
      .
      </p>
      </section>

      {/* Volunteering */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Volunteering opportunities</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Volunteering can be a great way to build confidence, learn new
      skills, meet people and gain experience for your CV. Many
      organisations in Waltham Forest welcome disabled volunteers and will
      make reasonable adjustments so you can take part.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Volunteering opportunities include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Helping at community centres, libraries and charity shops</li>
      <li>Befriending and mentoring</li>
      <li>Environmental and conservation projects</li>
      <li>Supporting local sports clubs and events</li>
      <li>Administrative and digital roles</li>
      <li>Peer support and advocacy work</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Volunteer Centre Waltham Forest can help match you with a role that
      suits your interests and availability. Volunteering does not usually
      affect your benefits, but you should check with Jobcentre Plus if you
      are unsure.
      </p>
      </section>

      {/* Skills training */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Skills training</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Developing new skills can open up employment opportunities. Training
      and courses available in Waltham Forest include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Adult learning courses</strong> - free or low-cost courses in
      English, maths, IT, employability skills and more, delivered by
      Waltham Forest Adult Learning Service
      </li>
      <li>
      <strong>Digital skills</strong> - courses to help you use computers,
      the internet and smartphones confidently
      </li>
      <li>
      <strong>English for Speakers of Other Languages (ESOL)</strong> -
      courses to improve your English language skills
      </li>
      <li>
      <strong>Sector-specific training</strong> - qualifications in areas
      such as health and social care, customer service, hospitality and
      retail
      </li>
      <li>
      <strong>Apprenticeships</strong> - earn while you learn with a local
      employer, with adjustments made to support disabled apprentices
      </li>
      </ul>
      </section>

      {/* Benefits and work */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Benefits and work</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Starting work does not necessarily mean you will lose your benefits.
      Understanding how work affects your benefits is important so you can
      make informed decisions.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Key things to know:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Personal Independence Payment (PIP)</strong> is not affected
      by your earnings or hours of work - you can receive PIP whether or
      not you are working
      </li>
      <li>
      <strong>Universal Credit</strong> includes a work allowance for
      disabled people, meaning you can earn a certain amount before your
      benefit is reduced
      </li>
      <li>
      <strong>Permitted work rules</strong> allow you to do some work while
      receiving Employment and Support Allowance
      </li>
      <li>
      <strong>Better off calculations</strong> - our welfare benefits team
      can help you understand whether you will be better off financially in
      work
      </li>
      <li>
      <strong>Trial periods</strong> - some benefits allow you to try
      working for a set period without affecting your entitlement
      </li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Contact our Adult Social Care team for a referral to our welfare
      benefits advisers, who can give you personalised guidance.
      </p>
      </section>

      {/* Contact */}
      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      To find out more about employment support for disabled people in
      Waltham Forest, contact our Adult Social Care team.
      </p>
      <p className="mt-3 text-sm font-semibold text-wf-dark">
      Telephone:{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>
      </p>
      <p className="mt-1 text-sm text-wf-gray">
      Monday to Friday, 9am to 5pm (excluding bank holidays)
      </p>
      </section>
      </div>
      </div>

      {/* Related pages */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="pt-8">
      <h2 className="text-xl font-bold text-wf-pink">Related pages</h2>
      <ul className="mt-4 space-y-2">
      {relatedPages.map((page) => (
      <li key={page.to}>
      <Link
      to={page.to}
      className="text-wf-blue underline hover:text-wf-green"
      >
      {page.title}
      </Link>
      </li>
      ))}
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