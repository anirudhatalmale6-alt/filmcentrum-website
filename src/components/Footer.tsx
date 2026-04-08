import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-fc-dark text-white">
      <div className="container-fc py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-fc-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FC</span>
              </div>
              <span className="text-xl font-bold">FilmCentrum</span>
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
              <li><Link to="/filmer" className="text-gray-400 hover:text-white transition-colors">Filmkatalog</Link></li>
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
