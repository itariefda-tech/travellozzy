'use client';

import { useState } from 'react';
import { ArrowUpRight, Users } from 'lucide-react';
import { fleet, fleetCategories } from '@/content/fleet';
import type { VehicleCategory } from '@/types/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from 'next/image';

export function FeaturedFleet() {
  const [category, setCategory] = useState<'all' | VehicleCategory>('all');
  const filtered = category === 'all' ? fleet.filter((vehicle) => vehicle.isFeatured) : fleet.filter((vehicle) => vehicle.category === category);

  return (
    <section className="section section--white" id="fleet" aria-labelledby="fleet-title">
      <div className="container-shell">
        <SectionHeading eyebrow="Fleet by need" title="Find Your Perfect Ride" description="Jelajahi kelas kendaraan sebagai panduan awal. Unit dan ketersediaan aktual dikonfirmasi pada saat inquiry." />
        <fieldset className="filter-row" aria-label="Filter kategori armada">
          {fleetCategories.map((item) => <button type="button" key={item.value} className={category === item.value ? 'is-active' : ''} aria-pressed={category === item.value} onClick={() => setCategory(item.value)}>{item.label}</button>)}
        </fieldset>
        {filtered.length ? (
          <div className="fleet-grid">
            {filtered.map((vehicle) => (
              <article className="fleet-card" key={vehicle.id}>
                <div className="fleet-card__media"><Image src={vehicle.image} alt={`Visual ilustratif kelas ${vehicle.name}`} width="800" height="600" loading="lazy" /><span>{vehicle.category}</span></div>
                <div className="fleet-card__body">
                  <h3>{vehicle.name}</h3><p>{vehicle.examples}</p>
                  <div className="fleet-meta"><span><Users aria-hidden="true" /> {vehicle.seats}</span><span>{vehicle.chauffeurAvailable ? 'Chauffeur' : 'Self drive'}</span></div>
                  <div className="fleet-card__footer"><strong>Price on confirmation</strong><a href="#booking">Book <ArrowUpRight aria-hidden="true" /></a></div>
                </div>
              </article>
            ))}
          </div>
        ) : <div className="empty-state"><h3>Belum ada kelas pada kategori ini.</h3><p>Hubungi TRAVELOZZY untuk rekomendasi kendaraan lain.</p><a className="button-link button-link--gold" href="#booking">Start an inquiry</a></div>}
      </div>
    </section>
  );
}
