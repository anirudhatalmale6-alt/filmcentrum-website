import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMembers, getMemberCategories } from '../api';

export default function Medlemmar() {
  const [members, setMembers] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const data = await getMembers({ search, category, page });
      setMembers(data.members || []);
      setTotal(data.total || 0);
    } catch {
      setMembers([]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchMembers(); }, [search, category, page]);
  useEffect(() => { getMemberCategories().then(setCategories).catch(() => {}); }, []);

  const totalPages = Math.ceil(total / 20);

  return (
    <>
      {/* Hero */}
      <section className="bg-fc-dark text-white py-16 md:py-20">
        <div className="container-fc text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Vara medlemmar</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            FilmCentrum ar ett kooperativ som ags av vara medlemmar -- oberoende filmskapare fran hela Sverige.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-16 md:top-20 z-40">
        <div className="container-fc py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Sok medlem..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-red focus:border-transparent"
            />
            <select
              value={category}
              onChange={(e) => { setCategory(e.target.value); setPage(1); }}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-red bg-white"
            >
              <option value="">Alla kategorier</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-gray-50">
        <div className="container-fc">
          <p className="text-gray-500 mb-6">{total} medlemmar</p>

          {loading ? (
            <div className="text-center py-12 text-gray-400">Laddar...</div>
          ) : members.length === 0 ? (
            <div className="text-center py-12 text-gray-400">Inga medlemmar hittades.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((m: any) => (
                <Link
                  key={m.id}
                  to={`/medlem/${m.id}`}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-fc-red/10 text-fc-red flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {(m.name || '?')[0].toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-fc-red transition-colors truncate">
                        {m.name}
                      </h3>
                      {m.city && <p className="text-sm text-gray-500">{m.city}</p>}
                      {m.categories && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {(typeof m.categories === 'string' ? m.categories.split(',') : m.categories)
                            .slice(0, 3)
                            .map((c: string, i: number) => (
                              <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                {c.trim()}
                              </span>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm disabled:opacity-40 hover:bg-gray-50"
              >
                Foregaende
              </button>
              <span className="px-4 py-2 text-sm text-gray-600">
                Sida {page} av {totalPages}
              </span>
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm disabled:opacity-40 hover:bg-gray-50"
              >
                Nasta
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
