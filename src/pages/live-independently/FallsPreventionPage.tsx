import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function FallsPreventionPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/adult-social-care">Adult Social Care</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/live-independently">Live independently</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Falls prevention</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page heading */}
      <h1 className="text-5xl font-bold text-wf-green">Falls prevention</h1>

      <p className="mt-4 text-lg leading-relaxed text-wf-gray">
        Falls are one of the most common causes of injury among older people, but
        many falls can be prevented. Find out about the risk factors, what you can
        do to stay safe and the support available in Waltham Forest.
      </p>

      {/* Risk factors */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-wf-pink">
          Risk factors for falling
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          There are many reasons why someone might fall. Common risk factors
          include:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Muscle weakness and poor balance</li>
          <li>Vision problems</li>
          <li>Side effects from medication</li>
          <li>Hazards around the home such as loose rugs, poor lighting or cluttered floors</li>
          <li>Dizziness or low blood pressure</li>
          <li>Conditions affecting mobility such as arthritis or Parkinson&apos;s disease</li>
          <li>Fear of falling, which can lead to reduced activity and further loss of strength</li>
        </ul>
      </section>

      {/* Staying active */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-wf-pink">Staying active</h2>
        <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Regular physical activity is one of the best ways to prevent falls.
          Exercises that improve strength, balance and flexibility can
          significantly reduce your risk. Even gentle activities such as walking,
          tai chi or chair-based exercises can make a difference.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Waltham Forest offers a range of exercise classes and programmes
          specifically designed for older people. Ask your GP or contact our
          social prescribing team for details.
        </p>
      </section>

      {/* Home safety checks */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-wf-pink">Home safety checks</h2>
        <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Simple changes around your home can help prevent falls. Consider the
          following:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Remove loose rugs and secure any trailing wires</li>
          <li>Make sure all rooms, stairs and landings are well lit</li>
          <li>Fit grab rails in the bathroom and by the front door</li>
          <li>Keep frequently used items within easy reach</li>
          <li>Wear well-fitting shoes with non-slip soles</li>
          <li>Make sure the path to the bathroom at night is clear and well lit</li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          You can request a free home safety check from our occupational therapy
          team, who will visit your home and recommend any changes needed.
        </p>
      </section>

      {/* Strength and balance classes */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-wf-pink">
          Strength and balance classes
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Waltham Forest runs free strength and balance classes at community
          centres and leisure facilities across the borough. These classes are
          led by trained instructors and are suitable for people of all fitness
          levels. You can be referred by your GP or self-refer.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Classes typically run for 12 weeks and focus on improving lower body
          strength, balance and coordination. Many people find they can continue
          exercising independently after completing the programme.
        </p>
      </section>

      {/* CTA block */}
      <section className="mt-8 rounded-lg bg-wf-green-light p-6">
        <h2 className="text-xl font-bold text-wf-pink">
          Worried about falls?
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          If you or someone you care for has had a fall or is worried about
          falling, contact our team for advice and support.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/live-independently/request-home-assessment"
            className="inline-block rounded-md bg-wf-green px-5 py-2.5 text-center text-sm font-semibold text-white no-underline hover:bg-wf-green/90"
          >
            Request a home assessment
          </Link>
          <a
            href="tel:02084963130"
            className="inline-block rounded-md border border-wf-green px-5 py-2.5 text-center text-sm font-semibold text-wf-green no-underline hover:bg-wf-green-light"
          >
            Call 020 8496 3130
          </a>
        </div>
      </section>

      {/* Related links */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-wf-pink">Related links</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          <li>
            <Link to="/live-independently/home-adaptations">
              Home adaptations
            </Link>
          </li>
          <li>
            <Link to="/live-independently/equipment-and-aids">
              Equipment and aids
            </Link>
          </li>
          <li>
            <Link to="/live-independently/telecare">Telecare</Link>
          </li>
          <li>
            <Link to="/live-independently/social-prescribing">
              Social prescribing
            </Link>
          </li>
        </ul>
      </div>

      {/* Last updated */}
      <p className="mt-10 text-xs text-wf-gray">Last updated: March 2026</p>
    </div>
  );
}
