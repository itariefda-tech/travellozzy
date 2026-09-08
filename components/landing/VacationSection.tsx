import { ArrowUpRight } from 'lucide-react';
import { destinations } from '@/content/destinations';
import { ResponsiveCopy } from '@/components/ui/ResponsiveCopy';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from 'next/image';

export function VacationSection() {
  return (
    <section className="section section--cream" id="vacation" aria-labelledby="vacation-title">
      <div className="container-shell">
        <SectionHeading eyebrow="Vacation" title="Where To Next?" description="Private trip untuk keluarga, pasangan, sahabat, atau rombongan—dibangun mengikuti rute dan ritme perjalanan Anda." />
        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <article className={`destination-card ${index === 0 ? 'destination-card--featured' : ''}`} key={destination.slug}>
              <Image src={destination.image} alt={`Visual perjalanan menuju ${destination.name}`} width="1200" height="750" loading="lazy" />
              <div><p>{destination.region}</p><h3>{destination.name}</h3><p><ResponsiveCopy copy={destination.copy} /></p><a href="#booking">Explore <ArrowUpRight /></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
