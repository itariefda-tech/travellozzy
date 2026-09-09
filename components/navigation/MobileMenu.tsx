'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const links = [
  ['Services', '/#services'],
  ['Fleet', '/fleet'],
  ['Vacation', '/#vacation'],
  ['Event', '/#event'],
  ['Corporate', '/#corporate'],
  ['About', '/#why'],
];

export function MobileMenu() {
  return (
    <div className="mobile-menu">
      <Sheet>
        <SheetTrigger render={<Button variant="ghost" size="icon-lg" aria-label="Buka menu" className="mobile-menu__trigger" />}>
          <Menu aria-hidden="true" />
        </SheetTrigger>
        <SheetContent className="mobile-menu__sheet">
          <SheetHeader>
            <SheetTitle>TRAVELOZY</SheetTitle>
            <SheetDescription>Pilih perjalanan atau mulai inquiry.</SheetDescription>
          </SheetHeader>
          <nav className="mobile-menu__nav" aria-label="Navigasi mobile">
            {links.map(([label, href]) => (
              <SheetClose key={href} render={<Link href={href} aria-label={label} />}>{label}</SheetClose>
            ))}
          </nav>
          <SheetClose render={<Link className="button-link button-link--gold mobile-menu__book" href="/#booking" aria-label="Book Your Ride" />}>Book Your Ride</SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
