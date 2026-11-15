import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, formatWhatsAppNumber } from '@/lib/integrations/whatsapp';

const footerGroups = [
  { title: 'Services', links: ['Daily', 'Airport Transfer', 'Vacation', 'Wedding & Event', 'Luxury'] },
  { title: 'Fleet', links: ['Economy', 'Family', 'SUV', 'Premium', 'Group'] },
  { title: 'Company', links: ['About', 'Corporate', 'Partnership'] },
];

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container-shell footer-grid">
        <div className="footer-brand">
          <p className="wordmark">TRAVELOZY</p>
          <p>Drive Your Moment.<br />Jakarta &amp; Jabodetabek<br />Intercity trips available.</p>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h2>{group.title}</h2>
            <ul>{group.links.map((link) => <li key={link}><a href="#booking">{link}</a></li>)}</ul>
          </div>
        ))}
        <div className="footer-group">
          <h2>Start a journey</h2>
          <a className="footer-inquiry" href="#booking">Book Your Ride <ArrowUpRight size={17} /></a>
          <a
            className="footer-whatsapp"
            href={buildWhatsAppUrl('Halo TRAVELOZY, saya ingin konsultasi perjalanan.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat WhatsApp ${formatWhatsAppNumber()}`}
          >
            <MessageCircle size={16} aria-hidden="true" /> {formatWhatsAppNumber()}
          </a>
        </div>
      </div>
      <div className="container-shell footer-bottom"><span>© {new Date().getFullYear()} TRAVELOZY</span><span>Mobility &amp; Travel Service</span></div>
    </footer>
  );
}
