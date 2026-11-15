import { CalendarCheck, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/integrations/whatsapp';

export function MobileStickyCTA() {
  return (
    <aside className="mobile-sticky" aria-label="Aksi cepat">
      <a
        href={buildWhatsAppUrl('Halo TRAVELOZY, saya ingin tanya ketersediaan dan reservasi perjalanan.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp TRAVELOZY"
      >
        <MessageCircle aria-hidden="true" /> WhatsApp
      </a>
      <a href="#booking"><CalendarCheck aria-hidden="true" /> Book Your Ride</a>
    </aside>
  );
}
