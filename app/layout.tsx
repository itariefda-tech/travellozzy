import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://travelozzy.scorns-pace-6d.chatgpt.site';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TRAVELOZZY — Mobility & Travel Service',
    template: '%s | TRAVELOZZY',
  },
  description:
    'Layanan perjalanan reguler hingga luxury untuk kebutuhan harian, airport, vacation, wedding, corporate, dan group transportation.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'TRAVELOZZY',
    title: 'TRAVELOZZY — Drive Your Moment',
    description: 'Mobility & travel service untuk daily, airport, vacation, event, corporate, luxury, dan group transportation.',
  },
  twitter: {
    card: 'summary',
    title: 'TRAVELOZZY — Drive Your Moment',
    description: 'Mobility & travel service untuk setiap perjalanan.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
