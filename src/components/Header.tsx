import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Hem' },
  { path: '/om-oss', label: 'Om oss' },
  { path: '/skolbio', label: 'Skolbio' },
  { path: '/medlemmar', label: 'Medlemmar' },
  { path: '/prenumeration', label: 'Nyhetsbrev' },
  { path: '/kontakt', label: 'Kontakt' },
];

const FC_DISTRIBUTION_URL = '/fc/';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-fc">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/filmcentrum/fc-logo.png" alt="FilmCentrum" className="h-12 w-auto" />
            <div className="hidden sm:block leading-tight">
              <span className="text-lg font-bold tracking-wide" style={{ fontFamily: "'Special Elite', 'Courier New', monospace", color: '#c0392b' }}>FILMCENTRUM RIKS</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'text-fc-red bg-red-50'
                    : 'text-gray-700 hover:text-fc-red hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={FC_DISTRIBUTION_URL}
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-fc-red hover:bg-gray-50"
            >
              Filmkatalog
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href={FC_DISTRIBUTION_URL} className="hidden md:inline-flex btn-primary text-sm !py-2 !px-4">
              FC Distribution
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Meny"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  location.pathname === item.path
                    ? 'text-fc-red bg-red-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={FC_DISTRIBUTION_URL}
              className="block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-gray-50"
            >
              Filmkatalog
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
