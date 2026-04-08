import { useState } from 'react';
import { subscribeNewsletter } from '../api';

export default function Prenumeration() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await subscribeNewsletter(email, name);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="bg-fc-dark text-white py-16 md:py-20">
        <div className="container-fc text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Nyhetsbrev</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Prenumerera pa FilmCentrums nyhetsbrev och fa de senaste nyheterna direkt i din inkorg.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fc max-w-lg">
          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">&#x2709;</div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Tack for din prenumeration!</h2>
              <p className="text-gray-600">Du kommer nu att fa vara nyhetsbrev till {email}.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Fyll i dina uppgifter</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Namn (valfritt)</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ditt namn"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-postadress</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="din@epost.se"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-red"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center"
                >
                  {status === 'loading' ? 'Registrerar...' : 'Prenumerera'}
                </button>
                {status === 'error' && (
                  <p className="text-red-600 text-sm text-center">Nagot gick fel. Forsok igen.</p>
                )}
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Vad du kan forvanta dig:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-fc-red">&#x2713;</span> Nyheter om nya filmer i katalogen</li>
                  <li className="flex gap-2"><span className="text-fc-red">&#x2713;</span> Information om kommande evenemang</li>
                  <li className="flex gap-2"><span className="text-fc-red">&#x2713;</span> Tips om skolbio och pedagogiskt material</li>
                  <li className="flex gap-2"><span className="text-fc-red">&#x2713;</span> Intervjuer med filmskapare</li>
                </ul>
                <p className="text-xs text-gray-400 mt-4">Du kan avslutnka din prenumeration nar som helst.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
