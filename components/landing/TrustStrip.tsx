const trustItems = ['Professional Driver', 'Clean Fleet', 'Transparent Pricing', 'Flexible Rental', 'Customer Support'];

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Nilai layanan">
      <div className="trust-track">
        {[...trustItems, ...trustItems].map((item, index) => <span key={`${item}-${index}`}>✓ {item}</span>)}
      </div>
    </section>
  );
}
