import { Link } from 'react-router-dom';

interface Film {
  id: string | number;
  title: string;
  director?: string;
  year?: string | number;
  age?: string;
  image?: string;
  poster_url?: string;
  synopsis?: string;
}

export default function FilmCard({ film }: { film: Film }) {
  const img = film.image || film.poster_url;
  const poster = img ? `/fc${img.startsWith('/') ? '' : '/'}${img}` : '/filmcentrum/placeholder.svg';

  return (
    <Link
      to={`/film/${film.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="aspect-[2/3] overflow-hidden bg-gray-100 relative">
        <img
          src={poster}
          alt={film.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = '/filmcentrum/placeholder.svg'; }}
        />
        {film.age && (
          <span className="absolute top-2 right-2 bg-fc-red text-white text-xs font-bold px-2 py-1 rounded">
            {film.age}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-fc-red transition-colors line-clamp-2">
          {film.title}
        </h3>
        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
          {film.director && <span>{film.director}</span>}
          {film.director && film.year && <span>&middot;</span>}
          {film.year && <span>{film.year}</span>}
        </div>
      </div>
    </Link>
  );
}
