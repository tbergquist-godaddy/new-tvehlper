import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';
import Navbar from './components/navbar';
import Container from './components/container';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main>
          <Container className="my-10">{children}</Container>
        </main>
      </body>
    </html>
  );
}
