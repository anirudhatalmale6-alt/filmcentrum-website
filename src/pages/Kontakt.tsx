import { useState } from 'react';

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="bg-fc-dark text-white py-16 md:py-20">
        <div className="container-fc text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Kontakta oss</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Vi hjalper dig garna med fragor om filmer, bokningar, medlemskap och mycket mer.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fc">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Kontaktuppgifter</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-fc-red/10 text-fc-red rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                    &#x1F4CD;
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adress</h3>
                    <p className="text-gray-600">FilmCentrum Riks<br/>Bredgrand 2<br/>111 30 Stockholm</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-fc-red/10 text-fc-red rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                    &#x2709;
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">E-post</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@filmcentrum.se" className="text-fc-red hover:underline">info@filmcentrum.se</a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">Allman information</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-fc-red/10 text-fc-red rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                    &#x1F3AC;
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Distribution</h3>
                    <p className="text-gray-600">
                      <a href="mailto:distribution@filmcentrum.se" className="text-fc-red hover:underline">distribution@filmcentrum.se</a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">Bokningar och filmfragor</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-fc-red/10 text-fc-red rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                    &#x1F3EB;
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Skolbio</h3>
                    <p className="text-gray-600">
                      <a href="mailto:skolbio@filmcentrum.se" className="text-fc-red hover:underline">skolbio@filmcentrum.se</a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">Skolvisningar och pedagogiskt material</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Skicka meddelande</h2>

              {sent ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Tack for ditt meddelande!</h3>
                  <p className="text-sm">Vi aterkomnmer till dig sa snart som mojligt.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Namn</label>
                    <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-red" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
                    <input type="email" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-red" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amne</label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-red bg-white">
                      <option>Allman fraga</option>
                      <option>Boka filmvisning</option>
                      <option>Skolbio</option>
                      <option>Medlemskap</option>
                      <option>Fakturor & betalning</option>
                      <option>Ovrigt</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meddelande</label>
                    <textarea required rows={5} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fc-red resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">Skicka meddelande</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
