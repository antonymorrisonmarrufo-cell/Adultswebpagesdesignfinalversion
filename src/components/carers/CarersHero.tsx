import { AlertCircle } from 'lucide-react';
import Chip from './Chip';

interface CarersHeroProps {
  title: string;
  description: string;
  breadcrumb?: string;
  chips?: string[];
  urgentLink?: { text: string; href: string };
}

export default function CarersHero({ title, description, breadcrumb = "Support for carers", chips, urgentLink }: CarersHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#FFF0F7] to-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-sm text-gray-600 mb-4">
          Part of: <a href="#/carers" className="text-[#EF3688] hover:underline">{breadcrumb}</a>
        </div>
        
        <h1 className="text-[#EF3688] mb-6">{title}</h1>
        
        <p className="text-gray-700 max-w-4xl mb-6 text-lg">
          {description}
        </p>
        
        <div className="flex flex-wrap items-center gap-3">
          {chips && chips.map((chip, index) => (
            <Chip key={index} variant="primary">{chip}</Chip>
          ))}
          
          {urgentLink && (
            <a 
              href={urgentLink.href}
              className="flex items-center gap-2 text-[#EF3688] hover:underline ml-auto"
            >
              <AlertCircle className="w-5 h-5" />
              <span>{urgentLink.text}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
