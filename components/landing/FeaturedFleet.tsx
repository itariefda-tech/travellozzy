'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { featuredFleetSlugs, fleet, fleetCategories } from '@/content/fleet';
import type { VehicleCategory } from '@/types/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';

type FeaturedFleetProps = {
  showAllByDefault?: boolean;
  showViewAllLink?: boolean;
};

const categoryLabel = (category: VehicleCategory) =>
  fleetCategories.find((item) => item.value === category)?.label ?? category;

export function FeaturedFleet({ showAllByDefault = false, showViewAllLink = true }: FeaturedFleetProps) {
  const [category, setCategory] = useState<'all' | VehicleCategory>('all');
  const featuredFleet = featuredFleetSlugs
    .map((slug) => fleet.find((vehicle) => vehicle.slug === slug))
    .filter((vehicle): vehicle is (typeof fleet)[number] => Boolean(vehicle));
  const filtered = category === 'all'
    ? showAllByDefault ? fleet : featuredFleet
    : fleet.filter((vehicle) => vehicle.category === category);

  return (
    <section className="section section--white" id="fleet" aria-labelledby="fleet-title">
      <div className="container-shell">
        <SectionHeading eyebrow={showAllByDefault ? 'Our Fleet' : 'Available Fleet'} title={showAllByDefault ? 'Find the right ride for your journey.' : 'Find Your Perfect Ride'} description={showAllByDefault ? 'Seluruh kendaraan yang tersedia untuk inquiry. Detail dan ketersediaan aktual dikonfirmasi saat inquiry.' : 'Pilihan kendaraan untuk kebutuhan premium, family, SUV, dan group. Ketersediaan aktual dikonfirmasi saat inquiry.'} />
        <fieldset className="filter-row" aria-label="Filter kategori armada">
          {fleetCategories.map((item) => <button type="button" key={item.value} className={category === item.value ? 'is-active' : ''} aria-pressed={category === item.value} onClick={() => setCategory(item.value)}>{item.label}</button>)}
        </fieldset>
        {filtered.length ? (
          <div className="fleet-grid">
            {filtered.map((vehicle) => (
              <article className="fleet-card" key={vehicle.id}>
                <div className="fleet-card__media"><Image src={vehicle.image} alt="Visual ilustratif armada TRAVELOZY" width="800" height="600" loading="lazy" /><span>{categoryLabel(vehicle.category)}</span></div>
                <div className="fleet-card__body">
                  <h3>{vehicle.name}</h3><p>{vehicle.recommendedFor.join(' · ')}</p>
                  <div className="fleet-card__footer"><strong>Ask for Quote</strong><Link href={`/?vehicle=${vehicle.slug}#booking`} aria-label={`Book ${vehicle.name}`}>Book This Car <ArrowUpRight aria-hidden="true" /></Link></div>
                </div>
              </article>
            ))}
          </div>
        ) : <div className="empty-state"><h3>Belum ada kendaraan pada kategori ini.</h3><p>Hubungi TRAVELOZY untuk rekomendasi kendaraan lain.</p><a className="button-link button-link--gold" href="#booking">Start an inquiry</a></div>}
        {showViewAllLink && <Link className="fleet-view-all text-link" href="/fleet">View all available fleet <ArrowUpRight aria-hidden="true" /></Link>}
      </div>
    </section>
  );
}
