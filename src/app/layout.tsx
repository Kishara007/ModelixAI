import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Modelix AI — Personal AI Photo Memories & Celebration Studio',
  description: 'Hyper-realistic Creative AI Photoshoots for birthdays, travel journeys, anniversaries, and personal aesthetic memories.',
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
      </head>
      <body className="antialiased bg-[#0A0A0A] text-[#F9FAFB] selection:bg-[#B026FF] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
