import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://aiphotoshoots.pages.dev';
const ogImageUrl = 'https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786274487/Modelix_AI_jcshdt.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Modelix AI Studio — Hyper-Realistic AI Photoshoots & Personal Memories',
  description: 'Transform your photos into hyper-realistic AI memories, birthdays, luxury travel, fashion, and aesthetic photoshoots with 24h delivery.',
  keywords: [
    'Modelix AI',
    'AI Photoshoot Studio',
    'Personal AI Memories',
    'AI Portrait Photography',
    'Creative AI Photos',
    'Birthday AI Photoshoot',
    'Luxury Travel AI Photography',
    'AI Memories Studio',
  ],
  authors: [{ name: 'Modelix AI Studio', url: siteUrl }],
  creator: 'Modelix AI Studio',
  publisher: 'Modelix AI Studio',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Modelix AI Studio — Hyper-Realistic AI Photoshoots & Personal Memories',
    description: 'Transform your photos into hyper-realistic AI memories, birthdays, luxury travel, fashion, and aesthetic photoshoots with 24h delivery.',
    siteName: 'Modelix AI Studio',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Modelix AI Studio - Personal AI Photo Memories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modelix AI Studio — Hyper-Realistic AI Photoshoots & Personal Memories',
    description: 'Transform your photos into hyper-realistic AI memories, birthdays, luxury travel, fashion, and aesthetic photoshoots with 24h delivery.',
    images: [ogImageUrl],
    creator: '@modelixai',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Modelix AI Studio',
      url: siteUrl,
      logo: ogImageUrl,
      email: 'hellopixelpiestudio@gmail.com',
      telephone: '+94751670510',
      sameAs: ['https://wa.me/94751670510'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#service`,
      name: 'Modelix AI Studio',
      url: siteUrl,
      image: ogImageUrl,
      telephone: '+94751670510',
      email: 'hellopixelpiestudio@gmail.com',
      priceRange: '$10 - $50',
      description:
        'Generative AI Visual Studio specializing in hyper-realistic personal photoshoots, birthday memories, travel, and portrait art.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Worldwide / Digital Service',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Photoshoot Packages',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Essential Package',
            price: '10',
            priceCurrency: 'USD',
            description: '10 Ultra-HD AI photos, 24h delivery, standard enhancements.',
          },
          {
            '@type': 'Offer',
            name: 'Creative Studio Package',
            price: '30',
            priceCurrency: 'USD',
            description: '25 Ultra-HD 8K AI photos, priority 24h delivery, custom lighting & styling.',
          },
          {
            '@type': 'Offer',
            name: 'VIP Ultimate Cinema Package',
            price: '50',
            priceCurrency: 'USD',
            description: '50 Ultra-HD 8K AI photos, VIP express delivery, video loops & custom theme crafting.',
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased bg-[#0A0A0A] text-[#F9FAFB] selection:bg-[#B026FF] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
