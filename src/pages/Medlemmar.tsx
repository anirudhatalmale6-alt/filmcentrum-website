import { useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = '/fc/api';
const SWISH_NUMBER = '1234567890'; // TODO: Replace with real Swish number

type Step = 'info' | 'form' | 'swish' | 'done';

interface SwishResult {
  swish_reference: string;
  amount: number;
  membership_type: string;
}

export default function Medlemmar() {
  const [showLogin, setShowLogin] = useState(false);
  const [step, setStep] = useState<Step>('info');
  const [membershipType, setMembershipType] = useState<'new' | 'renewal'>('new');
  const [swishResult, setSwishResult] = useState<SwishResult | null>(null);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: '', email: '', phone: '', bio: '', portfolio_url: ''
  });

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/members/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, membership_type: membershipType })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Nagot gick fel');
      setSwishResult(data);
      setStep('swish');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const startApplication = (type: 'new' | 'renewal') => {
    setMembershipType(type);
    setStep('form');
    setTimeout(() => {
      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
                    <input type="email" placeholder="din@epost.se" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fc-red focus:border-fc-red outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Losenord</label>
                    <input type="password" placeholder="Ditt losenord" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fc-red focus:border-fc-red outline-none" />
                  </div>
                  <button type="submit" className="w-full btn-primary !py-3">Logga in</button>
                  <p className="text-center text-sm text-gray-500">
                    Inloggning kommer snart. <Link to="/kontakt" className="text-fc-red hover:underline">Kontakta oss</Link> for fragor.
                  </p>
                </form>
                <button onClick={() => setShowLogin(false)} className="mt-3 text-sm text-gray-400 hover:text-gray-600 w-full text-center">Stang</button>
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
              { icon: '🎬', title: 'Sprid din film', desc: 'Fa din film distribuerad genom FC Distribution till skolor, bibliotek och kulturinstitutioner over hela Sverige.' },
              { icon: '🌐', title: 'Synlighet', desc: 'Din film och profil visas pa FC Distribution med egen filmsida, trailer och pedagogiskt material.' },
              { icon: '🤝', title: 'Natverk', desc: 'Bli del av Sveriges storsta kooperativ for oberoende filmskapare. Traffa kollegor och samarbeta pa projekt.' },
              { icon: '🏫', title: 'Skolbio', desc: 'Dina filmer kan visas i skolbioprogram runt om i landet med tillhorande pedagogiskt material.' },
              { icon: '💰', title: 'Intakter', desc: 'Fa ersattning nar dina filmer visas. FilmCentrum forhandlar rattigheter och fordelar intakter till medlemmarna.' },
              { icon: '📣', title: 'Marknadsforing', desc: 'FilmCentrum marknadfor dina filmer aktivt till skolor, bibliotek, festivaler och andra visningsplatser.' },
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

      {/* Membership pricing + Apply */}
      <section className="section-padding bg-white" id="apply-form">
        <div className="container-fc">
          <div className="text-center mb-12">
            <p className="text-fc-red font-medium mb-2 uppercase text-sm tracking-wider">Medlemsavgift</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Vad kostar det?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* New member */}
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 p-8 text-center shadow-lg relative transition-all ${step === 'form' && membershipType === 'new' ? 'border-fc-red ring-2 ring-fc-red/20' : 'border-fc-red'}`}>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fc-red text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Ny medlem</span>
              <div className="flex items-baseline justify-center gap-1 mb-2 mt-2">
                <span className="text-5xl font-bold text-gray-900">200</span>
                <span className="text-xl text-gray-500">kr/ar</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">Forsta aret</p>
              <ul className="text-left space-y-3 mb-8">
                {['Distribution genom FC Distribution', 'Egen filmsida med trailer och info', 'Synlighet mot skolor och bibliotek', 'Intakter fran filmvisningar', 'Deltagande i skolbioprogram', 'Natverk med oberoende filmskapare', 'Rostrett pa arsmote'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-fc-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => startApplication('new')} className="btn-primary w-full !py-3">
                Bli medlem
              </button>
            </div>

            {/* Renewal */}
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 p-8 text-center shadow-lg transition-all ${step === 'form' && membershipType === 'renewal' ? 'border-fc-red ring-2 ring-fc-red/20' : 'border-gray-200'}`}>
              <p className="text-gray-500 font-medium uppercase text-sm tracking-wider mb-2 mt-2">Fornyelse</p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-gray-900">100</span>
                <span className="text-xl text-gray-500">kr/ar</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">Befintliga medlemmar</p>
              <ul className="text-left space-y-3 mb-8">
                {['Fortsatt distribution av dina filmer', 'Uppdaterad filmsida och profil', 'Synlighet mot skolor och bibliotek', 'Intakter fran filmvisningar', 'Deltagande i skolbioprogram', 'Natverk med oberoende filmskapare', 'Rostrett pa arsmote'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-fc-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => startApplication('renewal')} className="btn-primary w-full !py-3 !bg-gray-800 hover:!bg-gray-700">
                Fornya medlemskap
              </button>
            </div>
          </div>

          {/* Application Form */}
          {step === 'form' && (
            <div className="max-w-xl mx-auto mt-12">
              <div className="bg-white rounded-2xl border-2 border-fc-red/20 p-8 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2 text-center">
                  {membershipType === 'new' ? 'Ansokan om medlemskap' : 'Fornya ditt medlemskap'}
                </h3>
                <p className="text-gray-500 text-sm text-center mb-6">
                  Fyll i dina uppgifter sa kontaktar vi dig.
                </p>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleApply} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Namn *</label>
                      <input
                        type="text" required value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Ditt fullstandiga namn"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fc-red focus:border-fc-red outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-post *</label>
                      <input
                        type="email" required value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="din@epost.se"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fc-red focus:border-fc-red outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel" value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="070-123 45 67"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fc-red focus:border-fc-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Om dig och dina filmer</label>
                    <textarea
                      value={form.bio}
                      onChange={e => setForm({ ...form, bio: e.target.value })}
                      placeholder="Beratta kort om dig sjalv och vilka filmer du har gjort..."
                      rows={3}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fc-red focus:border-fc-red outline-none resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio / Webbplats</label>
                    <input
                      type="url" value={form.portfolio_url}
                      onChange={e => setForm({ ...form, portfolio_url: e.target.value })}
                      placeholder="https://din-webbplats.se"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fc-red focus:border-fc-red outline-none"
                    />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button type="submit" disabled={submitting} className="btn-primary flex-1 !py-3">
                      {submitting ? 'Skickar...' : 'Skicka ansokan'}
                    </button>
                    <button type="button" onClick={() => setStep('info')} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                      Avbryt
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Swish Payment */}
          {step === 'swish' && swishResult && (
            <div className="max-w-md mx-auto mt-12">
              <div className="bg-white rounded-2xl border-2 border-green-200 p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Ansokan mottagen!</h3>
                <p className="text-gray-600 mb-6">Slutfor din ansokan genom att betala med Swish.</p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#50B848] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">Swish</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Swish-nummer</p>
                      <p className="text-2xl font-bold text-gray-900 font-mono">{SWISH_NUMBER}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Belopp</p>
                      <p className="text-2xl font-bold text-fc-red">{swishResult.amount} kr</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Meddelande (viktigt!)</p>
                      <p className="text-lg font-bold text-gray-900 font-mono bg-yellow-50 px-3 py-2 rounded border border-yellow-200">{swishResult.swish_reference}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                  <p className="text-sm text-blue-800">
                    <strong>Instruktioner:</strong><br />
                    1. Oppna Swish-appen pa din telefon<br />
                    2. Ange numret {SWISH_NUMBER}<br />
                    3. Ange beloppet {swishResult.amount} kr<br />
                    4. Skriv referensen <strong>{swishResult.swish_reference}</strong> i meddelandefaltet<br />
                    5. Bekrafta betalningen
                  </p>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Nar betalningen ar registrerad behandlar vi din ansokan och aterkommmer via e-post.
                </p>

                <button
                  onClick={() => { setStep('done'); }}
                  className="btn-primary w-full !py-3"
                >
                  Jag har betalat
                </button>
              </div>
            </div>
          )}

          {/* Confirmation */}
          {step === 'done' && (
            <div className="max-w-md mx-auto mt-12">
              <div className="bg-white rounded-2xl border-2 border-green-300 p-8 shadow-lg text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Tack!</h3>
                <p className="text-gray-600 mb-6">
                  Vi har tagit emot din ansokan och betalning. Vi granskar din ansokan och aterkommmer via e-post inom nagra dagar.
                </p>
                <Link to="/" className="btn-primary inline-block">
                  Tillbaka till startsidan
                </Link>
              </div>
            </div>
          )}
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
              { step: '1', title: 'Fyll i ansokan', desc: 'Klicka pa "Bli medlem" ovan och fyll i dina uppgifter. Beratta om dig och dina filmer.' },
              { step: '2', title: 'Betala via Swish', desc: 'Betala medlemsavgiften direkt via Swish. Ny medlem 200 kr/ar, fornyelse 100 kr/ar.' },
              { step: '3', title: 'Valkomna!', desc: 'Vi granskar din ansokan och nar den godkants laggs din profil och dina filmer upp pa FC Distribution.' },
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
