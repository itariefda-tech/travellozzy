import { ArrowDownRight, MessageCircle } from 'lucide-react';

const journeyCategories = [
  'Daily',
  'Airport',
  'Vacation',
  'Wedding',
  'Corporate',
  'Luxury',
];

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <picture className="hero__media">
        <source
          media="(max-width: 767px)"
          srcSet="/images/editorial/hero-luxury-mobile.avif"
        />
        <img
          src="/images/editorial/hero-luxury-desktop.avif"
          alt="Kendaraan premium berwarna hitam di area kedatangan kota pada malam hari"
          width="1600"
          height="900"
          fetchPriority="high"
        />
      </picture>
      <div className="hero__veil" aria-hidden="true" />
      <div className="container-shell hero__content">
        <p className="eyebrow">Mobility &amp; Travel Service</p>
        <h1 id="hero-title">Drive Your Moment.</h1>
        <p className="hero__copy hero__copy--desktop">
          Dari Avanza dan Xpander untuk perjalanan harian hingga Alphard,
          Mercedes-Benz, Denza, dan Hiace untuk kebutuhan premium dan group transportation.
        </p>
        <p className="hero__copy hero__copy--mobile">
          Armada reguler, premium, luxury, SUV, dan group.
        </p>
        <div className="hero__actions">
          <a className="button-link button-link--gold" href="#booking">
            Book Your Ride <ArrowDownRight size={17} aria-hidden="true" />
          </a>
          <a className="button-link button-link--outline-light" href="#contact">
            <MessageCircle size={17} aria-hidden="true" /> WhatsApp
          </a>
        </div>
        <ul className="hero__categories" aria-label="Kategori perjalanan">
          {journeyCategories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
