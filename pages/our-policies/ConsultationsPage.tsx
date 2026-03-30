import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ConsultationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <a href="#/adult-social-care" className="hover:underline">Home</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care" className="hover:underline">Adult social care</a>
          <span className="mx-1">&gt;</span>
          <a href="#/adult-social-care/our-policies" className="hover:underline">Our policies</a>
          <span className="mx-1">&gt;</span>
          <span>Consultations</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Consultations
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          Current and recent consultations about changes to adult social care services and charging policies.
        </p>

        {/* Current consultations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-6">Current consultations</h2>
          
          {/* Consultation Card */}
          <div className="bg-white border-2 border-[#D61F69] p-6 mb-6">
            <h3 className="text-xl font-bold text-[#D61F69] mb-4">
              Adult Social Care Charging Policy Consultation
            </h3>
            <p className="text-gray-700 mb-4">
              The council is consulting on a proposal to change the way it calculates how much people pay towards their care and support at home and in the community.
            </p>
            <p className="text-gray-700 mb-4">
              The consultation relates to the <strong>Minimum Income Guarantee (MIG) top-up</strong> — an additional amount above the statutory minimum that residents are currently allowed to keep before being asked to contribute towards care costs. The council is proposing to reduce this top-up over two years, from 25% to 10% and then to 0%, bringing Waltham Forest in line with many other councils.
            </p>
            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
              <h4 className="font-bold text-gray-900 mb-2">Who this affects</h4>
              <p className="text-gray-700 mb-2">
                This change could affect approximately <strong>2,500 residents</strong> who receive community care and support. Of those, around 1,400 currently pay nothing towards their care.
              </p>
              <p className="text-gray-700">
                If the top-up is reduced, around <strong>350 of those residents</strong> may begin contributing a small amount.
              </p>
            </div>
            <a 
              href="https://talk.walthamforest.gov.uk/charging-policy-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D61F69] text-white px-8 py-3 text-sm font-semibold hover:bg-[#B51A5A] transition-colors"
            >
              Have your say on the charging policy consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Previous consultations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Previous consultations</h2>
          <p className="text-gray-700 mb-6">
            When consultations close, the council publishes the outcome and explains what decisions were made. Check the council's main consultations page for a full list of current and previous consultations across all council services.
          </p>
          <a 
            href="https://talk.walthamforest.gov.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D61F69] hover:underline font-semibold"
          >
            View all council consultations
            <ExternalLink size={16} />
          </a>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/our-policies/charging-and-financial-policies" className="text-[#D61F69] hover:underline">
                Charging and financial policies
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/paying-for-care" className="text-[#D61F69] hover:underline">
                Paying for your care
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/complaints-compliments/help-shape-our-services" className="text-[#D61F69] hover:underline">
                Help shape our services
              </a>
            </li>
          </ul>
        </section>

        {/* Last updated */}
        <div className="text-sm text-gray-600 border-t border-gray-200 pt-6">
          <p>Last updated: 29 March 2026</p>
          <p>Next review: 29 March 2027</p>
        </div>

      </div>
    </div>
  );
}
