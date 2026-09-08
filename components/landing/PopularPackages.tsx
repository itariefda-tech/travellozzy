import { ArrowUpRight } from 'lucide-react';
import { packages } from '@/content/packages';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function PopularPackages() {
  return (
    <section className="section section--navy" id="packages" aria-labelledby="package-title">
      <div className="container-shell">
        <SectionHeading tone="dark" eyebrow="Built around your plans" title="Popular Journeys" description="Pilih konteks perjalanan, lalu sesuaikan kendaraan, durasi, rute, dan add-on saat konfirmasi." />
        <div className="package-grid">
          {packages.map((item, index) => (
            <article className="package-card" key={item.id}>
              <span className="package-card__index">0{index + 1}</span><p>{item.category}</p><h3>{item.title}</h3><p>{item.shortDescription}</p>
              <ul>{item.includes.map((include) => <li key={include}>{include}</li>)}</ul>
              <div><strong>Price on confirmation</strong><a href="#booking" aria-label={`Inquiry ${item.title}`}><ArrowUpRight /></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
