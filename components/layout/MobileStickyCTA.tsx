import { CalendarCheck, MessageCircle } from 'lucide-react';

export function MobileStickyCTA() {
  return (
    <aside className="mobile-sticky" aria-label="Aksi cepat">
      <a href="#booking"><MessageCircle aria-hidden="true" /> WhatsApp</a>
      <a href="#booking"><CalendarCheck aria-hidden="true" /> Book Your Ride</a>
    </aside>
  );
}
