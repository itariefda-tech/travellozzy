import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { MobileMenu } from '@/components/navigation/MobileMenu';

export function Header() {
  return (
    <header className="site-header">
      <div className="container-shell site-header__inner">
        <a className="wordmark" href="#top" aria-label="TRAVELOZY — beranda">
          TRAVELOZY
        </a>
        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="#services">Services</a>
          <Link href="/fleet">Fleet</Link>
          <a href="#vacation">Vacation</a>
          <a href="#event">Event</a>
          <a href="#corporate">Corporate</a>
          <a className="button-link button-link--gold" href="#booking">
            Book Your Ride <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
