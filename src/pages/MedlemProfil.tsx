import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMemberProfile } from '../api';

export default function MedlemProfil() {
  const { id } = useParams();
  const [member, setMember] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getMemberProfile(parseInt(id))
        .then(setMember)
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div className="section-padding text-center text-gray-400">Laddar...</div>;
  if (!member) return <div className="section-padding text-center text-gray-400">Medlem hittades inte.</div>;

  const cats = member.categories
    ? (typeof member.categories === 'string' ? member.categories.split(',') : member.categories)
    : [];

  return (
    <>
      <section className="bg-fc-dark text-white py-12">
        <div className="container-fc">
          <Link to="/medlemmar" className="text-gray-400 hover:text-white text-sm mb-4 inline-block">&larr; Tillbaka till medlemmar</Link>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-fc-red/20 text-fc-red flex items-center justify-center font-bold text-3xl flex-shrink-0">
              {(member.name || '?')[0].toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">{member.name}</h1>
              {member.city && <p className="text-gray-300 mt-1">{member.city}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fc max-w-3xl">
          {cats.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Kompetenser</h2>
              <div className="flex flex-wrap gap-2">
                {cats.map((c: string, i: number) => (
                  <span key={i} className="px-3 py-1.5 bg-fc-red/10 text-fc-red rounded-full text-sm font-medium">
                    {c.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {member.introduction && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Presentation</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{member.introduction}</p>
            </div>
          )}

          {member.cv && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">CV</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{member.cv}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            {member.vimeo_url && (
              <a href={member.vimeo_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                Vimeo
              </a>
            )}
            {member.youtube_url && (
              <a href={member.youtube_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium">
                YouTube
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
