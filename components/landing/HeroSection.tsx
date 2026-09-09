'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, MessageCircle } from 'lucide-react';

const journeyCategories = ['Daily', 'Airport', 'Vacation', 'Wedding', 'Corporate', 'Luxury'];
const rotatingWords = ['Comfort', 'Luxury', 'Confidence', 'Style'];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [typedWord, setTypedWord] = useState(rotatingWords[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let wordIndex = 0;
    let characterIndex = rotatingWords[0].length;
    let deleting = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNextCharacter = () => {
      const word = rotatingWords[wordIndex];
      if (deleting) {
        characterIndex -= 1;
        setTypedWord(word.slice(0, characterIndex));
        if (characterIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % rotatingWords.length;
          timeoutId = setTimeout(typeNextCharacter, 420);
          return;
        }
        timeoutId = setTimeout(typeNextCharacter, 68);
        return;
      }

      characterIndex += 1;
      setTypedWord(rotatingWords[wordIndex].slice(0, characterIndex));
      if (characterIndex === rotatingWords[wordIndex].length) {
        deleting = true;
        timeoutId = setTimeout(typeNextCharacter, 1900);
        return;
      }
      timeoutId = setTimeout(typeNextCharacter, 115);
    };

    timeoutId = setTimeout(typeNextCharacter, 2200);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frameId = 0;
    const commitPointer = (x: number, y: number) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        hero.style.setProperty('--hero-media-x', `${(x * -7).toFixed(2)}px`);
        hero.style.setProperty('--hero-mesh-x', `${(x * 11).toFixed(2)}px`);
        hero.style.setProperty('--hero-mesh-y', `${(y * 7).toFixed(2)}px`);
        hero.style.setProperty('--hero-rotate-x', `${(y * -1).toFixed(2)}deg`);
        hero.style.setProperty('--hero-rotate-y', `${(x * 1.2).toFixed(2)}deg`);
      });
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (!window.matchMedia('(pointer: fine)').matches) return;
      const bounds = hero.getBoundingClientRect();
      commitPointer(
        ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
        ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
      );
    };
    const handlePointerLeave = () => commitPointer(0, 0);
    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const progress = Math.min(1, Math.max(0, window.scrollY / hero.offsetHeight));
        hero.style.setProperty('--hero-media-scroll', `${(progress * 28).toFixed(2)}px`);
        hero.style.setProperty('--hero-mesh-scroll', `${(progress * 18).toFixed(2)}px`);
        hero.style.setProperty('--hero-content-scroll', `${(progress * 34).toFixed(2)}px`);
        hero.style.setProperty('--hero-content-opacity', (1 - progress * .45).toFixed(3));
      });
    };

    hero.addEventListener('pointermove', handlePointerMove, { passive: true });
    hero.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="top" aria-labelledby="hero-title">
      <picture className="hero__media">
        <source media="(max-width: 767px)" srcSet="/images/editorial/hero-luxury-mobile.avif" />
        <img src="/images/editorial/hero-luxury-desktop.avif" alt="Kendaraan premium berwarna hitam di area kedatangan kota pada malam hari" width="1600" height="900" fetchPriority="high" />
      </picture>
      <div className="hero__ambient" aria-hidden="true">
        <svg className="hero__mesh" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <g className="hero__mesh-layer hero__mesh-layer--far">
            <polygon points="650,80 900,15 1020,230 790,300" />
            <polygon points="790,300 1020,230 1160,460 890,520" />
            <polygon points="500,360 790,300 890,520 610,610" />
          </g>
          <g className="hero__mesh-layer hero__mesh-layer--near">
            <polygon points="80,560 360,390 500,620 220,790" />
            <polygon points="360,390 650,330 610,610 500,620" />
            <polygon points="650,330 930,520 710,750 610,610" />
          </g>
          <g className="hero__mesh-lines">
            <path d="M80 560 360 390 650 330 900 15M220 790 500 620 610 610 710 750M500 620 650 330 790 300 1020 230 1160 460M790 300 890 520 710 750" />
          </g>
          <g className="hero__nodes">
            <circle cx="360" cy="390" r="3" />
            <circle cx="650" cy="330" r="4" />
            <circle cx="790" cy="300" r="2.5" />
            <circle cx="890" cy="520" r="3.5" />
            <circle cx="610" cy="610" r="2.5" />
          </g>
        </svg>
        <span className="hero__glow hero__glow--one" />
        <span className="hero__glow hero__glow--two" />
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="container-shell hero__content">
        <p className="eyebrow hero__reveal hero__reveal--eyebrow">Mobility &amp; Travel Service</p>
        <h1 id="hero-title" className="hero__reveal hero__reveal--heading">Drive Your Moment.</h1>
        <p className="hero__promise hero__reveal hero__reveal--promise">
          Travel in{' '}
          <span className="hero__typed" aria-label="Comfort, Luxury, Confidence, and Style">
            <span aria-hidden="true">{typedWord}</span>
            <span className="hero__cursor" aria-hidden="true" />
          </span>
        </p>
        <p className="hero__copy hero__copy--desktop hero__reveal hero__reveal--copy">Dari Avanza dan Xpander untuk perjalanan harian hingga Alphard, Mercedes-Benz, Denza, dan Hiace untuk kebutuhan premium dan group transportation.</p>
        <p className="hero__copy hero__copy--mobile hero__reveal hero__reveal--copy">Armada reguler, premium, luxury, SUV, dan group.</p>
        <div className="hero__actions hero__reveal hero__reveal--actions">
          <a className="button-link button-link--gold" href="#booking">Book Your Ride <ArrowDownRight size={17} aria-hidden="true" /></a>
          <a className="button-link button-link--outline-light" href="#contact"><MessageCircle size={17} aria-hidden="true" /> WhatsApp</a>
        </div>
        <ul className="hero__categories hero__reveal hero__reveal--categories" aria-label="Kategori perjalanan">
          {journeyCategories.map((category) => <li key={category}>{category}</li>)}
        </ul>
      </div>
    </section>
  );
}
