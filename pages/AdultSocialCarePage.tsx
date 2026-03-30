import { ArrowRight } from 'lucide-react';

export default function AdultSocialCarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* White Background Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Page Title and Description */}
          <h1 className="text-5xl font-bold text-[#00635C] mb-4">Adult Social Care</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Find information and advice about adult social care, request support, report a concern, and discover services 
            available to you or someone you care for in Waltham Forest.
          </p>

          {/* Three Hero Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b" target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-4 border-gray-300">
              <img 
                src="https://images.unsplash.com/photo-1773227059228-6ed1a6349aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGhvbWUlMjBhc3Nlc3NtZW50JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3NDYxMjUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Get a care assessment"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4">
                <p className="text-gray-900 font-bold text-lg text-center">Get a care assessment</p>
              </div>
            </a>

            <a 
              href="https://action-spider-46698300.figma.site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-4 border-gray-300"
            >
              <img 
                src="/Images/placeholder.svg"
                alt="Report abuse or neglect of an adult"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4">
                <p className="text-gray-900 font-bold text-lg text-center">Report abuse or neglect of an adult</p>
              </div>
            </a>

            <a href="https://www.gov.uk/apply-blue-badge" target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-4 border-gray-300">
              <img 
                src="https://images.unsplash.com/photo-1643930825419-65248a51a66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhYmxlZCUyMHBlcnNvbiUyMGNhciUyMGJsdWUlMjBiYWRnZXxlbnwxfHx8fDE3NzQ2MTIyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Apply for a blue badge"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4">
                <p className="text-gray-900 font-bold text-lg text-center">Apply for a blue badge</p>
              </div>
            </a>
          </div>

          {/* Two Pink Bordered Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="#/adult-social-care/being-carer" className="border-2 border-[#D61F69] bg-white p-6 pr-20 hover:shadow-md transition-shadow relative block">
              <h2 className="text-xl font-bold text-[#D61F69] mb-3 pr-4">Support for carers</h2>
              <p className="text-gray-700 pr-4">
                If you look after a family member, partner or friend, find out about carer's assessments, respite, financial help and local support.
              </p>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center flex-shrink-0">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            <a href="#/adult-social-care/information-for-professionals" className="border-2 border-[#D61F69] bg-white p-6 pr-20 hover:shadow-md transition-shadow relative block">
              <h2 className="text-xl font-bold text-[#D61F69] mb-3 pr-4">Information for care professionals</h2>
              <p className="text-gray-700 pr-4">
                Access referral tools, professional guidance, invoicing, details, and contact information for our brokerage and commissioning teams.
              </p>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center flex-shrink-0">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Grey Background Section */}
      <div className="bg-gray-200 pt-12">
        <div className="max-w-7xl mx-auto px-6 pb-12">
          {/* Topics in this section */}
          <h2 className="text-3xl font-bold text-[#D61F69] mb-8">Topics in this section</h2>

          {/* 9 Topic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* How adult social care works */}
            <a href="#/adult-social-care/how-adult-social-care-works" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">How adult social care works</h3>
              <p className="text-gray-700 text-sm pr-12">Find out what adult social care is, who it is for, how to get help, and what you may need to pay.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* How to get support */}
            <a href="#/adult-social-care/how-to-get-support" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">How to get support</h3>
              <p className="text-gray-700 text-sm pr-12">Find out how to apply for adult social care support, from making first contact through to getting a care and support plan.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Live independently at home */}
            <a href="#/adult-social-care/live-independently-at-home" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Live independently at home</h3>
              <p className="text-gray-700 text-sm pr-12">Get equipment and assistive technology, home adaptations, falls prevention, telecare and help at home.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Care homes and supported living */}
            <a href="#/adult-social-care/care-homes-and-supported-living" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Care homes and supported living</h3>
              <p className="text-gray-700 text-sm pr-12">Find out about options if you need more support, including supported living, Shared Lives and care homes.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Paying for your care */}
            <a href="#/adult-social-care/paying-for-care" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Paying for your care</h3>
              <p className="text-gray-700 text-sm pr-12">Find out how care is paid for, what you may need to contribute, and how financial assessments work, personal budgets and direct payments work or pay your care invoice.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Report abuse or neglect */}
            <a href="#/adult-social-care/protecting-adults-at-risk" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Report abuse or neglect</h3>
              <p className="text-gray-700 text-sm pr-12">Report concerns about an adult at risk of abuse or neglect and find out what happens next.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Mental health and wellbeing */}
            <a href="#/adult-social-care/mental-health-wellbeing" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Mental health and wellbeing</h3>
              <p className="text-gray-700 text-sm pr-12">Get mental health help, find local support for low mood or anxiety, and see how we work with the NHS.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Dementia, Disabilities and specialist support */}
            <a href="#/adult-social-care/specialist-services" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Dementia, Disabilities and specialist support</h3>
              <p className="text-gray-700 text-sm pr-12">Support for adults with physical disabilities, sight or hearing loss, learning disabilities, autism, dementia and other long-term health conditions.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

            {/* Travel and transport */}
            <a href="#/adult-social-care/travel-and-transport" className="bg-white border border-gray-200 shadow-sm p-6 pb-20 hover:shadow-md transition-shadow relative block">
              <h3 className="text-lg font-bold text-[#D61F69] mb-2 pr-12">Travel and transport</h3>
              <p className="text-gray-700 text-sm pr-12">Find help with travel, including Blue Badge, Freedom Pass and community transport.</p>
              <div className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center">
                <ArrowRight className="text-white" size={20} />
              </div>
            </a>

          </div>

          {/* Three Bottom Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="#/adult-social-care/understand-your-rights"
              className="bg-[#C52A7A] text-white py-6 px-6 text-lg font-normal hover:bg-[#b51858] transition-colors text-center block"
            >
              Understand your rights
            </a>
            <a 
              href="#/adult-social-care/our-policies"
              className="bg-[#C52A7A] text-white py-6 px-6 text-lg font-normal hover:bg-[#b51858] transition-colors text-center block"
            >
              Our policies
            </a>
            <a 
              href="#/adult-social-care/complaints-compliments"
              className="bg-[#C52A7A] text-white py-6 px-6 text-lg font-normal hover:bg-[#b51858] transition-colors text-center block"
            >
              Complaints, compliments and help shape our future services
            </a>
          </div>

        </div>
      </div>

      {/* Green Feedback Banner */}
      <div className="bg-[#8DC640] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-gray-900">
            We are improving our website and value your feedback to better meet your needs
          </p>
          <button className="flex items-center gap-2 text-gray-900 hover:underline">
            <span className="w-6 h-6 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            Hide
          </button>
        </div>
      </div>

      {/* Dark Teal Feedback Section */}
      <div className="bg-[#00635C] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Feedback</h2>
          <p className="text-white text-lg max-w-4xl">
            <strong>Send feedback directly to the content team using our website feedback form You can also join our user research group to receive invites to activities and surveys to help shape future improvements to the site .</strong>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Logo and Popular Tasks */}
            <div>
              <div className="mb-6">
                <svg className="w-24 h-24" viewBox="0 0 100 100" fill="white">
                  <circle cx="50" cy="30" r="20" />
                  <path d="M30 50 Q50 70 70 50" stroke="white" strokeWidth="4" fill="none" />
                  <rect x="25" y="55" width="10" height="30" />
                  <rect x="45" y="55" width="10" height="30" />
                  <rect x="65" y="55" width="10" height="30" />
                </svg>
                <p className="font-bold mt-2">Waltham Forest</p>
              </div>
              <h3 className="font-bold text-lg mb-4">Popular tasks</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Apply for a school place</a></li>
                <li><a href="#" className="hover:underline">Check your bin day</a></li>
                <li><a href="#" className="hover:underline">Get a parking permit</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Contact us</a></li>
                <li><a href="#" className="hover:underline">Make a complaint or compliment</a></li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a href="#" className="hover:opacity-80">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="18" cy="6" r="1.5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Accessibility */}
            <div>
              <p className="text-sm mb-4">
                We make a commitment to making our website accessible to all visitors .
              </p>
              <a href="#" className="underline font-bold">Read our accessibility statement</a>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-6 flex flex-wrap justify-between items-center text-sm">
            <p>© London Borough of Waltham Forest, 2025</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">Privacy policy</a>
              <a href="#" className="hover:underline">Cookies policy</a>
              <a href="#" className="hover:underline">Disclaimer</a>
              <a href="#" className="hover:underline text-gray-400">Press office</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}