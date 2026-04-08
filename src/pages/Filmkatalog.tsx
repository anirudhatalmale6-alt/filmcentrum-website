import { useEffect, useState } from 'react';
import FilmCard from '../components/FilmCard';
import { getFilms } from '../api';

export default function Filmkatalog() {
  const [films, setFilms] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFilms().then((f) => { setFilms(f); setFiltered(f); }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = films;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((f: any) =>
        f.title?.toLowerCase().includes(q) ||
        f.director?.toLowerCase().includes(q) ||
        f.synopsis?.toLowerCase().includes(q)
      );
    }
    if (ageFilter) {
      result = result.filter((f: any) => f.age?.toLowerCase().includes(ageFilter.toLowerCase()));
    }
    setFiltered(result);
  }, [search, ageFilter, films]);

  const ages = [...new Set(films.map((f: any) => f.age).filter(Boolean))].sort();

  return (
    <>
      <section className="bg-fc-dark text-white py-16 md:py-20">
        <div className="container-fc text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Filmkatalog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Utforska vart utbud av oberoende svensk och internationell film for alla aldrar.
          </p>
        </div>
      </section>

      <section className="bg-white border-b sticky top-16 md:top-20 z-40">
        <div className="container-fc py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Sok film, regissor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-red focus:border-transparent"
            />
            <select
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-red bg-white"
            >
              <option value="">Alla aldrar</option>
              {ages.map((age) => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-fc">
          <p className="text-gray-500 mb-6">{filtered.length} filmer</p>

          {loading ? (
            <div className="text-center py-12 text-gray-400">Laddar filmer...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-400">Inga filmer hittades.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {filtered.map((film: any) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
