import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section-padding text-center">
      <div className="container-fc max-w-lg">
        <p className="text-6xl font-bold text-fc-red mb-4">404</p>
        <h1 className="text-2xl font-display font-bold text-gray-900 mb-4">Sidan hittades inte</h1>
        <p className="text-gray-600 mb-8">Den har sidan finns inte langre eller sa har du skrivit fel adress.</p>
        <Link to="/" className="btn-primary">Ga till startsidan</Link>
      </div>
    </section>
  );
}
