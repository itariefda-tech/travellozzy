import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { BookingWizard } from '@/components/booking/BookingWizard';
import { TrustStrip } from '@/components/landing/TrustStrip';
import { JourneySection } from '@/components/landing/JourneySection';
import { FeaturedFleet } from '@/components/landing/FeaturedFleet';
import { PopularPackages } from '@/components/landing/PopularPackages';
import { SignatureSection } from '@/components/landing/SignatureSection';
import { VacationSection } from '@/components/landing/VacationSection';
import { AirportTransfer, CorporateSection, HowItWorks, PartnerSection, WeddingEvent, WhyTravelozy } from '@/components/landing/SupportingSections';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQSection } from '@/components/landing/FAQSection';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCTA } from '@/components/layout/MobileStickyCTA';

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <BookingWizard />
        <TrustStrip />
        <JourneySection />
        <FeaturedFleet />
        <PopularPackages />
        <SignatureSection />
        <VacationSection />
        <WhyTravelozy />
        <HowItWorks />
        <AirportTransfer />
        <WeddingEvent />
        <CorporateSection />
        <PartnerSection />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
