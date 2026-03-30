import { Phone, FileText, ExternalLink, Mail } from 'lucide-react';

export default function SafeguardingPoliciesReportsPage() {
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
          <span>Safeguarding policies and reports</span>
        </nav>

        {/* H1 */}
        <h1 className="text-5xl font-bold text-[#00635C] mb-4">
          Safeguarding policies and reports
        </h1>

        {/* Standfirst */}
        <p className="text-lg text-gray-700 mb-8">
          How the council works with the NHS, police, and other partners to protect adults at risk of abuse or neglect.
        </p>

        {/* Safeguarding Adults Board */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Safeguarding Adults Board</h2>
          <p className="text-gray-700 mb-4">
            The Care Act 2014 requires every local authority to set up a Safeguarding Adults Board (SAB). The board brings together the council, the NHS, the police, and other organisations to protect adults who have care and support needs and may be at risk.
          </p>
          <p className="text-gray-700 mb-4">
            The Waltham Forest SAB works to ensure that partner organisations are working together effectively to prevent abuse and neglect and to respond when concerns are raised.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-4 flex items-center gap-3">
            <Mail size={20} className="text-[#D61F69] flex-shrink-0" />
            <div>
              <p className="text-gray-700">
                <strong>For more information, contact:</strong><br />
                <a href="mailto:strategicpartnerships@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">
                  strategicpartnerships@walthamforest.gov.uk
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Safeguarding Adults Board Annual Report */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Safeguarding Adults Board Annual Report</h2>
          <p className="text-gray-700 mb-4">
            The annual report sets out the work of the SAB over the past year, including achievements, challenges, and priorities for the year ahead.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-1" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Safeguarding Adults Board Annual Report 2024/25</p>
                <p className="text-sm text-gray-700 mb-2">PDF document</p>
                <p className="text-sm text-gray-600 italic">
                  Document available on request. Contact strategicpartnerships@walthamforest.gov.uk
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Previous annual reports are available on request from{' '}
            <a href="mailto:strategicpartnerships@walthamforest.gov.uk" className="text-[#D61F69] hover:underline">
              strategicpartnerships@walthamforest.gov.uk
            </a>.
          </p>
        </section>

        {/* Safeguarding Partnership Arrangements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Safeguarding Partnership Arrangements</h2>
          <p className="text-gray-700 mb-4">
            This document provides an overview of how safeguarding is organised across Waltham Forest, covering both adults and children, in line with statutory requirements.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-4">
            <div className="flex items-start gap-3">
              <FileText size={20} className="text-[#D61F69] mt-1" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Safeguarding Partnership Arrangements</p>
                <p className="text-sm text-gray-700 mb-2">PDF document</p>
                <p className="text-sm text-gray-600 italic">
                  Document available on request. Contact strategicpartnerships@walthamforest.gov.uk
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* London Multi-Agency Adult Safeguarding Policy and Procedures */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">London Multi-Agency Adult Safeguarding Policy and Procedures</h2>
          <p className="text-gray-700 mb-4">
            Waltham Forest follows the London-wide multi-agency safeguarding policy and procedures. These guide professionals on how to respond to safeguarding concerns, carry out enquiries, and work together to protect adults at risk.
          </p>
          <a 
            href="https://londonadass.org.uk/safeguarding/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D61F69] hover:underline font-semibold"
          >
            London Multi-Agency Adult Safeguarding Policy and Procedures
            <ExternalLink size={16} />
          </a>
        </section>

        {/* Reporting a concern */}
        <section className="mb-12 bg-[#FFF4E6] border-l-4 border-[#D61F69] p-6">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Reporting a concern</h2>
          <p className="text-gray-700 mb-4">
            If you are worried about a vulnerable adult, you do not need to read a policy first. You can report a concern at any time.
          </p>
          <div className="flex items-center gap-3 text-gray-900 mb-3">
            <Phone size={20} className="text-[#D61F69]" />
            <span className="font-bold">Phone: 020 8496 3130</span>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Online:</strong> Use our{' '}
            <a 
              href="https://action-spider-46698300.figma.site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D61F69] underline hover:no-underline"
            >
              safeguarding referral form
            </a>
          </p>
          <p className="text-gray-700">
            See our <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#D61F69] underline hover:no-underline">keeping adults safe page</a> for more information.
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#D61F69] mb-4">Related pages</h2>
          <ul className="space-y-2">
            <li>
              <a href="#/adult-social-care/protecting-adults-at-risk" className="text-[#D61F69] hover:underline">
                Keeping adults safe
              </a>
            </li>
            <li>
              <a href="#/adult-social-care/report-abuse-or-neglect" className="text-[#D61F69] hover:underline">
                How to report adult safeguarding concerns
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
