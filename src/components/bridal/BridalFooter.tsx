"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function BridalFooter() {
  return (
    <footer className="bg-[#FFFDF9] text-[#161413] border-t border-[#EAE2D5] pt-14 pb-24 md:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#EAE2D5]">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#hero" className="inline-block group focus:outline-none">
              <div className="relative h-12 sm:h-14 w-24 sm:w-28 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/assets/images/logo.png"
                  alt="KNK Awadh Salon & Academy"
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-[#7A726B] leading-relaxed max-w-sm">
              Lucknow&apos;s premier luxury bridal atelier and academy. Creating timeless Awadhi royalty and modern red-carpet bridal aesthetics since 2014.
            </p>

            <div className="flex items-center gap-3 pt-1 text-[#7A726B]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FAF5EE] border border-[#EAE2D5] flex items-center justify-center hover:text-[#B3203F] hover:border-[#B3203F] transition"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FAF5EE] border border-[#EAE2D5] flex items-center justify-center hover:text-[#B3203F] hover:border-[#B3203F] transition"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FAF5EE] border border-[#EAE2D5] flex items-center justify-center hover:text-[#B3203F] hover:border-[#B3203F] transition"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links matching screenshot */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-playfair text-sm font-bold text-[#161413] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[#7A726B]">
              <li>
                <a href="#hero" className="hover:text-[#B3203F] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B3203F] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-[#B3203F] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#B3203F] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#B3203F] transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#B3203F] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services matching screenshot */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-playfair text-sm font-bold text-[#161413] uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-[#7A726B]">
              <li>
                <a href="#services" className="hover:text-[#B3203F] transition-colors">
                  HD Bridal Makeup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B3203F] transition-colors">
                  Airbrush Makeup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B3203F] transition-colors">
                  Engagement &amp; Sagan Look
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B3203F] transition-colors">
                  Reception &amp; Cocktail Glam
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B3203F] transition-colors">
                  Pre-Bridal Skin Care Rituals
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us matching screenshot */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-playfair text-sm font-bold text-[#161413] uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-[#7A726B]">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
                <a href="tel:+919559321711" className="hover:text-[#161413]">
                  +91 95593 21711 (Mahanagar)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
                <a href="tel:+918881000551" className="hover:text-[#161413]">
                  +91 88810 00551 (Gomti Nagar)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
                <a href="tel:+918881000552" className="hover:text-[#161413]">
                  +91 88810 00552 (Hazratganj)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/918881000552?text=Hello%20KNK%20Salon!%20I%20would%20like%20to%20inquire%20about%20Bridal%20Makeup."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#161413] text-[#25D366] font-medium"
                >
                  +91 88810 00552 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
                <a href="mailto:info@knkawadh.com" className="hover:text-[#161413]">
                  info@knkawadh.com
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-[#B3203F] shrink-0 mt-0.5" />
                <span>Mahanagar • Gomti Nagar • Hazratganj (Lucknow)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[#8A8177] gap-3 text-[11px]">
          <div>
            &copy; 2026 KNK Awadh Salon &amp; Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:underline">
              Privacy Policy
            </a>
            <span>&bull;</span>
            <a href="#hero" className="hover:underline">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
