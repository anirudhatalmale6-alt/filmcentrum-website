import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-fc-dark text-white">
      <div className="container-fc py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/filmcentrum/fc-logo-white.jpg" alt="FilmCentrum" className="h-14 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              FilmCentrum ar ett rikstackande kooperativ for oberoende filmskapare i Sverige.
              Vi sprider kvalitetsfilm till skolor, bibliotek och kulturinstitutioner.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/om-oss" className="text-gray-400 hover:text-white transition-colors">Om oss</Link></li>
              <li><a href="/fc/" className="text-gray-400 hover:text-white transition-colors">FC Distribution</a></li>
              <li><Link to="/skolbio" className="text-gray-400 hover:text-white transition-colors">Skolbio</Link></li>
              <li><Link to="/medlemmar" className="text-gray-400 hover:text-white transition-colors">Medlemmar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">Kontakt</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>FilmCentrum Riks</li>
              <li>Bredgrand 2</li>
              <li>111 30 Stockholm</li>
              <li className="pt-2">
                <a href="mailto:info@filmcentrum.se" className="hover:text-white transition-colors">info@filmcentrum.se</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">Nyhetsbrev</h3>
            <p className="text-gray-400 text-sm mb-3">Fa nyheter om filmer och evenemang direkt i din inkorg.</p>
            <Link to="/prenumeration" className="inline-flex items-center px-4 py-2 bg-fc-red text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors">
              Prenumerera
            </Link>
            <div className="mt-6">
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-3 text-gray-300">Folj oss</h3>
              <a
                href="https://www.facebook.com/filmcentrumFCBIO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FilmCentrum Riks. Alla rattigheter forbehallna.</p>
          <p className="mt-2 md:mt-0">Org.nr 802437-2172</p>
        </div>
      </div>
    </footer>
  );
}
