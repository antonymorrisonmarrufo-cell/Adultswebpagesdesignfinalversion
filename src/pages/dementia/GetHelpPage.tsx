import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Hornbeam Dementia Hub", to: "/dementia/hub" },
  { title: "Memory assessment service", to: "/dementia/memory-service" },
  { title: "Dementia adviser service", to: "/dementia/adviser" },
  { title: "Support for carers", to: "/dementia/carers" },
];

export default function GetHelpPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-2">
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
              <span className="font-medium text-wf-dark">Getting help and support</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Getting help and support
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="max-w-3xl space-y-10">
          {/* When to seek help */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">When to seek help</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              It is natural to become a little more forgetful as we age. However, if
              memory problems are affecting your daily life, or the life of someone you
              know, it may be time to seek help. Early diagnosis can help you access the
              right support and plan for the future.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              You should consider speaking to your GP if you or someone you care about
              is experiencing:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>Regularly forgetting recent events, names or faces</li>
              <li>Difficulty following conversations or finding the right words</li>
              <li>Getting confused about the time or place</li>
              <li>Problems managing money or paying bills</li>
              <li>Difficulty completing familiar tasks at home or work</li>
              <li>Changes in mood, behaviour or personality</li>
            </ul>
          </section>

          {/* GP referral */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">GP referral</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Your GP is usually the first point of contact. They will carry out an
              initial assessment, which may include simple memory tests and a physical
              examination to rule out other causes of memory problems.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              If your GP thinks further investigation is needed, they will refer you to
              the local memory assessment service. You can also ask a family member,
              friend or carer to accompany you to your appointment.
            </p>
          </section>

          {/* Memory assessment */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Memory assessment</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              The memory assessment service provides specialist assessment and diagnosis
              for people with suspected dementia. The team includes consultants, nurses
              and psychologists who will work with you to understand your symptoms.
            </p>
            <p className="mt-3 text-wf-dark leading-relaxed">
              For full details on what to expect, visit our{" "}
              <Link
                to="/dementia/memory-service"
                className="text-wf-blue underline hover:text-wf-green"
              >
                memory assessment service
              </Link>{" "}
              page.
            </p>
          </section>

          {/* Local support services */}
          <section>
            <h2 className="text-2xl font-bold text-wf-pink">Local support services</h2>
            <p className="mt-3 text-wf-dark leading-relaxed">
              Waltham Forest offers a wide range of support for people living with
              dementia and their families, including:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
              <li>
                <strong>Hornbeam Dementia Hub</strong> - a welcoming centre offering
                information, activities and drop-in support
              </li>
              <li>
                <strong>Dementia adviser service</strong> - personalised one-to-one
                guidance from a dedicated dementia adviser
              </li>
              <li>
                <strong>Activities and social groups</strong> - Singing for the Brain,
                art therapy, exercise classes and lunch clubs
              </li>
              <li>
                <strong>Carer support</strong> - respite, support groups and carers
                assessments
              </li>
              <li>
                <strong>iDOS</strong> - online tools and apps to support daily living
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
            <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              To find out more about dementia support in Waltham Forest, contact our
              Adult Social Care team.
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
        <div className="border-t border-gray-200 pt-8">
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
  );
}
