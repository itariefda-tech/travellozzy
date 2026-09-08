import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 — Route not found</p>
      <h1>Perjalanan ini tidak ditemukan.</h1>
      <p>Kembali ke beranda atau mulai inquiry untuk menemukan layanan yang sesuai.</p>
      <div><Link className="button-link button-link--gold" href="/">Kembali ke beranda</Link><Link className="button-link button-link--outline-light" href="/#booking">Book Your Ride</Link></div>
    </main>
  );
}
