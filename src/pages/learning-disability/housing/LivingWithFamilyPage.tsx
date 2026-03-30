import { Link } from "react-router-dom";

export default function LivingWithFamilyPage() {
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
      <li className="flex items-center gap-1">
      <Link
      to="/adult-social-care/learning-disability-support/housing-and-support-options"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Housing options
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Living with family</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Living with family
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
      Many people with learning disabilities live with their family. We offer a
      range of support to help families continue to provide care and to ensure that
      everyone in the household has a good quality of life.
      </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="space-y-10">
      {/* Support available */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Support available</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      If you or your family member has a learning disability and lives at home
      with family, we can provide support to make daily life easier. This may
      include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>A support worker who visits regularly to help with daily activities</li>
      <li>Day services and community activities for the person with a learning disability</li>
      <li>Help with personal care, cooking and household tasks</li>
      <li>Support to access education, training or employment</li>
      <li>Assistive technology and equipment to promote independence at home</li>
      <li>Advice on benefits and financial support</li>
      </ul>
      </section>

      {/* Respite */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Respite care</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Caring for a family member can be rewarding but also demanding. Respite
      care gives you a planned break while the person you care for is looked
      after by someone else.
      </p>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Options for respite include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>A support worker coming to your home for a few hours</li>
      <li>The person attending a day service or activity group</li>
      <li>A short stay with a Shared Lives carer or in a care home</li>
      <li>Holiday and weekend breaks</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Respite can be arranged regularly or on an occasional basis. We also
      provide emergency respite if you have an unexpected crisis.
      </p>
      </section>

      {/* Family support */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Family support services</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      We recognise that the whole family can be affected when someone has a
      learning disability. Our family support services include:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>Carers assessments for family members who provide care</li>
      <li>Support groups where you can meet other families in similar situations</li>
      <li>Training and information sessions on topics such as managing behaviour, health needs and communication</li>
      <li>Planning for the future, including what will happen when family carers are no longer able to provide care</li>
      <li>Mediation and support if there are disagreements within the family about care</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      To find out more about the support available for your family, call us on{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>
      .
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
      to="/adult-social-care/learning-disability-support/support-for-carers-and-families"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Support for carers
      </Link>
      </li>
      <li>
      <Link
      to="/adult-social-care/learning-disability-support/housing/shared-lives"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Shared Lives
      </Link>
      </li>
      <li>
      <Link
      to="/adult-social-care/learning-disability-support/housing-and-support-options"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Housing options
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
