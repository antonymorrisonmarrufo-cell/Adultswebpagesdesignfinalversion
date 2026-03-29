import { Link } from "react-router-dom";

export default function YoungCarersHub() {
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
          <li><Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">Carers Hub</Link></li>
          <li><span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span></li>
          <li><span className="font-medium text-wf-dark">Young carers hub</span></li>
          </ol>
          </nav>
          <h1 className="text-5xl font-bold text-[#231F20]">Young carers hub</h1>
          <p className="mt-4 text-lg text-wf-gray max-w-3xl">
          A dedicated space for young carers in Waltham Forest. A place where you can have fun, make friends,
          get support, and just be yourself.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* What we offer */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">What the young carers hub offers</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          The young carers hub is a safe and fun space for children and young people who care for someone
          in their family. Here you can:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Meet other young carers</strong> - make friends with people who understand what it is like</li>
          <li><strong>Join fun activities</strong> - sports, arts, games, cooking, and trips out</li>
          <li><strong>Talk to someone</strong> - trusted workers who are there to listen and help</li>
          <li><strong>Get help with school</strong> - homework support and advocacy with your school</li>
          <li><strong>Learn new skills</strong> - workshops and training designed for young people</li>
          <li><strong>Have time for yourself</strong> - a break from caring to do things you enjoy</li>
          </ul>
          </section>

          {/* Regular sessions */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">Regular sessions</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          We run regular sessions for different age groups:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li><strong>Junior group (8-12)</strong> - after-school sessions with age-appropriate activities</li>
          <li><strong>Senior group (13-17)</strong> - evening sessions with activities chosen by the group</li>
          <li><strong>Holiday programme</strong> - full-day activities during school holidays, including day trips</li>
          <li><strong>Young adult carers (16-25)</strong> - sessions for older young carers transitioning to adulthood</li>
          </ul>
          </section>

          {/* How to join */}
          <section className="mb-8 rounded-md bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#bf3688]">How to join</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          If you are a young carer, or you know a young person who cares for someone, you can join the
          young carers hub by:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-2 text-wf-dark leading-relaxed">
          <li>Calling us on <a href="tel:02084963130" className="text-wf-blue underline hover:text-wf-green">020 8496 3130</a></li>
          <li>Asking a teacher, school nurse, or GP to refer you</li>
          <li>Visiting the Carers Hub with a parent or guardian</li>
          <li>Asking a social worker to make a referral</li>
          </ul>
          <p className="mt-3 text-wf-dark leading-relaxed">
          All activities are free. We can help with transport if you need it.
          </p>
          </section>

          {/* Young carers rights */}
          <section className="mb-8 rounded-md bg-white p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Your rights as a young carer</h2>
          <p className="mt-3 text-wf-dark leading-relaxed">
          As a young carer, you have the right to a young carers assessment. This looks at how caring affects
          your life, your education, and your wellbeing. It can lead to support for you and your family to
          make sure you are not doing more than is appropriate for your age.
          </p>
          </section>

          {/* Related links */}
          <section className="mb-8 p-6">
          <h2 className="text-2xl font-bold text-[#bf3688]">Related links</h2>
          <ul className="mt-4 space-y-3">
          <li>
          <Link to="/carers/carers-hub" className="text-wf-blue underline hover:text-wf-green">
          Carers Hub
          </Link>
          </li>
          <li>
          <Link to="/carers/young-carers" className="text-wf-blue underline hover:text-wf-green">
          Young carers
          </Link>
          </li>
          <li>
          <a href="https://www.childrenssociety.org.uk/what-we-do/our-work/supporting-young-carers" className="text-wf-blue underline hover:text-wf-green" target="_blank" rel="noopener noreferrer">
          The Children's Society - young carers
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
