import { FeaturedFleet } from '@/components/landing/FeaturedFleet';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export const metadata = {
  title: 'Our Fleet',
  description: 'Jelajahi available fleet TRAVELOZY untuk kebutuhan premium, family, SUV, dan group.',
};

export default function FleetPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="fleet-page-hero">
          <div className="container-shell"><p className="eyebrow">TRAVELOZY mobility</p><h1>Our Fleet</h1><p>Available fleet untuk berbagai kebutuhan perjalanan. Ketersediaan aktual dikonfirmasi saat inquiry.</p></div>
        </section>
        <FeaturedFleet showAllByDefault showViewAllLink={false} />
      </main>
      <Footer />
    </>
  );
}
