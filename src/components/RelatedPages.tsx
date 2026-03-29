import { ArrowRight } from 'lucide-react';

interface RelatedPage {
  title: string;
}

const pages: RelatedPage[] = [
  { title: 'Support for carers' },
  { title: 'How to get support( request an assessment )' },
  { title: 'Travel and transport' }
];

export default function RelatedPages() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-[#D61F69] mb-8 font-bold">Related pages</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pages.map((page, index) => (
          <button
            key={index}
            className="bg-[#D61F69] text-white p-6 flex items-center justify-between hover:bg-[#B51A5A] transition-colors text-left"
          >
            <span className="pr-4 font-semibold">{page.title}</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D61F69] flex-shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}