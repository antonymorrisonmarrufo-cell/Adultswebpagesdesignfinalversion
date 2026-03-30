import CarersHero from '../../../components/carers/CarersHero';
import DirectoryCard from '../../../components/carers/DirectoryCard';
import Chip from '../../../components/carers/Chip';
import { useState } from 'react';
import { Phone } from 'lucide-react';

const allContacts = [
  {
    name: 'Carers First (Waltham Forest)',
    description: 'Information, advice, support groups and advocacy for all carers in the borough.',
    phone: '0300 303 1555',
    hours: 'Mon–Fri, 9am–5pm',
    website: 'https://www.carersfirst.org.uk',
    tags: ['YC', 'PC', 'AC', 'UO', 'Advice']
  },
  {
    name: 'Young Carers Project',
    description: 'Dedicated support for children and teenagers who care, including activities, mentoring and school liaison.',
    phone: '020 8509 3030',
    hours: 'Mon–Fri, 10am–6pm',
    tags: ['YC', 'Groups', 'Advice']
  },
  {
    name: 'Parent Carer Forum',
    description: 'Connect with other parent carers, share experiences, and influence local SEND services.',
    phone: '020 8496 3130',
    hours: 'Email for meeting dates',
    website: 'https://www.wfparentcarers.org.uk',
    tags: ['PC', 'Groups', 'Advocacy']
  },
  {
    name: 'Alzheimer\'s Society Dementia Adviser',
    description: 'One-to-one support for carers of people with dementia, including benefits advice and future planning.',
    phone: '020 8556 8171',
    hours: 'Mon–Fri, 9am–5pm',
    tags: ['AC', 'Advice', 'Health']
  },
  {
    name: 'Citizen\'s Advice Waltham Forest',
    description: 'Free advice on benefits, debt, housing, employment and legal issues. No appointment needed for phone advice.',
    phone: '0808 278 7835',
    hours: 'Mon–Fri, 10am–4pm',
    website: 'https://www.cabwalthamforest.org.uk',
    tags: ['YC', 'PC', 'AC', 'UO', 'Advice', 'Money']
  },
  {
    name: 'Age UK Waltham Forest',
    description: 'Support for older carers including befriending, activities, benefits checks and home visits.',
    phone: '020 8558 5512',
    hours: 'Mon–Fri, 9am–5pm',
    tags: ['AC', 'UO', 'Advice', 'Groups']
  },
  {
    name: 'Samaritans',
    description: 'Confidential emotional support any time, day or night. Call if you\'re struggling to cope or need someone to talk to.',
    phone: '116 123',
    hours: '24/7',
    website: 'https://www.samaritans.org',
    tags: ['YC', 'PC', 'AC', 'UO', 'Urgent', 'Health']
  },
  {
    name: 'Carers UK Advice Line',
    description: 'National charity offering advice on rights, benefits, work, and health. Expert information for all carers.',
    phone: '0808 808 7777',
    hours: 'Mon–Fri, 9am–6pm',
    website: 'https://www.carersuk.org',
    tags: ['YC', 'PC', 'AC', 'UO', 'Advice']
  },
  {
    name: 'Emergency Duty Team (out of hours)',
    description: 'Urgent social care help when main services are closed. Call if you can\'t care due to emergency.',
    phone: '020 8496 3130',
    hours: 'Evenings, weekends, bank holidays',
    tags: ['YC', 'PC', 'AC', 'Urgent']
  }
];

export default function UsefulContactsPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const allTags = ['YC', 'PC', 'AC', 'UO', 'Advice', 'Groups', 'Money', 'Health', 'Urgent', 'Advocacy'];

  const toggleFilter = (tag: string) => {
    setSelectedFilters(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredContacts = selectedFilters.length === 0 
    ? allContacts 
    : allContacts.filter(contact => 
        selectedFilters.some(filter => contact.tags.includes(filter))
      );

  return (
    <>
      <CarersHero 
        title="Useful contacts"
        description="Find local and national organisations that support carers. Filter by carer type, what you need help with, or how urgent it is."
        chips={['YC', 'PC', 'AC', 'UO']}
        urgentLink={{ text: 'Emergency numbers', href: '#/carers/emergency-help' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <section className="mb-12">
          <h2 className="text-[#EF3688] mb-6">Filter contacts</h2>
          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">Select one or more filters to find the right support:</p>
            <div className="flex flex-wrap gap-3">
              {allTags.map(tag => (
                <Chip
                  key={tag}
                  variant="primary"
                  onClick={() => toggleFilter(tag)}
                  active={selectedFilters.includes(tag)}
                >
                  {tag}
                </Chip>
              ))}
              {selectedFilters.length > 0 && (
                <button
                  onClick={() => setSelectedFilters([])}
                  className="text-gray-600 hover:text-gray-900 text-sm underline ml-4"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#EF3688]">
              {selectedFilters.length > 0 ? 'Filtered results' : 'All contacts'}
            </h2>
            <span className="text-gray-600 text-sm">
              Showing {filteredContacts.length} of {allContacts.length}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredContacts.map((contact, index) => (
              <DirectoryCard
                key={index}
                name={contact.name}
                description={contact.description}
                phone={contact.phone}
                hours={contact.hours}
                website={contact.website}
                tags={contact.tags}
              />
            ))}
          </div>

          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No contacts match your filters.</p>
              <button
                onClick={() => setSelectedFilters([])}
                className="text-[#EF3688] hover:underline"
              >
                Clear filters and show all contacts
              </button>
            </div>
          )}
        </section>

        <section className="mt-12 bg-[#FFF0F7] p-8 rounded-lg">
          <h2 className="text-[#EF3688] mb-4">Can't find what you need?</h2>
          <p className="text-gray-700 mb-6">
            If you need help but you're not sure who to contact, call Adult Social Care and we'll point you in the right direction.
          </p>
          <a 
            href="tel:02084963130"
            className="inline-flex items-center gap-2 bg-[#EF3688] text-white px-6 py-3 rounded-lg hover:bg-[#bf3688] transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call 020 8496 3130
          </a>
        </section>
      </div>
    </>
  );
}