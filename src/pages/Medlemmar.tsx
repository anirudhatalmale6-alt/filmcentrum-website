import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Medlemmar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="bg-fc-dark text-white py-16 md:py-20">
        <div className="container-fc text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Bli medlem</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            FilmCentrum ar ett kooperativ som ags av vara medlemmar -- oberoende filmskapare fran hela Sverige.
          </p>
        </div>
      </section>

      {/* Login Section */}
      <section className="bg-white border-b">
        <div className="container-fc py-8">
          <div className="max-w-md mx-auto text-center">
            {!showLogin ? (
              <button
                onClick={() => setShowLogin(true)}
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Logga in som medlem
              </button>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-left">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">Medlemsinloggning</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
                    <input
                      type="email"
                      placeholder="din@epost.se"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fc-red focus:border-fc-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Losenord</label>
                    <input
                      type="password"
                      placeholder="Ditt losenord"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fc-red focus:border-fc-red outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary !py-3"
                  >
                    Logga in
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    Inloggning kommer snart. <Link to="/kontakt" className="text-fc-red hover:underline">Kontakta oss</Link> for fragor.
                  </p>
                </form>
                <button onClick={() => setShowLogin(false)} className="mt-3 text-sm text-gray-400 hover:text-gray-600 w-full text-center">
                  Stang
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why become a member */}
      <section className="section-padding bg-gray-50">
        <div className="container-fc">
          <div className="text-center mb-12">
            <p className="text-fc-red font-medium mb-2 uppercase text-sm tracking-wider">Medlemskap</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Varfor bli medlem i FilmCentrum?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '🎬',
                title: 'Sprid din film',
                desc: 'Fa din film distribuerad genom FC Distribution till skolor, bibliotek och kulturinstitutioner over hela Sverige.',
              },
              {
                icon: '🌐',
                title: 'Synlighet',
                desc: 'Din film och profil visas pa FC Distribution med egen filmsida, trailer och pedagogiskt material.',
              },
              {
                icon: '🤝',
                title: 'Natverk',
                desc: 'Bli del av Sveriges storsta kooperativ for oberoende filmskapare. Traffa kollegor och samarbeta pa projekt.',
              },
              {
                icon: '🏫',
                title: 'Skolbio',
                desc: 'Dina filmer kan visas i skolbioprogram runt om i landet med tillhorande pedagogiskt material.',
              },
              {
                icon: '💰',
                title: 'Intakter',
                desc: 'Fa ersattning nar dina filmer visas. FilmCentrum forhandlar rattigheter och fordelar intakter till medlemmarna.',
              },
              {
                icon: '📣',
                title: 'Marknadsforing',
                desc: 'FilmCentrum marknadfor dina filmer aktivt till skolor, bibliotek, festivaler och andra visningsplatser.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership pricing */}
      <section className="section-padding bg-white">
        <div className="container-fc">
          <div className="text-center mb-12">
            <p className="text-fc-red font-medium mb-2 uppercase text-sm tracking-wider">Medlemsavgift</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Vad kostar det?
            </h2>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-fc-red/20 p-8 text-center shadow-lg">
              <p className="text-fc-red font-medium uppercase text-sm tracking-wider mb-2">Arsmedlemskap</p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-gray-900">500</span>
                <span className="text-xl text-gray-500">kr/ar</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">Enskild filmskapare</p>

              <ul className="text-left space-y-3 mb-8">
                {[
                  'Distribution genom FC Distribution',
                  'Egen filmsida med trailer och info',
                  'Synlighet mot skolor och bibliotek',
                  'Intakter fran filmvisningar',
                  'Deltagande i skolbioprogram',
                  'Natverk med oberoende filmskapare',
                  'Rostrett pa arsmote',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-fc-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/kontakt" className="btn-primary w-full !py-3 block text-center">
                Ansok om medlemskap
              </Link>
              <p className="text-xs text-gray-400 mt-3">
                Kontakta oss for foretags- eller organisationsmedlemskap
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="section-padding bg-gray-50">
        <div className="container-fc max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Hur blir man medlem?
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Skicka in ansokan',
                desc: 'Kontakta oss med information om dig och dina filmer. Vi tar emot ansokningar fran oberoende filmskapare som har producerat minst en kortfilm eller dokumentar.',
              },
              {
                step: '2',
                title: 'Granskning',
                desc: 'Styrelsen granskar din ansokan och dina filmer. Vi varlagar kvalitet och att filmerna passar in i vart utbud.',
              },
              {
                step: '3',
                title: 'Valkomna!',
                desc: 'Nar din ansokan godkants betalar du arsavgiften och far tillgang till alla medlemsformaner. Din profil och dina filmer laggs upp pa FC Distribution.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-fc-red text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/kontakt" className="btn-primary">Kontakta oss for att borja</Link>
          </div>
        </div>
      </section>

      {/* Access to films CTA */}
      <section className="bg-gradient-to-r from-fc-red to-red-700 text-white section-padding">
        <div className="container-fc text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Medlemmar far tillgang till FC:s filmer
          </h2>
          <p className="text-lg text-red-100 mb-8">
            Som medlem kan du utforska hela FC Distributions filmkatalog och anvanda filmerna i dina egna projekt och visningar.
          </p>
          <a href="/fc/" className="inline-flex items-center px-6 py-3 bg-white text-fc-red font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Utforska FC Distribution
          </a>
        </div>
      </section>
    </>
  );
}
