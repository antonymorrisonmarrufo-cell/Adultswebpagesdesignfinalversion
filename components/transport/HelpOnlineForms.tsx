import { ArrowRight, Monitor } from 'lucide-react';

export default function HelpOnlineForms() {
  return (
    <div className="bg-gray-200 border border-gray-300 p-6 mt-10">
      <div className="flex items-start gap-3 mb-3">
        <Monitor className="text-[#D61F69] flex-shrink-0 mt-0.5" size={20} />
        <h3 className="font-bold text-gray-900">Help with completing online forms</h3>
      </div>
      <p className="text-gray-700 text-sm mb-4">
        For those without computers, you can use a self-service PC in any{' '}
        <a
          href="https://www.walthamforest.gov.uk/libraries/local-libraries"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D61F69] underline hover:no-underline"
        >
          Waltham Forest Library
        </a>
        . Staff there can help you to log in and create a{' '}
        <a
          href="https://www.walthamforest.gov.uk/council-and-elections/information-about-website/how-create-your-my-account"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D61F69] underline hover:no-underline"
        >
          MyAccount
        </a>
        .
      </p>
    </div>
  );
}
