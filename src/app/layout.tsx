import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Playfair_Display, Alex_Brush } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E0D0C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://knk-awadh-admin.vercel.app"),
  title: "KNK Awadh | Luxury Beauty, Salon & Aesthetics in Lucknow",
  description:
    "Premium beauty, hair, makeup, aesthetics and professional beauty services at KNK Awadh, Lucknow.",
  keywords: [
    "KNK Awadh",
    "Luxury salon Lucknow",
    "Best bridal makeup Lucknow",
    "KNK SKKIN aesthetics",
    "Hair salon Hazratganj",
    "Salon Gomti Nagar",
    "Balayage Lucknow",
    "Nanoplastia Lucknow",
    "Beauty academy Lucknow",
  ],
  authors: [{ name: "KNK Awadh" }],
  creator: "KNK Awadh",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://knk-awadh-admin.vercel.app/",
    siteName: "KNK Awadh",
    title: "KNK Awadh | Luxury Beauty, Salon & Aesthetics in Lucknow",
    description:
      "Premium beauty, hair, makeup, aesthetics and professional beauty services at KNK Awadh, Lucknow.",
    images: [
      {
        url: "/assets/images/bridal/bride-5.jpg",
        width: 1200,
        height: 630,
        alt: "KNK Awadh Luxury Editorial Salon and Academy Lucknow",
      },
    ],
  },
  icons: {
    icon: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${playfair.variable} ${alexBrush.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#191715] selection:bg-[#C5A265] selection:text-white antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
