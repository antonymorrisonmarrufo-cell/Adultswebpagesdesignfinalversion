import { ArrowRight } from 'lucide-react';
import FeedbackBanner from '../components/FeedbackBanner';
import FeedbackSection from '../components/FeedbackSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const featuredCards = [
  {
    title: 'Get help with dementia',
    description: 'Guidance for anyone worried about memory, anyone with a dementia diagnosis, and family or friends who help.',
    additionalText: 'Find out what to do, who to contact and how we can help.',
    link: 'Learn more',
    href: '#/adult-social-care/specialist-services/dementia/get-help',
    imageUrl: 'https://images.unsplash.com/photo-1738454738501-7e6626ccfcd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcGVyc29uJTIwc3VwcG9ydCUyMGRlbWVudGlhJTIwY2FyZXxlbnwxfHx8fDE3NzQ2MDcxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Waltham Forest Dementia Hub',
    description: 'The Dementia Hub is based in Leyton. It is a focal point for dementia support within the borough.',
    additionalText: 'The hub provides a variety of activities and information from different organisations.',
    link: 'Learn more',
    href: '#/adult-social-care/specialist-services/dementia/hub',
    imageUrl: 'https://images.unsplash.com/photo-1751977979590-3554dd691c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBncm91cCUyMG1lZXRpbmclMjBlbGRlcmx5JTIwcGVvcGxlfGVufDF8fHx8MTc3NDYwNzEyMHww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const topicsInSection = [
  {
    title: 'NHS Memory Service (assessment and diagnosis )',
    description: 'Specialist assessment via your GP.',
    href: '#/adult-social-care/specialist-services/dementia/memory-service'
  },
  {
    title: 'Activities and day support',
    description: 'Cognitive stimulation, Ageing Well sessions, day centres and more.',
    href: '#/adult-social-care/specialist-services/dementia/activities'
  },
  {
    title: 'Dementia Adviser (Alzheimer\'s Society)',
    description: 'One- to- one guidance after diagnosis and when things change.',
    href: '#/adult-social-care/specialist-services/dementia/adviser'
  },
  {
    title: 'Intensive Dementia Outreach Service (IDOS)',
    description: 'Group sessions and home- visiting support; eligibility and referrals.',
    href: '#/adult-social-care/specialist-services/dementia/idos'
  },
  {
    title: 'Help for carers of people with dementia',
    description: 'Local help from Carers First and our carers section.',
    href: '#/adult-social-care/specialist-services/dementia/carers'
  },
  {
    title: 'Planning ahead and end of life care',
    description: 'Plan ahead for your care and decisions.',
    href: '#/adult-social-care/specialist-services/dementia/planning-ahead'
  }
];

const relatedInfo = [
  { title: 'Request an assessment', href: 'https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b' },
  { title: 'Support for carers', href: '#/adult-social-care/support-for-carers' },
  { title: 'Travel and transport', href: '#/adult-social-care/travel-and-transport' }
];

export default function DementiaSupportPage() {
  return (
    <>
      <section className="bg-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <a href="#" className="hover:underline">Home</a> &gt; 
            <a href="#/adult-social-care" className="hover:underline"> Adult social care</a> &gt; 
            <a href="#/adult-social-care/specialist-services" className="hover:underline"> Dementia, disabilities and specialist support</a> &gt; 
            <span> Dementia support</span>
          </nav>

          <h1 className="text-5xl text-[#00635C] mb-6 font-bold leading-tight">Dementia support</h1>
          
          <p className="text-gray-700 max-w-4xl mb-12 text-base">
            Get help if you're worried about memory, have a diagnosis, or support someone with dementia. Find local services, step- by- steps, activities and who to contact .
          </p>

          {/* Featured Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {featuredCards.map((card, index) => (
              <div key={index} className="border-2 border-[#D61F69] bg-white p-6 flex flex-col shadow-sm">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1 pr-12">
                    <h3 className="text-[#D61F69] mb-3 font-bold">{card.title}</h3>
                    <p className="text-gray-700 text-sm mb-2">{card.description}</p>
                    <p className="text-gray-700 text-sm mb-4">{card.additionalText}</p>
                    <a href={card.href} className="text-[#D61F69] text-sm font-semibold hover:underline">
                      {card.link}
                    </a>
                  </div>
                  <div className="lg:w-48 flex-shrink-0">
                    <ImageWithFallback 
                      src={card.imageUrl} 
                      alt={card.title}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Topics in this section */}
          <h2 className="text-[#D61F69] mb-8 font-bold">Topics in this section</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {topicsInSection.map((topic, index) => (
              <a 
                key={index}
                href={topic.href}
                className="bg-white border border-gray-200 p-6 pb-20 hover:shadow-md transition-shadow flex flex-col justify-between relative"
              >
                <div className="pr-12">
                  <h3 className="text-[#D61F69] mb-3 font-bold text-base">{topic.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{topic.description}</p>
                </div>
                <div className="absolute right-6 bottom-6">
                  <div className="w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center text-white hover:bg-[#B51A5A] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Related information */}
          <h2 className="text-[#D61F69] mb-8 font-bold">Related information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="bg-[#D61F69] text-white p-6 flex items-center justify-between hover:bg-[#B51A5A] transition-colors group relative pr-20"
              >
                <span className="pr-4 font-semibold">{info.title}</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D61F69] flex-shrink-0 absolute right-6">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <FeedbackBanner />
      <FeedbackSection />
    </>
  );
}