import Image from 'next/image';
import { ArrowRight, BriefcaseBusiness, CarFront, Check, Handshake, MapPin, Plane, ShieldCheck } from 'lucide-react';

const reasons = [
  ['Reliable Fleet', 'Kelas kendaraan dipilih sesuai kebutuhan perjalanan.', CarFront],
  ['Professional Chauffeur', 'Perjalanan premium dan executive mengutamakan layanan chauffeur.', ShieldCheck],
  ['Clear Pricing', 'Komponen biaya dibahas sebelum perjalanan dikonfirmasi.', Check],
  ['Flexible Journey', 'Harian, airport, luar kota, event, hingga corporate.', MapPin],
];

export function WhyTravelozy() {
  return (
    <section className="section section--white" id="why" aria-labelledby="why-title">
      <div className="container-shell why-layout">
        <div><p className="eyebrow">Journey with confidence</p><h2 id="why-title">A thoughtful ride, from first message to arrival.</h2><p>TRAVELOZY membantu menerjemahkan kebutuhan perjalanan menjadi kelas kendaraan dan model layanan yang lebih tepat.</p></div>
        <div className="reason-grid">{reasons.map(([title, copy, Icon]) => <article key={String(title)}><Icon aria-hidden="true" /><h3>{String(title)}</h3><p>{String(copy)}</p></article>)}</div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [['01', 'Choose Your Journey'], ['02', 'Choose Your Vehicle'], ['03', 'Confirm Your Inquiry'], ['04', 'Enjoy The Ride']];
  return (
    <section className="process-section" aria-labelledby="process-title"><div className="container-shell"><p className="eyebrow">Simple by design</p><h2 id="process-title">Choose. Book. Confirm. Go.</h2><ol>{steps.map(([number, label]) => <li key={number}><span>{number}</span><strong>{label}</strong><ArrowRight aria-hidden="true" /></li>)}</ol></div></section>
  );
}

export function AirportTransfer() {
  return (
    <section className="feature-band feature-band--airport" aria-labelledby="airport-title"><div className="container-shell feature-band__inner"><div className="feature-icon"><Plane aria-hidden="true" /></div><div><p className="eyebrow">Transfer</p><h2 id="airport-title">Airport Transfer Made Easy</h2><p>Soekarno-Hatta, Halim, hotel, home, atau office. Atur pickup private untuk individual, keluarga, guest, atau group.</p></div><a className="button-link button-link--gold" href="#booking">Book Airport Transfer <ArrowRight /></a></div></section>
  );
}

export function WeddingEvent() {
  return (
    <section className="editorial-section" aria-labelledby="wedding-title"><div className="container-shell editorial-grid"><div><p className="eyebrow">Wedding &amp; Event</p><h2 id="wedding-title">Your special moment deserves the perfect ride.</h2><p>Dari wedding hingga graduation, susun perjalanan untuk pasangan, keluarga, VIP, atau tamu dengan pilihan kelas premium dan luxury.</p><div className="chip-row">{['Wedding', 'Engagement', 'Graduation', 'Birthday', 'Corporate'].map((item) => <span key={item}>{item}</span>)}</div><a className="text-link" href="#booking">Plan your event <ArrowRight /></a></div><Image src="/images/editorial/service-wedding.webp" alt="Visual editorial kendaraan dan chauffeur untuk acara istimewa" width="800" height="1000" loading="lazy" /></div></section>
  );
}

export function CorporateSection() {
  const items = ['Executive Transport', 'Guest Transportation', 'Corporate Event', 'Monthly Rental', 'Operational Vehicle', 'Roadshow'];
  return (
    <section className="corporate-section" id="corporate" aria-labelledby="corporate-title"><div className="container-shell corporate-grid"><div><BriefcaseBusiness aria-hidden="true" /><p className="eyebrow">TRAVELOZY Business</p><h2 id="corporate-title">Transportation that works as professionally as you do.</h2><p>Inquiry untuk executive, guest, operational, event, airport, atau perjalanan lintas kota.</p><a className="button-link button-link--gold" href="#booking">Corporate Inquiry <ArrowRight /></a></div><ul>{items.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></div></section>
  );
}

export function PartnerSection() {
  return (
    <section className="partner-section" aria-labelledby="partner-title"><div className="container-shell partner-inner"><Handshake aria-hidden="true" /><div><p className="eyebrow">TRAVELOZY Partner</p><h2 id="partner-title">Grow with every journey.</h2><p>Partnership inquiry untuk hotel, wedding organizer, event organizer, travel agent, corporate, dan tour guide.</p></div><a className="text-link" href="#booking">Become a Partner <ArrowRight /></a></div></section>
  );
}
