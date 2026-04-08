import NewsletterBanner from '../components/NewsletterBanner';

export default function OmOss() {
  return (
    <>
      <section className="bg-fc-dark text-white py-16 md:py-24">
        <div className="container-fc text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Om FilmCentrum</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            FilmCentrum ar ett rikstackande kooperativ for oberoende filmskapare.
            Sedan 1968 har vi arbetat for att sprida kvalitetsfilm till hela Sverige.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fc max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Var historia</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              FilmCentrum grundades 1968 som en reaktion mot den kommersiella filmindustrins dominans.
              Oberoende filmskapare samlades for att skapa en alternativ distributionskanal for film
              som inte fick plats i de stora biografkedjorna. Sedan dess har FilmCentrum vuxit till
              att bli Sveriges storsta kooperativ for oberoende film.
            </p>

            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Vad vi gor</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vi distribuerar oberoende svensk och internationell film till skolor, bibliotek,
              foreningar och kulturinstitutioner over hela Sverige. Vara filmer berattar viktiga
              historier om identitet, miljo, demokrati, mangfald och kulturarv.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vi erbjuder ocksa pedagogiskt material, filmsamtal och workshops for att fordjupa
              filmupplevelsen och skapa meningsfulla samtal kring filmens teman.
            </p>

            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Vara verksamhetsomraden</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: 'Filmdistribution',
                  desc: 'Vi distribuerar over 300 filmer till skolor, bibliotek och kulturinstitutioner. Vara filmer finnas tillgangliga for streaming, nedladdning och fysisk visning.',
                },
                {
                  title: 'Skolbio',
                  desc: 'Vi arrangerar skolbiovisningar med tillhorande pedagogiskt material. Filmerna ar utvalda for att passa olika aldersgrupper och amnesomraden.',
                },
                {
                  title: 'Filmsamtal & Workshops',
                  desc: 'Vi erbjuder filmsamtal med filmskapare, regissorer och amnesexperter. Vara workshops ger deltagare verktyg for att forsta och analysera film.',
                },
                {
                  title: 'Medlemsskap',
                  desc: 'Som medlem i FilmCentrum far du tillgang till ett natverk av filmskapare, mojlighet att distribuera dina filmer och delta i vara evenemang.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Regionala kontor</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FilmCentrum har regionala kontor over hela Sverige for att sakerstalla att film nar ut till alla delar av landet:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {['Stockholm', 'Goteborg', 'Malmo', 'Uppsala', 'Umea', 'Lulea', 'Vaxjo', 'Orebro'].map((city) => (
                <div key={city} className="bg-fc-red/5 text-fc-red text-center py-3 rounded-lg font-medium text-sm">
                  {city}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Organisation</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              FilmCentrum Riks ar den nationella paraplyorganisationen som samordnar
              arbetet mellan de regionala kontoren. Vi ar organiserade som ett kooperativ
              dar varje medlem har en rost.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Organisationsform:</span><br/><strong>Kooperativ forening</strong></div>
                <div><span className="text-gray-500">Org.nr:</span><br/><strong>802437-2172</strong></div>
                <div><span className="text-gray-500">Grundat:</span><br/><strong>1968</strong></div>
                <div><span className="text-gray-500">Huvudkontor:</span><br/><strong>Bredgrand 2, Stockholm</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
