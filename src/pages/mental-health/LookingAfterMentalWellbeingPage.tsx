import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Mental health and wellbeing", to: "/mental-health" },
  { title: "Talking therapies and professional support", to: "/mental-health/talking-therapies-professional-support" },
  { title: "Local mental health support services", to: "/mental-health/local-support-services" },
];

export default function LookingAfterMentalWellbeingPage() {
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
      <Link to="/mental-health" className="text-wf-blue underline hover:text-wf-green">Mental health and wellbeing</Link>
      <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
      </li>
      <li>
      <span className="font-medium text-wf-dark">Looking after your mental wellbeing</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-wf-green leading-tight">
      Looking after your mental wellbeing
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
      There are many things you can do to look after your mental health and
      build resilience. Small changes to your daily routine can make a real
      difference to how you feel.
      </p>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Five ways to wellbeing</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Evidence shows that there are five simple steps you can take to improve
      your mental health and wellbeing:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Connect:</strong> Spend time with family, friends and neighbours.
      Talk to someone rather than sending an email or text.
      </li>
      <li>
      <strong>Be active:</strong> Go for a walk, cycle, dance or garden. Find
      an activity you enjoy that suits your level of fitness.
      </li>
      <li>
      <strong>Take notice:</strong> Be mindful of the world around you. Pay
      attention to your thoughts, feelings and the things you can see, hear
      and smell.
      </li>
      <li>
      <strong>Keep learning:</strong> Try something new, rediscover an old
      interest, sign up for a course or learn to play an instrument.
      </li>
      <li>
      <strong>Give:</strong> Do something for a friend, neighbour or stranger.
      Volunteer, join a community group or simply smile at someone.
      </li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Online resources</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      There are a number of free online resources that can help you manage your
      mental health:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      <strong>Every Mind Matters (NHS):</strong> Personalised mental health
      action plan and expert advice
      </li>
      <li>
      <strong>Mind:</strong> Information and support for a wide range of mental
      health conditions
      </li>
      <li>
      <strong>Mental Health Foundation:</strong> Guides on topics including
      stress, anxiety, sleep and loneliness
      </li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Apps and digital tools</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      The following NHS-approved apps can help support your mental wellbeing:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li><strong>Calm Harm:</strong> Helps manage the urge to self-harm</li>
      <li><strong>Catch It:</strong> Helps you notice and change your thinking patterns</li>
      <li><strong>Daylight:</strong> Guided sessions for worry and anxiety</li>
      <li><strong>Sleepio:</strong> Clinically proven programme for sleep problems</li>
      <li><strong>Silvercloud:</strong> Online cognitive behavioural therapy (CBT) programmes</li>
      </ul>
      </section>

      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Self-referral to talking therapies</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      If you are experiencing low mood, anxiety, stress or depression, you can
      refer yourself directly to the local NHS talking therapies service without
      needing to see your GP first. Visit our{" "}
      <Link
      to="/mental-health/talking-therapies-professional-support"
      className="text-wf-blue underline hover:text-wf-green"
      >
      talking therapies and professional support
      </Link>{" "}
      page for details on how to access this service.
      </p>
      </section>

      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Need more support?</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      If self-help is not enough and you need to talk to someone, contact our
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