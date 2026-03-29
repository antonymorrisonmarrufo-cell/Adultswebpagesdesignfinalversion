import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Phone } from "lucide-react";
import { cn } from "@/components/ui/utils";

const navLinks = [
  { label: "Adult Social Care", href: "/adult-social-care" },
  { label: "How to get support", href: "/how-to-get-support" },
  { label: "Being a carer", href: "/carers" },
  { label: "Live independently", href: "/live-independently" },
  { label: "Paying for care", href: "/paying-for-care" },
  { label: "Safeguarding", href: "/safeguarding" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Top bar */}
      <div className="bg-wf-green text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <Link to="/" className="font-bold text-white no-underline hover:text-white">
            London Borough of Waltham Forest
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="tel:02084963130"
              className="flex items-center gap-1 text-white no-underline hover:text-wf-yellow"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">020 8496 3130</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link
            to="/"
            className="text-lg font-bold text-wf-green no-underline hover:text-wf-green"
          >
            Adult Social Care
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors",
                    isActive
                      ? "bg-wf-green-light text-wf-green"
                      : "text-wf-dark hover:bg-wf-gray-light hover:text-wf-green",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Search + mobile menu button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md p-2 text-wf-gray hover:bg-wf-gray-light hover:text-wf-green"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="rounded-md p-2 text-wf-gray hover:bg-wf-gray-light lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav
            className="border-t border-gray-200 pb-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium no-underline",
                    isActive
                      ? "bg-wf-green-light text-wf-green"
                      : "text-wf-dark hover:bg-wf-gray-light hover:text-wf-green",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
