import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OmOss from './pages/OmOss';
import Medlemmar from './pages/Medlemmar';
import MedlemProfil from './pages/MedlemProfil';
import Filmkatalog from './pages/Filmkatalog';
import FilmDetalj from './pages/FilmDetalj';
import Kontakt from './pages/Kontakt';
import Prenumeration from './pages/Prenumeration';
import Skolbio from './pages/Skolbio';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/medlemmar" element={<Medlemmar />} />
          <Route path="/medlem/:id" element={<MedlemProfil />} />
          <Route path="/filmer" element={<Filmkatalog />} />
          <Route path="/film/:id" element={<FilmDetalj />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/prenumeration" element={<Prenumeration />} />
          <Route path="/skolbio" element={<Skolbio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
