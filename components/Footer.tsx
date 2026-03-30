import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      {/* Teal section */}
      <div className="bg-[#00635C] text-white px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Popular tasks */}
          <div>
            <h3 className="font-bold mb-4 text-base">Popular tasks</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Apply for a school place</a></li>
              <li><a href="#" className="hover:underline">Check your bin day</a></li>
              <li><a href="#" className="hover:underline">Get a parking permit</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-base">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">Make a complaint or compliment</a></li>
            </ul>
          </div>

          {/* Accessibility */}
          <div className="md:col-span-2">
            <p className="text-sm mb-3">
              We make a commitment to making our website accessible to all visitors*.
            </p>
            <a href="#" className="text-sm hover:underline font-semibold">Read our accessibility statement</a>
            
            <div className="mt-4 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5C20 5 15 8 15 12C15 14 16 15 17 16C15 16 13 17 13 19C13 21 14 22 15 23C13 23 11 24 11 26C11 28 12 29 13 30C11 30 9 31 9 33C9 35 11 36 13 36H27C29 36 31 35 31 33C31 31 29 30 27 30C28 29 29 28 29 26C29 24 27 23 25 23C26 22 27 21 27 19C27 17 25 16 23 16C24 15 25 14 25 12C25 8 20 5 20 5Z" fill="white"/>
              </svg>
              <span className="text-base font-bold">Waltham Forest</span>
            </div>
          </div>
        </div>
      </div>

      {/* Black section */}
      <div className="bg-black text-white px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and copyright */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5C20 5 15 8 15 12C15 14 16 15 17 16C15 16 13 17 13 19C13 21 14 22 15 23C13 23 11 24 11 26C11 28 12 29 13 30C11 30 9 31 9 33C9 35 11 36 13 36H27C29 36 31 35 31 33C31 31 29 30 27 30C28 29 29 28 29 26C29 24 27 23 25 23C26 22 27 21 27 19C27 17 25 16 23 16C24 15 25 14 25 12C25 8 20 5 20 5Z" fill="white"/>
                </svg>
                <span className="text-sm">Waltham Forest</span>
              </div>
              <p className="text-xs text-gray-400">© London Borough of Waltham Forest, 2025</p>
            </div>

            {/* Popular tasks */}
            <div>
              <h3 className="font-bold mb-4 text-base">Popular tasks</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Apply for a school place</a></li>
                <li><a href="#" className="hover:underline">Check your bin day</a></li>
                <li><a href="#" className="hover:underline">Get a parking permit</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4 text-base">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Contact us</a></li>
                <li><a href="#" className="hover:underline">Make a complaint or compliment</a></li>
              </ul>
              
              <div className="flex gap-4 mt-6">
                <a href="#" className="hover:opacity-80">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Accessibility statement in black section */}
          <div className="mb-6">
            <p className="text-sm mb-2 text-gray-300">
              We make a commitment to making our website accessible to all visitors*.
            </p>
            <a href="#" className="text-sm hover:underline">Read our accessibility statement</a>
          </div>

          {/* Bottom links */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-wrap gap-6 text-xs text-gray-400">
              <a href="#" className="hover:underline">Privacy policy</a>
              <a href="#" className="hover:underline">Cookies policy</a>
              <a href="#" className="hover:underline">Disclaimer</a>
              <a href="#" className="hover:underline">Press office</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}