import { ArrowUpRight } from 'lucide-react';

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
          <p className="footer-note">Nomor WhatsApp dan social profile perlu dikonfigurasi sebelum publikasi bisnis.</p>
        </div>
      </div>
      <div className="container-shell footer-bottom"><span>© {new Date().getFullYear()} TRAVELOZY</span><span>Mobility &amp; Travel Service</span></div>
    </footer>
  );
}
