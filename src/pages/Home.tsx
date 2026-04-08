import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilmCard from '../components/FilmCard';
import NewsletterBanner from '../components/NewsletterBanner';
import { getFilms, getMemberStats } from '../api';

export default function Home() {
  const [films, setFilms] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    getFilms().then((f) => setFilms(f.slice(0, 8))).catch(() => {});
    getMemberStats().then(setStats).catch(() => {});
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-fc-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fc-dark via-fc-navy to-fc-dark" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-fc-red rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-fc-gold rounded-full blur-[150px]" />
        </div>
        <div className="relative container-fc py-24 md:py-36">
          <div className="max-w-3xl">
            <img src="/filmcentrum/fc-logo-white.jpg" alt="FilmCentrum" className="h-20 md:h-28 w-auto mb-8" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Film och filmpedagogik for utbildning
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              FilmCentrum -- film och filmpedagogik for utbildning och slutna grupper.
              Skolbio online och pa biograf.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/filmer" className="btn-primary text-lg !px-8 !py-4">
                Utforska filmer
              </Link>
              <Link to="/om-oss" className="btn-outline text-lg !px-8 !py-4">
                Lar kanna oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="container-fc py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-fc-red">{films.length > 0 ? '300+' : '...'}</p>
              <p className="text-gray-600 mt-1">Filmer i katalogen</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-fc-red">{stats?.total || '...'}</p>
              <p className="text-gray-600 mt-1">Medlemmar</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-fc-red">8</p>
              <p className="text-gray-600 mt-1">Regionala kontor</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-fc-red">50+</p>
              <p className="text-gray-600 mt-1">Ar av filmkultur</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-fc">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-fc-red font-medium mb-2 uppercase text-sm tracking-wider">Om FilmCentrum</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Vi tror pa filmens kraft att forandra
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                FilmCentrum ar ett kooperativ som ags och drivs av oberoende filmskapare. Sedan 1968 har vi arbetat
                for att sprida kvalitetsfilm till skolor, bibliotek och kulturinstitutioner over hela Sverige.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vara filmer berattar viktiga historier om identitet, miljo, demokrati och mangfald.
                Vi erbjuder pedagogiskt material, filmvisningar och workshops for alla aldrar.
              </p>
              <Link to="/om-oss" className="btn-primary">
                Las mer om oss
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="space-y-6">
                {[
                  { icon: '🎬', title: 'Filmdistribution', desc: 'Vi distribuerar oberoende svensk och internationell film till skolor och kulturinstitutioner.' },
                  { icon: '🏫', title: 'Skolbio', desc: 'Skolbiovisningar med pedagogiskt material och filmsamtal for alla aldersgrupper.' },
                  { icon: '🤝', title: 'Medlemskap', desc: 'Bli medlem i Sveriges storsta kooperativ for oberoende filmskapare.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Films */}
      {films.length > 0 && (
        <section className="section-padding">
          <div className="container-fc">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-fc-red font-medium mb-2 uppercase text-sm tracking-wider">Filmkatalog</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Utvalda filmer</h2>
              </div>
              <Link to="/filmer" className="text-fc-red font-medium hover:underline hidden md:block">
                Se alla filmer &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {films.map((film: any) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link to="/filmer" className="btn-primary">Se alla filmer</Link>
            </div>
          </div>
        </section>
      )}

      {/* Skolbio CTA */}
      <section className="bg-gradient-to-r from-fc-red to-red-700 text-white section-padding">
        <div className="container-fc text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Skolbio for alla aldrar</h2>
          <p className="text-lg text-red-100 mb-8">
            Boka en filmvisning for din skola. Vi erbjuder ett brett utbud av filmer med tillhorande
            pedagogiskt material, studiehandledningar och filmsamtal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/skolbio" className="btn-outline">Las mer om skolbio</Link>
            <Link to="/kontakt" className="inline-flex items-center px-6 py-3 bg-white text-fc-red font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterBanner />
    </>
  );
}
