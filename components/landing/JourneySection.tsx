import { BriefcaseBusiness, CalendarDays, Clock3, Map, Plane, Sparkles, UsersRound } from 'lucide-react';
import { services } from '@/content/services';
import { ResponsiveCopy } from '@/components/ui/ResponsiveCopy';
import { SectionHeading } from '@/components/ui/SectionHeading';

const icons = { calendar: CalendarDays, plane: Plane, map: Map, clock: Clock3, briefcase: BriefcaseBusiness, sparkles: Sparkles, users: UsersRound };

export function JourneySection() {
  return (
    <section className="section section--cream" id="services" aria-labelledby="journey-title">
      <div className="container-shell">
        <SectionHeading eyebrow="Choose your journey" title="What’s Your Journey?" description="Mulai dari alasan Anda bepergian. Kami membantu mengarahkan kelas kendaraan dan model layanan yang relevan." />
        <div className="journey-grid">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <article className="journey-card" key={service.slug}>
                <div className="journey-card__top"><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                <h3>{service.shortName}</h3>
                <p><ResponsiveCopy copy={service.copy} /></p>
                <ul>{service.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                <a href="#booking">Choose {service.shortName} <span aria-hidden="true">↗</span></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
