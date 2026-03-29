import { Link } from "react-router-dom";

const relatedPages = [
  { title: "Hornbeam Dementia Hub", to: "/dementia/hub" },
  { title: "Getting help and support", to: "/dementia/get-help" },
  { title: "Support for carers", to: "/dementia/carers" },
  { title: "iDOS - online dementia resources", to: "/dementia/idos" },
];

export default function ActivitiesPage() {
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
      <span className="font-medium text-wf-dark">Activities and social groups</span>
      </li>
      </ol>
      </nav>
      <h1 className="text-5xl font-bold text-[#231F20] leading-tight">
      Activities and social groups
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
      Staying active and socially connected is important for people living with
      dementia. Waltham Forest offers a range of activities and groups designed
      to be enjoyable, stimulating and welcoming for people at all stages of
      dementia. Carers and family members are welcome to attend.
      </p>
      </section>

      {/* Singing for the Brain */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Singing for the Brain</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Singing for the Brain is a popular activity run in partnership with the
      Alzheimer's Society. Sessions use singing to bring people together in a
      fun, supportive environment. No musical experience is needed.
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Helps stimulate memory and improve mood</li>
      <li>A mixture of well-known songs, rounds and new music</li>
      <li>Open to people with dementia and their carers</li>
      <li>Sessions run weekly at the Hornbeam Dementia Hub</li>
      </ul>
      </section>

      {/* Art therapy */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Art therapy</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Art therapy sessions offer a creative way to express feelings, enjoy the
      process of making art and connect with others. Sessions are led by
      qualified art therapists and are suitable for all abilities.
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Painting, drawing, collage and mixed media</li>
      <li>No previous art experience required</li>
      <li>Small group sessions for a supportive atmosphere</li>
      <li>Materials and refreshments provided</li>
      </ul>
      </section>

      {/* Exercise classes */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Exercise classes</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Regular physical activity helps maintain mobility, improve balance and
      boost overall wellbeing. Our exercise classes are designed specifically for
      people living with dementia and are led by trained instructors.
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Chair-based exercises suitable for all fitness levels</li>
      <li>Gentle movement and dance sessions</li>
      <li>Tai chi and yoga adapted for people with dementia</li>
      <li>Walking groups in local parks</li>
      </ul>
      </section>

      {/* Lunch clubs */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">Lunch clubs</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Lunch clubs provide a friendly, social setting where people with dementia
      and their carers can enjoy a nutritious meal together. The clubs offer an
      opportunity to socialise, make friends and reduce isolation.
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>Hot two-course meals at affordable prices</li>
      <li>Entertainment and activities alongside the meal</li>
      <li>Available at several locations across the borough</li>
      <li>Transport assistance may be available for those who need it</li>
      </ul>
      </section>

      {/* How to join */}
      <section>
      <h2 className="text-2xl font-bold text-wf-pink">How to join</h2>
      <p className="mt-3 text-wf-dark leading-relaxed">
      Most activities are free or have a small charge to cover costs. You do not
      need a referral to attend. To find out about current activities, times and
      locations:
      </p>
      <ul className="mt-3 list-disc pl-6 space-y-2 text-wf-dark leading-relaxed">
      <li>
      Visit the{" "}
      <Link
      to="/dementia/hub"
      className="text-wf-blue underline hover:text-wf-green"
      >
      Hornbeam Dementia Hub
      </Link>
      </li>
      <li>
      Speak to your{" "}
      <Link
      to="/dementia/adviser"
      className="text-wf-blue underline hover:text-wf-green"
      >
      dementia adviser
      </Link>
      </li>
      <li>Call our Adult Social Care team on 020 8496 3130</li>
      </ul>
      </section>

      {/* Contact */}
      <section className="rounded-lg border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
      <h2 className="text-xl font-bold text-wf-pink">Contact us</h2>
      <p className="mt-2 text-sm text-wf-dark leading-relaxed">
      For information about activities and social groups in Waltham Forest,
      contact our Adult Social Care team.
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