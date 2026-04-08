import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsletterBanner from '../components/NewsletterBanner';
import { getMemberStats } from '../api';

const FC_DISTRIBUTION_URL = '/fc/';

export default function Home() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    getMemberStats().then(setStats).catch(() => {});
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-fc-dark text-white overflow-hidden min-h-[500px]">
        <div className="absolute inset-0">
          <img src="/filmcentrum/fc-team.jpg" alt="FilmCentrum" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-fc-dark/90 via-fc-dark/70 to-fc-dark/50" />
        </div>
        <div className="relative container-fc py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4" style={{ fontFamily: "'Special Elite', 'Courier New', monospace", color: '#c0392b' }}>
              FILMCENTRUM RIKS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8" style={{ fontFamily: "'Special Elite', 'Courier New', monospace" }}>
              &ndash;En forening av filmare for filmare
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={FC_DISTRIBUTION_URL} className="btn-primary text-lg !px-8 !py-4">
                FC Distribution
              </a>
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
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-fc-red">1000+</p>
              <p className="text-gray-600 mt-1">Filmer i katalogen</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-fc-red">400+</p>
              <p className="text-gray-600 mt-1">Medlemmar</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-fc-red">50+</p>
              <p className="text-gray-600 mt-1">År av filmkultur</p>
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
                  { icon: '🎬', title: 'FC Distribution', desc: 'Utforska vart filmutbud pa FC Distribution -- oberoende svensk och internationell film.', link: FC_DISTRIBUTION_URL },
                  { icon: '🏫', title: 'Skolbio', desc: 'Skolbiovisningar med pedagogiskt material och filmsamtal for alla aldersgrupper.', link: '/skolbio' },
                  { icon: '🤝', title: 'Medlemskap', desc: 'Bli medlem i Sveriges storsta kooperativ for oberoende filmskapare.', link: '/medlemmar' },
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
