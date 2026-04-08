import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFilm } from '../api';

export default function FilmDetalj() {
  const { id } = useParams();
  const [film, setFilm] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getFilm(parseInt(id))
        .then(setFilm)
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div className="section-padding text-center text-gray-400">Laddar...</div>;
  if (!film) return <div className="section-padding text-center text-gray-400">Filmen hittades inte.</div>;

  return (
    <>
      <section className="bg-fc-dark text-white py-12 md:py-16">
        <div className="container-fc">
          <Link to="/filmer" className="text-gray-400 hover:text-white text-sm mb-6 inline-block">&larr; Tillbaka till filmkatalogen</Link>
          <div className="grid md:grid-cols-[300px_1fr] gap-8 md:gap-12">
            <div className="aspect-[2/3] rounded-xl overflow-hidden bg-gray-800 shadow-2xl">
              <img
                src={film.poster_url || '/filmcentrum/placeholder.svg'}
                alt={film.title}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = '/filmcentrum/placeholder.svg'; }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">{film.title}</h1>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-300 mb-6">
                {film.director && <span>Regissor: <strong className="text-white">{film.director}</strong></span>}
                {film.year && <span>Ar: <strong className="text-white">{film.year}</strong></span>}
                {film.duration && <span>Langd: <strong className="text-white">{film.duration} min</strong></span>}
                {film.age && <span>Alder: <strong className="text-white">{film.age}</strong></span>}
                {film.language && <span>Sprak: <strong className="text-white">{film.language}</strong></span>}
              </div>

              {film.synopsis && (
                <p className="text-gray-300 leading-relaxed text-lg mb-6 max-w-2xl">{film.synopsis}</p>
              )}

              {film.categories && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {(typeof film.categories === 'string' ? film.categories.split(',') : film.categories || [])
                    .map((c: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">{c.trim()}</span>
                    ))}
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <Link to="/kontakt" className="btn-primary">
                  Boka visning
                </Link>
                {film.trailer_url && (
                  <a href={film.trailer_url} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Se trailer
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional details */}
      <section className="section-padding">
        <div className="container-fc max-w-3xl">
          {film.subjects && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Amnesomraden</h2>
              <p className="text-gray-700">{film.subjects}</p>
            </div>
          )}
          {film.keywords && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Nyckelord</h2>
              <div className="flex flex-wrap gap-2">
                {(typeof film.keywords === 'string' ? film.keywords.split(',') : film.keywords || [])
                  .map((kw: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{kw.trim()}</span>
                  ))}
              </div>
            </div>
          )}
          {film.study_guide_url && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Pedagogiskt material</h2>
              <a href={film.study_guide_url} target="_blank" rel="noopener noreferrer" className="text-fc-red hover:underline font-medium">
                Ladda ner studiehandledning
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
