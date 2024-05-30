'use client';

//
import AuthProvider from './_noPages/contexts/AuthProvider';
import ConnectionProvider from './_noPages/contexts/ConnectionProvider';
import ModalProvider from './_noPages/contexts/ModalProvider';
import { dmSans } from './_noPages/fonts';
import Footer from './_noPages/mainLayoutViews/Footer';
import Header from './_noPages/mainLayoutViews/Header';
import Main from './_noPages/mainLayoutViews/Main';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={dmSans.className}>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>MVP del MVP</title>
        <link rel='icon' href='/images/favicon.webp' />
      </head>
      <body>
        <AuthProvider>
          <ConnectionProvider>
            <ModalProvider>
              <Header />
              <Main>{children}</Main>
              <Footer />
            </ModalProvider>
          </ConnectionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
