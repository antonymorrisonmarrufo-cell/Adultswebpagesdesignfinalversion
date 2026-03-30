import { Menu, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 8C24 8 18 12 18 17C18 20 20 21.5 21.5 22.5C18.5 22.5 16 24 16 27C16 29.5 17.5 31 19 32C16.5 32 14 33.5 14 36C14 38.5 16 40 17.5 41C15 41 12.5 42.5 12.5 45C12.5 47.5 15 49 18 49H30C33 49 35.5 47.5 35.5 45C35.5 42.5 33 41 30.5 41C32 40 33.5 38.5 33.5 36C33.5 33.5 31 32 28.5 32C30 31 31.5 29.5 31.5 27C31.5 24 29 22.5 26 22.5C27.5 21.5 29 20 29 17C29 12 24 8 24 8Z" fill="#00635C"/>
          </svg>
          <div>
            <div className="text-base font-bold text-gray-900 leading-tight">Waltham Forest</div>
            <div className="text-xs text-gray-600">London Borough Council</div>
          </div>
        </div>
        
        <nav className="flex items-center gap-6">
          <button className="text-sm text-gray-700 hover:text-gray-900">English [EN]</button>
          <button className="text-sm text-gray-700 hover:text-gray-900">My Account</button>
          <button className="text-sm flex items-center gap-1 text-gray-700 hover:text-gray-900">
            <Search className="w-4 h-4" />
            Search
          </button>
          <button className="text-sm flex items-center gap-1 text-gray-700 hover:text-gray-900">
            Menu <Menu className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </header>
  );
}