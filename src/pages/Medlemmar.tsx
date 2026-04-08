import { Link } from 'react-router-dom';

export default function Medlemmar() {
  return (
    <>
      <section className="bg-fc-dark text-white py-16 md:py-20">
        <div className="container-fc text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Medlemmar</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            FilmCentrum ar ett kooperativ som ags av vara medlemmar -- oberoende filmskapare fran hela Sverige.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fc max-w-lg text-center">
          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <p className="text-5xl mb-4">🎬</p>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">Kommer snart</h2>
            <p className="text-gray-600 mb-6">
              Medlemssidan ar under uppbyggnad. Kontakta oss for att lara dig mer om medlemskap i FilmCentrum.
            </p>
            <Link to="/kontakt" className="btn-primary">Kontakta oss</Link>
          </div>
        </div>
      </section>
    </>
  );
}
