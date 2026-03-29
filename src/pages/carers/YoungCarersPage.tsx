import { Link } from "react-router-dom";

export default function YoungCarersPage() {
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
          <li><Link to="/carers" className="text-wf-blue underline hover:text-wf-green">Being a carer</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Young carers</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Young carers</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          A young carer is someone under 18 who helps look after a family member who is ill, disabled,
          has a mental health condition, or misuses drugs or alcohol. If you are a young carer, or know one,
          there is support available.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* What is a young carer */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What is a young carer?</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Young carers are children and young people who take on caring responsibilities that would normally
          be expected of an adult. This might include:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Helping with personal care such as washing or dressing</li>
          <li>Cooking, cleaning, or doing household chores</li>
          <li>Looking after younger siblings</li>
          <li>Providing emotional support to a parent or family member</li>
          <li>Helping to manage medications</li>
          <li>Interpreting or communicating on behalf of a family member</li>
          </ul>
          </section>

          {/* Support available */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Support available for young carers</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Young carers in Waltham Forest can access a range of support, including:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Young carers assessment</strong> - an assessment to understand your needs and what support would help</li>
          <li><strong>One-to-one support</strong> - a dedicated worker to talk to and get advice from</li>
          <li><strong>Young carers groups</strong> - regular groups where you can meet other young carers, have fun, and get peer support</li>
          <li><strong>Holiday activities</strong> - trips, outings, and activities during school holidays</li>
          <li><strong>Help with school</strong> - support to make sure your caring role does not affect your education</li>
          <li><strong>Emotional support</strong> - someone to talk to about how you are feeling</li>
          </ul>
          </section>

          {/* School support */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Support at school</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          Being a young carer should not hold you back at school. Many schools in Waltham Forest have a
          designated young carers lead who can help by:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Making sure teachers understand your situation</li>
          <li>Being flexible with homework deadlines when needed</li>
          <li>Providing a quiet space at school if you need time out</li>
          <li>Helping you catch up with work you have missed</li>
          <li>Linking you with other young carers in the school</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If your school does not have a young carers lead, we can work with them to improve their support.
          </p>
          </section>

          {/* Activities */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Activities and social opportunities</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          We run regular activities for young carers to have time away from their caring responsibilities
          and just be a young person. These include sports, arts and crafts, days out, residential trips,
          and social events. Activities are free and transport can often be arranged.
          </p>
          </section>

          {/* Get help */}
          <section className="mb-8 rounded-md border-l-4 border-[#003078] bg-[#d7f8ff] p-6">
          <h2 className="text-2xl font-bold text-[#003078]">Get help as a young carer</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you are a young carer, or you know a young person who is caring for someone, please get in touch.
          You can contact our team on{" "}
          <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a>,
          or speak to a teacher, school nurse, or GP who can refer you to our young carers service.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/carers" className="text-wf-blue underline hover:text-wf-green">
          Being a carer
          </Link>
          </li>
          <li>
          <Link to="/carers/hubs/young-carers" className="text-wf-blue underline hover:text-wf-green">
          Young carers hub
          </Link>
          </li>
          <li>
          <a href="https://www.childrenssociety.org.uk/what-we-do/our-work/supporting-young-carers" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          The Children's Society - young carers
          </a>
          </li>
          <li>
          <a href="https://www.carersuk.org/help-and-advice/your-situation/young-carers" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          Carers UK - young carers
          </a>
          </li>
          </ul>
          </section>

          {/* Last updated */}
          <p className="text-sm text-wf-gray">Last updated: March 2026</p>
        </div>
      </div>
    </div>
  );
}
