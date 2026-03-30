import { ArrowRight } from 'lucide-react';

interface Topic {
  title: string;
  description: string;
  href: string;
}

const topics: Topic[] = [
  {
    title: 'Dementia support',
    description: 'Understand symptoms, who can help, and how to get an assessment and ongoing support.',
    href: '#/adult-social-care/specialist-services/dementia-support'
  },
  {
    title: 'Learning disabilities support',
    description: 'Get help from adult social care and NHS partners if you have a learning disability.',
    href: '#/adult-social-care/learning-disability-support'
  },
  {
    title: 'Adults with autism',
    description: 'Find out how to get an adult autism assessment and where to get support.',
    href: '#/adult-social-care/specialist-services/autism-support'
  },
  {
    title: 'Visual and Hearing impairments',
    description: 'Support if you have a visual or hearing impairment.',
    href: '#/adult-social-care/specialist-services/visual-and-hearing-impairments'
  },
  {
    title: 'Physical disabilities',
    description: 'Get practical help to live independently and safely at home.',
    href: '#/adult-social-care/specialist-services/physical-disabilities'
  },
  {
    title: 'Long- term conditions',
    description: 'Help to manage ongoing health conditions and stay independent*.',
    href: '#/adult-social-care/specialist-services/long-term-conditions'
  },
  {
    title: 'Work and disability',
    description: 'Know your rights at work, and where to get support to start, stay and succeed in work.',
    href: '#/adult-social-care/work-and-disability'
  },
  {
    title: 'Power of attorney, deputyship and appointeeship',
    description: 'Plan ahead or get the right legal authority if someone can\'t manage certain decisions.',
    href: '#/adult-social-care/specialist-services/power-attorney-deputyship-and-appointeeship'
  }
];

export default function TopicsSection() {
  return (
    <section className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#D61F69] mb-8 font-bold">Topics in this section</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <a key={index} href={topic.href} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow block relative pr-16">
              <h3 className="text-[#D61F69] mb-3 font-semibold pr-12">{topic.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed pr-12">{topic.description}</p>
              <div className="absolute right-6 bottom-6">
                <div className="w-10 h-10 rounded-full bg-[#D61F69] flex items-center justify-center text-white hover:bg-[#B51A5A] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}