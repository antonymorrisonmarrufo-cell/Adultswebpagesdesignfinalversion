import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b0c0c] text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Waltham Forest */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path d="M12 2L8 8h3v6H8l4 6 4-6h-3V8h3L12 2z" />
              </svg>
              <span className="font-bold text-lg">Waltham Forest</span>
            </div>
            <p className="text-sm text-gray-400">
              &copy; London Borough of Waltham Forest, {new Date().getFullYear()}
            </p>
          </div>

          {/* Popular tasks */}
          <div>
            <h3 className="font-bold text-base mb-4">Popular tasks</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-to-get-support" className="text-sm text-gray-300 no-underline hover:text-white hover:underline">
                  Apply for a school place
                </Link>
              </li>
              <li>
                <Link to="/how-to-get-support" className="text-sm text-gray-300 no-underline hover:text-white hover:underline">
                  Check your bin day
                </Link>
              </li>
              <li>
                <Link to="/how-to-get-support" className="text-sm text-gray-300 no-underline hover:text-white hover:underline">
                  Get a parking permit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-to-get-support/contact-us" className="text-sm text-gray-300 no-underline hover:text-white hover:underline">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/complaints-compliments" className="text-sm text-gray-300 no-underline hover:text-white hover:underline">
                  Make a complaint or compliment
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 no-underline hover:text-white hover:underline">
                  Read our accessibility statement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
