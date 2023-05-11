import { Inter, Nunito } from 'next/font/google';

import { RenderInClient } from './providers_client';

import '../shared/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${nunito.variable}`}>
      <RenderInClient>
        <body>{children}</body>
      </RenderInClient>
    </html>
  );
}
