import { Link } from 'react-router-dom';
import NewsletterBanner from '../components/NewsletterBanner';

export default function Skolbio() {
  return (
    <>
      <section className="bg-gradient-to-br from-fc-dark via-fc-navy to-fc-dark text-white py-16 md:py-24">
        <div className="container-fc text-center max-w-3xl">
          <p className="text-fc-gold font-medium mb-4 tracking-wider uppercase text-sm">Skolbio</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Film i undervisningen</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Vi erbjuder skolbiovisningar med pedagogiskt material for alla aldersgrupper.
            Filmen ar ett kraftfullt verktyg for larande och samtal i klassrummet.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fc max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Forskola & Forskoleklass',
                age: '3-6 ar',
                desc: 'Korta filmer med enkla berattelser som vacker nyfikenhet och samtal om kanslor, vanskap och det som ar annorlunda.',
                color: 'bg-yellow-50 border-yellow-200 text-yellow-800',
              },
              {
                title: 'Lagstadiet',
                age: '7-9 ar',
                desc: 'Filmer som utforskar teman som identitet, rattigheter, natur och miljo pa ett aldersanpassat satt.',
                color: 'bg-blue-50 border-blue-200 text-blue-800',
              },
              {
                title: 'Mellanstadiet',
                age: '10-12 ar',
                desc: 'Filmer om vanskap, utanforskap, mobbning, miljo och samhallsfragor som engagerar och utmanar.',
                color: 'bg-green-50 border-green-200 text-green-800',
              },
              {
                title: 'Hogstadiet & Gymnasium',
                age: '13-19 ar',
                desc: 'Dokumentarer och spelfilmer om migration, demokrati, jamstalldhet, psykisk halsa och globala fragor.',
                color: 'bg-purple-50 border-purple-200 text-purple-800',
              },
            ].map((level) => (
              <div key={level.title} className={`rounded-xl p-6 border ${level.color}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-gray-900">{level.title}</h3>
                  <span className="text-sm font-medium px-2 py-1 bg-white/80 rounded">{level.age}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{level.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Sa har gar det till</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Valj film', desc: 'Blaeddra i var katalog och valj en film som passar ert tema och aldersgrupp.' },
                { step: '2', title: 'Boka visning', desc: 'Kontakta oss for att boka en visning. Vi hjalper er att hitta ratt format.' },
                { step: '3', title: 'Filmsamtal', desc: 'Anvand vara studiehandledningar for att fordjupa samtalet efter filmvisningen.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-fc-red text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Redo att boka?</h2>
            <p className="text-gray-600 mb-6">Kontakta oss sa hjalper vi dig att hitta ratt film for din klass.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/filmer" className="btn-primary">Utforska filmkatalogen</Link>
              <Link to="/kontakt" className="inline-flex items-center px-6 py-3 border-2 border-fc-red text-fc-red font-medium rounded-lg hover:bg-fc-red hover:text-white transition-colors">
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
