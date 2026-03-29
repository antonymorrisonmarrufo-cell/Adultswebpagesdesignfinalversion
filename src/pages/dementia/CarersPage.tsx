import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Getting help and support", to: "/dementia/get-help" },
  { title: "Hornbeam Dementia Hub", to: "/dementia/hub" },
  { title: "Dementia adviser service", to: "/dementia/adviser" },
  { title: "Planning for the future", to: "/dementia/planning" },
];

export default function CarersPage() {
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
      <li className="flex items-center gap-1">
      <Link to="/dementia" className="text-wf-blue underline hover:text-wf-green">Dementia support</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Support for carers</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Support for carers
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      <section>
      <p className="text-wf-dark leading-relaxed">
      Caring for someone with dementia can be rewarding, but it can also be
      physically and emotionally demanding. Waltham Forest Council and our
      partners provide a range of support to help carers look after their own
      wellbeing while caring for someone with dementia.
      </p>
      </section>

      {/* Respite care */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Respite care</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Respite care gives you a break from caring while ensuring the person you
      look after receives quality care. There are several respite options
      available in Waltham Forest:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Day care</strong> - the person you care for can attend day
      services at the Hornbeam Dementia Hub or other local centres, giving
      you time during the day
      </li>
      <li>
      <strong>Sitting service</strong> - a trained worker comes to your home to
      sit with the person you care for, allowing you to go out or have a rest
      </li>
      <li>
      <strong>Short residential breaks</strong> - the person you care for
      stays in a care home for a few days or weeks, giving you a longer break
      </li>
      <li>
      <strong>Emergency respite</strong> - if you become unwell or face an
      unexpected crisis, emergency care can be arranged at short notice
      </li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Respite care may be funded by the council following a carers assessment.
      Some services may have a charge depending on your financial circumstances.
      </p>
      </section>

      {/* Support groups */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Support groups</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Connecting with other carers who understand what you are going through can
      make a real difference. Waltham Forest offers several support groups for
      dementia carers:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Dementia carers support group</strong> - a regular group meeting
      at the Hornbeam Dementia Hub where carers can share experiences, get
      advice and support each other
      </li>
      <li>
      <strong>Online carers forum</strong> - connect with other carers through
      the Alzheimer's Society Talking Point online community
      </li>
      <li>
      <strong>Carers cafe</strong> - informal drop-in sessions in community
      venues where you can chat with other carers over tea and cake
      </li>
      <li>
      <strong>Peer support telephone line</strong> - speak to a trained
      volunteer who has experience of caring for someone with dementia
      </li>
      </ul>
      </section>

      {/* Carers assessment */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Carers assessment</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      As a carer, you have a legal right to a carers assessment from the council.
      This is a conversation about your needs as a carer, not a test of your
      ability to care. The assessment looks at:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>How caring affects your physical and mental health</li>
      <li>Whether you are able to work, study or take part in leisure activities</li>
      <li>Your relationship with the person you care for and other family members</li>
      <li>Whether you feel safe and supported in your caring role</li>
      <li>What support would help you maintain your wellbeing</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Following the assessment, the council may provide support such as respite
      care, a direct payment to arrange your own support, or a referral to local
      services. You can request a carers assessment at any time by contacting our
      Adult Social Care team.
      </p>
      </section>

      {/* Additional support */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Additional support for carers</h2>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Carers UK helpline</strong> - call 0808 808 7777 for expert
      advice on benefits, rights and practical support
      </li>
      <li>
      <strong>Admiral Nurses</strong> - specialist dementia nurses provided by
      Dementia UK who offer expert support to families
      </li>
      <li>
      <strong>Carer's Allowance</strong> - you may be entitled to Carer's
      Allowance if you spend at least 35 hours a week caring for someone
      </li>
      <li>
      <strong>Counselling services</strong> - free counselling may be available
      through your GP or local carers organisation
      </li>
      <li>
      <strong>Training courses</strong> - learn practical skills for caring,
      including moving and handling, first aid and understanding dementia
      </li>
      </ul>
      </section>

      {/* Contact */}
      <section className="rounded-lg border-2 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      To request a carers assessment or find out about support for carers in
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
      <Link to={page.to} className="text-wf-blue underline hover:text-wf-green">
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