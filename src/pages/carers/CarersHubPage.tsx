import { ArrowRight } from 'lucide-react';
import Chip from '../../components/carers/Chip';

const carerTypes = [
  {
    title: 'Young Carers (0–18)',
    description: 'Support for children and teenagers who care for someone at home.',
    href: '#/carers/young-carers',
    tag: 'YC'
  },
  {
    title: 'Parent Carers',
    description: 'Help for parents and guardians caring for disabled children.',
    href: '#/carers/parent-carers',
    tag: 'PC'
  },
  {
    title: 'Adult Carers (18+)',
    description: 'Support for adults caring for family, friends or neighbours.',
    href: '#/carers/adult-carers',
    tag: 'AC'
  },
  {
    title: 'Universal Offer',
    description: 'Advice and support for all carers, including former carers.',
    href: '#/carers/universal-offer',
    tag: 'UO'
  }
];

const taskPages = [
  { title: 'Get a carer\'s assessment', href: '#/carers/assessment', tags: ['YC', 'PC', 'AC'] },
  { title: 'Money & benefits', href: '#/carers/money-benefits', tags: ['PC', 'AC'] },
  { title: 'Breaks & respite', href: '#/carers/breaks-respite', tags: ['YC', 'PC', 'AC'] },
  { title: 'Health & wellbeing', href: '#/carers/health-wellbeing', tags: ['AC', 'UO'] },
  { title: 'Work/study & rights', href: '#/carers/work-rights', tags: ['AC', 'UO'] },
  { title: 'Emergency help', href: '#/carers/emergency-help', tags: ['YC', 'PC', 'AC'] },
  { title: 'Useful contacts', href: '#/carers/contacts', tags: ['YC', 'PC', 'AC', 'UO'] },
  { title: 'After caring', href: '#/carers/after-caring', tags: ['UO'] }
];

export default function CarersHubPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#FFF0F7] to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-[#bf3688] mb-6">Support for carers</h1>
          <p className="text-gray-700 max-w-4xl text-lg mb-8">
            Get help, advice and support if you care for someone. Whether you're a young carer, parent carer, or caring for an adult, we're here to help you live well alongside caring.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#/carers/assessment" className="bg-[#bf3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors">
              Get a carer&apos;s assessment
            </a>
            <a href="#/carers/emergency-help" className="bg-white border-2 border-[#bf3688] text-[#bf3688] px-6 py-3 rounded-lg hover:bg-[#FFF0F7] transition-colors">
              Emergency help
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[#bf3688] mb-8">Find support by carer type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {carerTypes.map((type, index) => (
              <a key={index} href={type.href} className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-[#bf3688] hover:shadow-lg transition-all group">
                <div className="mb-3">
                  <Chip variant="tag" size="sm">{type.tag}</Chip>
                </div>
                <h3 className="text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{type.description}</p>
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-[#bf3688] flex items-center justify-center text-white group-hover:bg-[#bf3688] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <h2 className="text-[#bf3688] mb-8">Find support by task</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taskPages.map((task, index) => (
              <a key={index} href={task.href} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow group">
                <div className="flex flex-wrap gap-2 mb-3">
                  {task.tags.map((tag, idx) => (
                    <Chip key={idx} variant="tag" size="sm">{tag}</Chip>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-900">{task.title}</h3>
                  <ArrowRight className="w-5 h-5 text-[#bf3688] group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}