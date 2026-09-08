import { Quote, Sparkles } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="section section--white" aria-labelledby="testimonial-title"><div className="container-shell testimonial-layout"><div><p className="eyebrow">Stories in motion</p><h2 id="testimonial-title">Real journeys will speak here.</h2><p>Testimonial customer belum diberikan, jadi kami tidak menampilkan nama, rating, atau ulasan fiktif.</p></div><div className="testimonial-placeholder"><Quote aria-hidden="true" /><p>Customer stories akan ditampilkan setelah review terverifikasi tersedia.</p><span><Sparkles aria-hidden="true" /> Verified stories only</span></div></div></section>
  );
}
