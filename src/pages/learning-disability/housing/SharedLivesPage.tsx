import { Link } from "react-router-dom";

export default function SharedLivesPage() {
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
      to="/learning-disability-support"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Learning disability support
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li className="flex items-center gap-1">
      <Link
      to="/learning-disability-support/housing-options"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Housing options
      </Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Shared Lives</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Shared Lives
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
      Shared Lives is a scheme where you live with an approved carer in their
      family home. It offers a warm, supportive environment where you become part
      of the household while receiving personalised support.
      </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="space-y-10">
      {/* Living with a carer */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">
      Living with an approved carer
      </h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Shared Lives carers are carefully recruited, trained and approved people
      who open their homes and lives to support someone with a learning
      disability. As a Shared Lives arrangement, you will:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>Have your own room in the carer's home</li>
      <li>Be treated as a member of the household and take part in family life</li>
      <li>Receive support that is tailored to your individual needs and preferences</li>
      <li>Be encouraged to develop new skills and become more independent</li>
      <li>Have access to community activities and social opportunities</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Shared Lives can also be used for short breaks and respite care, or for
      daytime support only, rather than as a full-time living arrangement.
      </p>
      </section>

      {/* Matching process */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">The matching process</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Finding the right match between you and a Shared Lives carer is important.
      The matching process involves:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-wf-dark leading-relaxed">
      <li>Getting to know you, your interests, your personality and what kind of household would suit you</li>
      <li>Identifying potential carers whose home, lifestyle and skills match your needs</li>
      <li>Arranging introductions and visits so you can get to know each other</li>
      <li>A trial period where you spend increasing amounts of time with the carer</li>
      <li>A formal agreement once everyone is happy that the match is right</li>
      </ul>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      You will always have a say in who you live with, and we will not go ahead
      with a match unless you are comfortable. Your Shared Lives arrangement will
      be reviewed regularly to make sure it continues to work well for everyone.
      </p>
      </section>

      {/* How to find out more */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">How to find out more</h2>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      If you are interested in Shared Lives, either as a person who needs support
      or as someone who would like to become a Shared Lives carer, please contact
      us.
      </p>
      <p className="mt-3 text-sm text-wf-dark leading-relaxed">
      Call us on{" "}
      <a href="tel:02084963130" className="text-wf-blue underline">
      020 8496 3130
      </a>{" "}
      or speak to your social worker about whether Shared Lives could be right
      for you.
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
      to="/learning-disability-support/housing-options/supported-living"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Supported living
      </Link>
      </li>
      <li>
      <Link
      to="/learning-disability-support/housing-options/living-with-family"
      className="text-sm text-wf-blue underline hover:text-wf-green"
      >
      Living with family
      </Link>
      </li>
      <li>
      <Link
      to="/learning-disability-support/housing-options"
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
