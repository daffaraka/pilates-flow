import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pilates Studio | Find Your Flow",
  description: "Experience mindful movement and holistic wellness with our expert-led Pilates classes.",
  openGraph: {
    title: 'Pilates Studio',
    description: 'Experience mindful movement and holistic wellness.',
    url: 'https://pilatesstudio.com',
    siteName: 'Pilates Studio',
    images: [
      {
        url: 'https://pilatesstudio.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Pilates Studio',
    image: 'https://pilatesstudio.com/logo.png',
    '@id': 'https://pilatesstudio.com',
    url: 'https://pilatesstudio.com',
    telephone: '+6281234567890',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Wellness Avenue',
      addressLocality: 'Mindful City',
      addressCountry: 'ID'
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
