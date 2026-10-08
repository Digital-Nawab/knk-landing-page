"use client";

import Image from "next/image";
import { MessageCircle, Calendar, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";
import { useBookingModal } from "@/context/BookingContext";

export default function BridalHero() {
  const { openBookingModal } = useBookingModal();
  const whatsappUrl =
    "https://wa.me/918881000552?text=" +
    encodeURIComponent(
      "Hello KNK Salon Lucknow, I want to inquire about HD and Airbrush Bridal Makeup packages and artist availability."
    );

  const chips = [
    "HD Makeup",
    "Airbrush Makeup",
    "Bridal Hairstyling",
    "Bridal Beauty Services",
  ];

  return (
    <section id="hero" className="relative w-full bg-[#0C0B0A] text-white overflow-hidden border-b border-[#23201D]">
      {/* Luxury ambient light glows */}
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-[#B3203F]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C9A24B]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-14 sm:pb-20 relative z-10">
        {/* Breadcrumb matching screenshot: Home > Bridal Makeup */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-[#A89E92] mb-6 sm:mb-8 font-normal"
        >
          <a href="#hero" className="hover:text-white transition-colors">
            Home
          </a>
          <span className="text-[#686058]">&gt;</span>
          <span className="text-white/90">Bridal Makeup</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
            {/* Eyebrow Label: LOOK BEAUTIFUL · FEEL CONFIDENT */}
            <div className="flex items-center">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase">
                LOOK BEAUTIFUL &bull; FEEL CONFIDENT
              </span>
            </div>

            {/* H1 Title: Best Bridal Makeup Artist in Lucknow */}
            <h1 className="font-playfair text-3xl sm:text-5xl lg:text-[58px] font-bold leading-[1.12] tracking-tight text-white">
              Best Bridal Makeup Artist <br className="hidden sm:inline" />
              in <span className="text-white">Lucknow</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-[17px] text-[#C7BEB4] font-inter max-w-xl leading-relaxed">
              HD &amp; Airbrush Bridal Makeup with professional hairstyling and bridal beauty services.
            </p>

            {/* 4 Chips in horizontal row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
              {chips.map((label) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181614] border border-[#2E2924] text-xs sm:text-[13px] text-white/90 font-medium hover:border-[#C9A24B]/50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B3203F]" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#B3203F] hover:bg-[#961732] text-white font-medium text-sm sm:text-[15px] shadow-lg shadow-[#B3203F]/35 hover:shadow-xl hover:shadow-[#B3203F]/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/25 hover:border-[#25D366] bg-black/40 hover:bg-[#25D366]/10 text-white font-medium text-sm sm:text-[15px] transition-all duration-200 group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Micro reassurance line */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-[#9E958A] pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>Luxury Vanity Kit (Dior, MAC, Temptu, NARS)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>Private Suites in Mahanagar, Gomti Nagar &amp; Hazratganj</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Bride Image with Handwriting Overlay */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer soft glow border */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#161413] shadow-2xl border border-white/10 group">
                <Image
                  src="/assets/images/bridal/bridal-10.webp"
                  alt="Best Bridal Makeup Artist in Lucknow - KNK Bride"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-[center_10%] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle vignette overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-black/10 to-transparent opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A]/40 via-transparent to-transparent" />

                {/* Floating Handwritten Script Overlay: "Real Brides, Real Stories" matching screenshot */}
                <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-6 z-20 pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  <div className="font-script text-2xl sm:text-3xl lg:text-[34px] text-white/95 leading-none">
                    Real Brides
                  </div>
                  <div className="font-script text-2xl sm:text-3xl lg:text-[34px] text-[#E6D3AF] leading-none mt-1 pl-4">
                    Real Stories
                  </div>
                </div>

                {/* Floating Bottom Info Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0E0D0C]/85 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#C9A24B] font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-white font-semibold">2,500+ Brides Styled</span>
                  </div>
                  <span className="text-[11px] text-[#A89E92]">Lucknow Top Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
