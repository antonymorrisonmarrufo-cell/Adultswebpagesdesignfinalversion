import { Phone, Globe, Clock } from 'lucide-react';
import Chip from './Chip';

interface DirectoryCardProps {
  name: string;
  description: string;
  phone?: string;
  hours?: string;
  website?: string;
  tags: string[];
}

export default function DirectoryCard({ name, description, phone, hours, website, tags }: DirectoryCardProps) {
  return (
    <div className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <Chip key={index} variant="tag" size="sm">{tag}</Chip>
        ))}
      </div>
      
      <h3 className="text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="space-y-2 text-sm">
        {phone && (
          <div className="flex items-center gap-2 text-[#EF3688]">
            <Phone className="w-4 h-4" />
            <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
          </div>
        )}
        {hours && (
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{hours}</span>
          </div>
        )}
        {website && (
          <div className="flex items-center gap-2 text-[#EF3688]">
            <Globe className="w-4 h-4" />
            <a href={website} target="_blank" rel="noopener noreferrer" className="hover:underline">Visit website</a>
          </div>
        )}
      </div>
    </div>
  );
}
