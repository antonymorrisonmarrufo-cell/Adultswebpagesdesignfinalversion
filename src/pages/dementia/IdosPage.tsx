import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Getting help and support", to: "/dementia/get-help" },
  { title: "Activities and social groups", to: "/dementia/activities" },
  { title: "Dementia adviser service", to: "/dementia/adviser" },
  { title: "Support for carers", to: "/dementia/carers" },
];

export default function IdosPage() {
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
      <span className="font-medium text-wf-dark">iDOS - online dementia resources</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-wf-green leading-tight">
      iDOS - online dementia resources
      </h1>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
      <div className="max-w-3xl space-y-10">
      {/* About iDOS */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">About iDOS</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      iDOS (Integrated Dementia Online Support) is a collection of digital tools
      and resources designed to support people living with dementia and their
      carers. These online resources are available 24 hours a day, 7 days a week
      and can be accessed from a computer, tablet or smartphone.
      </p>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Whether you are looking for information about dementia, practical advice
      for daily living or ways to stay connected, iDOS has something to help.
      </p>
      </section>

      {/* Digital tools */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Digital tools</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      iDOS includes a range of digital tools that can help with everyday tasks
      and wellbeing:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Medication reminders</strong> - set up reminders to help manage
      medications on time
      </li>
      <li>
      <strong>Daily routine planners</strong> - create visual schedules to
      support independence and routine
      </li>
      <li>
      <strong>Memory aids</strong> - tools to help remember important
      information, appointments and contacts
      </li>
      <li>
      <strong>Photo and video sharing</strong> - stay connected with family
      and friends through easy-to-use sharing tools
      </li>
      <li>
      <strong>Brain training activities</strong> - games and puzzles designed
      to stimulate cognitive function
      </li>
      </ul>
      </section>

      {/* Apps */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Recommended apps</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The following apps have been reviewed and recommended by our dementia
      support team:
      </p>
      <div className="mt-4 space-y-4">
      <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold text-wf-dark">Book of You</h3>
      <p className="mt-1 text-sm text-wf-dark leading-relaxed">
      Create a digital life story book with photos, music and memories.
      Helps spark conversation and supports reminiscence therapy.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold text-wf-dark">MindMate</h3>
      <p className="mt-1 text-sm text-wf-dark leading-relaxed">
      An all-in-one app with brain games, exercise plans, nutrition advice
      and daily tips for people living with dementia.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold text-wf-dark">Jointly</h3>
      <p className="mt-1 text-sm text-wf-dark leading-relaxed">
      A care coordination app from Carers UK that helps families and carers
      share tasks, appointments and important information.
      </p>
      </div>
      <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold text-wf-dark">Dementia Connect</h3>
      <p className="mt-1 text-sm text-wf-dark leading-relaxed">
      The Alzheimer's Society support line app providing information,
      advice and a direct connection to trained dementia advisers.
      </p>
      </div>
      </div>
      </section>

      {/* Online support */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Online support</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      In addition to tools and apps, there are online communities and
      information sources that can provide ongoing support:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Talking Point forum</strong> - the Alzheimer's Society online
      community where people with dementia and carers can share experiences
      </li>
      <li>
      <strong>NHS dementia guide</strong> - comprehensive information about
      dementia types, symptoms and living well
      </li>
      <li>
      <strong>Dementia UK virtual clinics</strong> - access specialist Admiral
      Nurses via video call for expert advice
      </li>
      <li>
      <strong>Online learning courses</strong> - free courses about dementia
      awareness and caring skills from organisations such as Dementia Friends
      and Social Care Institute for Excellence
      </li>
      </ul>
      </section>

      {/* Getting started */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Getting started with digital tools</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you are not confident with technology, help is available. You can:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      Visit the{" "}
      <Link
      to="/dementia/hub"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Hornbeam Dementia Hub
      </Link>{" "}
      for one-to-one support with setting up and using devices
      </li>
      <li>Ask your dementia adviser for recommendations tailored to your needs</li>
      <li>Attend a digital skills workshop at your local library</li>
      </ul>
      </section>

      {/* Contact */}
      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Need help?</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If you would like help finding the right digital tools or accessing online
      support, contact our Adult Social Care team.
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