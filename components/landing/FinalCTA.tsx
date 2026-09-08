import { ArrowUpRight, MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-title"><div className="container-shell"><p className="eyebrow">Your next journey</p><h2 id="final-title">Wherever you’re going,<br />let’s get you there.</h2><p>Tell us your journey. We’ll help you find the right ride.</p><div><a className="button-link button-link--gold" href="#booking">Book Your Ride <ArrowUpRight /></a><a className="button-link button-link--outline-light" href="#booking"><MessageCircle /> WhatsApp</a></div></div></section>
  );
}
