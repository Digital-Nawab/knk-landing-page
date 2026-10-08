"use client";

import { useState } from "react";
import BridalNavbar from "@/components/bridal/BridalNavbar";
import BridalHero from "@/components/bridal/BridalHero";
import TrustBar from "@/components/bridal/TrustBar";
import BridalServices from "@/components/bridal/BridalServices";
import WhyChooseKnk from "@/components/bridal/WhyChooseKnk";
import MakeupComparison from "@/components/bridal/MakeupComparison";
import WhatsIncludedAndProcess from "@/components/bridal/WhatsIncludedAndProcess";
import PortfolioAndTestimonials from "@/components/bridal/PortfolioAndTestimonials";
import LucknowLocations from "@/components/bridal/LucknowLocations";
import FaqAndBooking from "@/components/bridal/FaqAndBooking";
import ReadyToBookBanner from "@/components/bridal/ReadyToBookBanner";
import BridalFooter from "@/components/bridal/BridalFooter";
import MobileBottomBar from "@/components/bridal/MobileBottomBar";
import SearchModal from "@/components/bridal/SearchModal";
import BookingModal from "@/components/bridal/BookingModal";
import { BookingProvider } from "@/context/BookingContext";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <BookingProvider>
      <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#161413] font-sans antialiased overflow-x-hidden selection:bg-[#B3203F] selection:text-white">
        {/* 1. Header / Navbar matching screenshot */}
        <BridalNavbar onOpenSearch={() => setSearchOpen(true)} />

        {/* Main Content matching screenshot order */}
        <main className="flex-1 w-full pt-20">
          {/* 2. Dark Luxury Hero with Handwriting Overlay */}
          <BridalHero />

          {/* 3. Trust Bar (Real Brides | Professional Artists | Lucknow Locations) */}
          <TrustBar />

          {/* 4. Bridal Makeup Services Grid */}
          <BridalServices />

          {/* 5. Why Choose KNK? & Real Work Only Banner */}
          <WhyChooseKnk />

          {/* 6. HD vs Airbrush Makeup Comparison */}
          <MakeupComparison />

          {/* 7. What's Included? & Our Bridal Process */}
          <WhatsIncludedAndProcess />

          {/* 8. Real Bride Portfolio & What Our Brides Say Testimonial Carousel */}
          <PortfolioAndTestimonials />

          {/* 9. Our Locations in Lucknow with Street Map Previews */}
          <LucknowLocations />

          {/* 10. Bespoke Bridal Booking & Date Availability */}
          <FaqAndBooking />

          {/* 11. Ready to Book CTA Banner */}
          <ReadyToBookBanner />
        </main>

        {/* 12. Full Luxury Footer */}
        <BridalFooter />

        {/* 13. Mobile Sticky Bottom Bar (Call, WhatsApp, Book) */}
        <MobileBottomBar />

        {/* 14. Quick Search Modal */}
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

        {/* 15. Global Booking Consultation Popup Modal */}
        <BookingModal />
      </div>
    </BookingProvider>
  );
}
