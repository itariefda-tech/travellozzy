import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { MobileMenu } from '@/components/navigation/MobileMenu';

export function Header() {
  return (
    <header className="site-header">
      <div className="container-shell site-header__inner">
        <Link className="wordmark" href="/#top" aria-label="TRAVELOZY — beranda">
          TRAVELOZY
        </Link>
        <nav className="site-nav" aria-label="Navigasi utama">
          <Link href="/#services">Services</Link>
          <Link href="/fleet">Fleet</Link>
          <Link href="/#vacation">Vacation</Link>
          <Link href="/#event">Event</Link>
          <Link href="/#corporate">Corporate</Link>
          <Link className="button-link button-link--gold" href="/#booking">
            Book Your Ride <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
