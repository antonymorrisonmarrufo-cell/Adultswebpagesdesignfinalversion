import { X } from 'lucide-react';
import { useState } from 'react';

export default function FeedbackBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#95C11F] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-sm text-white font-medium">
          Help us improve our services- share your feedback
        </p>
      </div>
    </div>
  );
}