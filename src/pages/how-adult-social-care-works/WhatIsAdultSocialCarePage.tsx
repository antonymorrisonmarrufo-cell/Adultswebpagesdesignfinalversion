import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Who can get help", to: "/adult-social-care/how-adult-social-care-works/who-can-get-help" },
  { title: "How to ask for help", to: "/adult-social-care/how-adult-social-care-works/how-to-ask-for-help" },
  { title: "Paying for your care", to: "/adult-social-care/paying-for-care" },
  { title: "Support for carers", to: "/adult-social-care/being-carer" },
];

export default function WhatIsAdultSocialCarePage() {
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
          <li><Link to="/adult-social-care/how-adult-social-care-works" className="text-wf-blue underline hover:text-wf-green">How adult social care works</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">What is adult social care?</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">What is adult social care?</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          Adult social care is the support provided to adults who need extra help to
          manage their daily lives, stay safe and live as independently as possible.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="max-w-3xl space-y-8">
          {/* Definition */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What adult social care means</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Adult social care is a wide range of services and support for adults aged
          18 and over who have care and support needs because of illness, disability,
          a mental health condition, substance misuse or age-related frailty.
          </p>
          <p className="mt-3 text-wf-dark leading-relaxed">
          It is different from healthcare provided by the NHS. While the NHS treats
          illness and injury, social care is about helping people with their day-to-day
          lives and maintaining their wellbeing, independence and dignity.
          </p>
          </section>

          {/* Types of help */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Types of help available</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Adult social care can include many different types of support:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>Help with personal care such as washing, dressing and eating</li>
          <li>Support to live safely in your own home, including home adaptations and equipment</li>
          <li>Day centres and activities to reduce social isolation</li>
          <li>Residential care homes and nursing homes for people who can no longer live at home</li>
          <li>Respite care to give unpaid carers a break</li>
          <li>Support with managing your mental health</li>
          <li>Help for people with learning disabilities to live as independently as possible</li>
          <li>Safeguarding to protect adults at risk of abuse or neglect</li>
          </ul>
          </section>

          {/* Who provides it */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Who provides adult social care?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Adult social care is organised by your local council. Waltham Forest Council
          is responsible for assessing your needs and arranging support. However, the
          care itself is often delivered by a range of providers:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li>The council's own care services</li>
          <li>Independent care agencies and home care providers</li>
          <li>Voluntary and community organisations</li>
          <li>Private care homes and nursing homes</li>
          <li>Personal assistants employed directly by the person receiving care</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Regardless of who delivers your care, the council has a duty to make sure
          it meets your assessed needs and that the quality is acceptable.
          </p>
          </section>

          {/* Care Act 2014 */}
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Your rights under the Care Act 2014</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The Care Act 2014 is the law that sets out how adult social care works in
          England. It gives you important rights:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Right to an assessment:</strong> anyone who appears to have care and support needs has the right to a free assessment, regardless of their finances</li>
          <li><strong>Wellbeing principle:</strong> everything the council does must promote your wellbeing, including your personal dignity, physical and mental health, and control over your daily life</li>
          <li><strong>Prevention:</strong> the council must provide services to prevent, reduce or delay the need for care and support</li>
          <li><strong>Information and advice:</strong> the council must provide clear information to help you understand the care system and make informed decisions</li>
          <li><strong>Choice and control:</strong> you have the right to be involved in decisions about your care and to choose how your needs are met</li>
          <li><strong>Carers' rights:</strong> if you are an unpaid carer, you have the right to an assessment of your own needs</li>
          </ul>
          </section>

          {/* Contact */}
          <div className="rounded-md bg-white p-6">
          <h2 className="text-xl font-bold text-[#bf3688]">Want to find out more?</h2>
          <p className="mt-2 text-wf-dark leading-relaxed">
          If you have questions about adult social care or think you or someone you
          know may need support, contact us.
          </p>
          <p className="mt-3 text-sm font-semibold text-wf-dark">
          Telephone:{" "}
          <a href="tel:02084963130" className="text-wf-blue underline">020 8496 3130</a>
          </p>
          <p className="mt-1 text-sm text-wf-gray">Monday to Friday, 9am to 5pm (excluding bank holidays)</p>
          </div>
          </div>

          {/* Related links */}
          <div className="max-w-3xl mt-8">
          <section className="rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          {relatedPages.map((page) => (
          <li key={page.to}>
          <Link to={page.to} className="text-wf-blue underline hover:text-wf-green">
          {page.title}
          </Link>
          </li>
          ))}
          </ul>
          </section>
          </div>

          {/* Last updated */}
          <p className="mt-8 text-sm text-wf-gray">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
