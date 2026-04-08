import { useState } from 'react';
import { subscribeNewsletter } from '../api';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await subscribeNewsletter(email);
      setStatus('success');
      setMessage('Tack! Du ar nu prenumerant pa vart nyhetsbrev.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Nagot gick fel. Forsok igen.');
    }
  };

  return (
    <section className="bg-fc-dark text-white section-padding">
      <div className="container-fc text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Holl dig uppdaterad</h2>
        <p className="text-gray-300 mb-8">Prenumerera pa vart nyhetsbrev for att fa de senaste nyheterna om filmer, evenemang och skolbio direkt i din inkorg.</p>

        {status === 'success' ? (
          <div className="bg-green-600/20 border border-green-500 text-green-300 rounded-lg p-4">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Din e-postadress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fc-red"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary whitespace-nowrap"
            >
              {status === 'loading' ? 'Skickar...' : 'Prenumerera'}
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-red-400 mt-3 text-sm">{message}</p>}
      </div>
    </section>
  );
}
