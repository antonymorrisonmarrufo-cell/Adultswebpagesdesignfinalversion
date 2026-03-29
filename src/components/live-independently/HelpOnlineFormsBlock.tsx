import { ExternalLink } from 'lucide-react';

export default function HelpOnlineFormsBlock() {
  return (
    <div className="bg-gray-200 border border-gray-300 p-6 my-10">
      <h3 className="font-bold text-gray-900 mb-3 text-lg">Help completing online forms</h3>
      <p className="text-gray-700 mb-4">
        If you cannot complete the form online yourself, you can:
      </p>
      <ul className="space-y-2 mb-4">
        <li className="flex items-start gap-2 text-gray-700">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
          ask someone you trust to help you
        </li>
        <li className="flex items-start gap-2 text-gray-700">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
          call 020 8496 3130
        </li>
        <li className="flex items-start gap-2 text-gray-700">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" />
          use a self-service PC at a Waltham Forest Library, where staff can help you log in and create a MyAccount
        </li>
      </ul>
      <div className="space-y-2">
        <a
          href="https://www.walthamforest.gov.uk/libraries/local-libraries"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D61F69] underline hover:no-underline inline-flex items-center gap-1 text-sm"
        >
          Waltham Forest libraries
          <ExternalLink size={14} />
        </a>
        <br />
        <a
          href="https://www.walthamforest.gov.uk/council-and-elections/information-about-website/how-create-your-my-account"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D61F69] underline hover:no-underline inline-flex items-center gap-1 text-sm"
        >
          MyAccount help
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}