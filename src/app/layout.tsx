'use client';
import Provider from './contexts/Provider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang='en'>
        <body
          className={inter.className}
          style={{ width: '100vw', height: '100vh' }}
        >
          {children}
        </body>
      </html>
    </Provider>
  );
}
