import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Getting help and support", to: "/dementia/get-help" },
  { title: "Activities and social groups", to: "/dementia/activities" },
  { title: "Dementia adviser service", to: "/dementia/adviser" },
  { title: "Support for carers", to: "/dementia/carers" },
];

export default function HubPage() {
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
      <span className="font-medium text-wf-dark">Hornbeam Dementia Hub</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-wf-green leading-tight">
      Hornbeam Dementia Hub
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      {/* About the Hub */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">About the Hub</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Hornbeam Dementia Hub is a welcoming, purpose-built centre in Waltham
      Forest for people living with dementia, their carers and families. The Hub
      provides a safe, friendly environment where you can access information,
      join activities and meet others who understand what you are going through.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Hub is open to anyone affected by dementia, whether you have a
      diagnosis, are awaiting assessment or are supporting someone with the
      condition. You do not need a referral to visit.
      </p>
      </section>

      {/* Services available */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Services available</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Hornbeam Dementia Hub offers a range of services under one roof:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Information and advice about dementia, local services and benefits</li>
      <li>Drop-in sessions with trained staff who can answer your questions</li>
      <li>Dementia adviser appointments for personalised support</li>
      <li>Cognitive Stimulation Therapy (CST) sessions</li>
      <li>Peer support and social groups</li>
      <li>Signposting to specialist services including legal and financial advice</li>
      <li>Support for carers, including carers groups and one-to-one sessions</li>
      </ul>
      </section>

      {/* Activities */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Activities at the Hub</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The Hub runs a varied programme of activities designed to support
      wellbeing, stimulate the mind and provide enjoyment:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Singing for the Brain sessions</li>
      <li>Art and craft workshops</li>
      <li>Gentle exercise and movement classes</li>
      <li>Reminiscence groups</li>
      <li>Games, puzzles and quizzes</li>
      <li>Seasonal events and celebrations</li>
      </ul>
      <p className="mt-3 text-wf-dark leading-relaxed">
      For a full list of current activities, visit our{" "}
      <Link
      to="/dementia/activities"
      className="text-wf-blue underline hover:text-wf-green"
      >
      activities and social groups
      </Link>{" "}
      page or contact the Hub directly.
      </p>
      </section>

      {/* Location and opening hours */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Location and opening hours</h2>
      <div className="mt-3 space-y-3 text-wf-dark leading-relaxed">
      <p>
      <strong>Address:</strong><br />
      Hornbeam Dementia Hub<br />
      Hornbeam Centre<br />
      Walthamstow<br />
      London E17
      </p>
      <p>
      <strong>Opening hours:</strong><br />
      Monday to Friday: 9.30am to 4.30pm<br />
      Saturday: 10am to 2pm (selected activities only)<br />
      Closed on Sundays and bank holidays
      </p>
      <p>
      The Hub is fully accessible, with step-free access throughout, accessible
      toilets and a hearing loop at reception.
      </p>
      </div>
      </section>

      {/* Contact */}
      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact the Hub</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      To find out more about the Hornbeam Dementia Hub or to arrange a visit,
      please get in touch.
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