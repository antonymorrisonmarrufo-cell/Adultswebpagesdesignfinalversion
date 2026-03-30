import { Phone } from 'lucide-react';
import { useState } from 'react';

interface Contact {
  name: string;
  description: string;
  phone: string;
  hours: string;
  website?: string;
  tags: string[];
}

const allContacts: Contact[] = [
  {
    name: 'Carers First (Waltham Forest)',
    description: 'Information, advice, support groups and advocacy for all carers in the borough.',
    phone: '0300 303 1555',
    hours: 'Mon–Fri, 9am–5pm',
    website: 'https://www.carersfirst.org.uk',
    tags: ['All carers', 'Advice', 'Groups', 'Urgent']
  },
  {
    name: 'Young Carers Project',
    description: 'Dedicated support for children and teenagers who care, including activities, mentoring and school liaison.',
    phone: '020 8509 3030',
    hours: 'Mon–Fri, 10am–6pm',
    tags: ['Young carers', 'Groups', 'Advice']
  },
  {
    name: 'Parent Carer Forum',
    description: 'Connect with other parent carers, share experiences, and influence local SEND services.',
    phone: '020 8496 3130',
    hours: 'Email for meeting dates',
    website: 'https://www.wfparentcarers.org.uk',
    tags: ['Parent carers', 'Groups', 'Advocacy']
  },
  {
    name: 'Alzheimer\'s Society Dementia Adviser',
    description: 'One-to-one support for carers of people with dementia, including benefits advice and future planning.',
    phone: '020 8556 8171',
    hours: 'Mon–Fri, 9am–5pm',
    tags: ['Adult carers', 'Advice', 'Health']
  },
  {
    name: 'Citizens Advice Waltham Forest',
    description: 'Free advice on benefits, debt, housing, employment and legal issues. No appointment needed for phone advice.',
    phone: '0808 278 7835',
    hours: 'Mon–Fri, 10am–4pm',
    website: 'https://www.cabwalthamforest.org.uk',
    tags: ['All carers', 'Advice', 'Money']
  },
  {
    name: 'Age UK Waltham Forest',
    description: 'Support for older carers including befriending, activities, benefits checks and home visits.',
    phone: '020 8558 5512',
    hours: 'Mon–Fri, 9am–5pm',
    tags: ['Adult carers', 'Advice', 'Groups']
  },
  {
    name: 'Samaritans',
    description: 'Confidential emotional support any time, day or night. Call if you\'re struggling to cope or need someone to talk to.',
    phone: '116 123',
    hours: '24/7',
    website: 'https://www.samaritans.org',
    tags: ['All carers', 'Urgent', 'Health']
  },
  {
    name: 'Carers UK Advice Line',
    description: 'National charity offering advice on rights, benefits, work, and health. Expert information for all carers.',
    phone: '0808 808 7777',
    hours: 'Mon–Fri, 9am–6pm',
    website: 'https://www.carersuk.org',
    tags: ['All carers', 'Advice']
  },
  {
    name: 'Emergency Duty Team (out of hours)',
    description: 'Urgent social care help when main services are closed. Call if you can\'t care due to emergency.',
    phone: '020 8496 3130',
    hours: 'Evenings, weekends, bank holidays',
    tags: ['All carers', 'Urgent']
  }
];

export default function UsefulContactsPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const allTags = ['Young carers', 'Parent carers', 'Adult carers', 'All carers', 'Advice', 'Groups', 'Money', 'Health', 'Urgent', 'Advocacy'];

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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="text-sm">
            <a href="#/" className="text-[#bf3688] hover:underline">Home</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care" className="text-[#bf3688] hover:underline">Adult social care</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer" className="text-[#bf3688] hover:underline">Being a carer</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <a href="#/adult-social-care/being-carer/support-for-carers" className="text-[#bf3688] hover:underline">Support for carers</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-700">Useful contacts</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Page Title and Standfirst */}
        <h1 className="text-5xl font-bold text-[#231F20] mb-4">Useful contacts for carers</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          Find local and national organisations that support carers. Filter by who you care for or what you need help with.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="tel:02084963130"
            className="inline-flex items-center gap-3 bg-[#bf3688] text-white px-8 py-3 text-sm font-semibold hover:bg-[#b51858] transition-colors"
          >
            <Phone size={18} />
            Call Adult Social Care: 020 8496 3130
          </a>
          <a
            href="https://portal.walthamforest.gov.uk/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b/AF-Stage-70f67879-d714-4b05-a4c4-d52bf6b8c088/definition.json&process=1&process_uri=sandbox-processes://AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b&process_id=AF-Process-12f67700-270d-4318-8ad6-199501fc5b1b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[#bf3688] text-[#bf3688] px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Request a carer's assessment
          </a>
        </div>

        {/* Filter Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#bf3688] mb-6">Filter contacts</h2>
          <div className="bg-gray-50 border border-gray-200 p-6">
            <p className="text-gray-700 mb-4">Select one or more filters to find the right support:</p>
            <div className="flex flex-wrap gap-3">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleFilter(tag)}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedFilters.includes(tag)
                      ? 'bg-[#bf3688] text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-[#bf3688]'
                  }`}
                >
                  {tag}
                </button>
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

        {/* Results Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-[#bf3688]">
              {selectedFilters.length > 0 ? 'Filtered results' : 'All contacts'}
            </h2>
            <span className="text-gray-600 text-sm">
              Showing {filteredContacts.length} of {allContacts.length}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredContacts.map((contact, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 p-6 hover:border-[#bf3688] transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{contact.name}</h3>
                <p className="text-gray-700 text-sm mb-4">{contact.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#bf3688]" />
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-[#bf3688] font-semibold hover:underline">
                      {contact.phone}
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm ml-6">{contact.hours}</p>
                  {contact.website && (
                    <p className="ml-6">
                      <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-[#bf3688] text-sm hover:underline">
                        Visit website
                      </a>
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {contact.tags.map((tag, idx) => (
                    <span key={idx} className="inline-block px-3 py-1 text-xs bg-[#FFF0F7] text-[#bf3688] font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No contacts match your filters.</p>
              <button
                onClick={() => setSelectedFilters([])}
                className="text-[#bf3688] hover:underline font-semibold"
              >
                Clear filters and show all contacts
              </button>
            </div>
          )}
        </section>

        {/* Can't find what you need */}
        <div className="bg-[#FFF0F7] border-2 border-[#003078] bg-[#d7f8ff] p-8">
          <h2 className="text-2xl font-bold text-[#bf3688] mb-4">Can't find what you need?</h2>
          <p className="text-gray-700 mb-6">
            If you need help but you're not sure who to contact, call Adult Social Care and we'll point you in the right direction.
          </p>
          <a 
            href="tel:02084963130"
            className="inline-flex items-center gap-2 bg-[#bf3688] text-white px-6 py-3 hover:bg-[#b51858] transition-colors font-semibold"
          >
            <Phone className="w-4 h-4" />
            Call 020 8496 3130
          </a>
        </div>

        <div className="text-sm text-gray-600 mt-12 pt-6 border-t border-gray-200">
          <p><strong>Last updated:</strong> 28 March 2026</p>
          <p><strong>Next review:</strong> 28 March 2027</p>
        </div>

      </div>
    </div>
  );
}
