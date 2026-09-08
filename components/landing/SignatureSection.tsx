import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export function SignatureSection() {
  return (
    <section className="signature-section" id="event" aria-labelledby="signature-title">
      <div className="signature-media"><Image src="/images/editorial/service-wedding.webp" alt="Visual editorial chauffeur dan kendaraan luxury untuk special occasion" width="800" height="1000" loading="lazy" /></div>
      <div className="signature-copy">
        <p className="eyebrow">TRAVELOZY Signature</p><h2 id="signature-title">For moments when ordinary isn’t enough.</h2>
        <p>Premium car. Professional chauffeur. Exceptional journey—untuk wedding, VIP guest, executive, artist, romantic dinner, dan production.</p>
        <ul><li>Chauffeur-first experience</li><li>Schedule coordination</li><li>Luxury comfort options</li></ul>
        <a className="button-link button-link--gold" href="#booking">Plan a Signature ride <ArrowUpRight /></a>
        <small>Visual bersifat editorial; kelas kendaraan aktual dikonfirmasi saat inquiry.</small>
      </div>
    </section>
  );
}
