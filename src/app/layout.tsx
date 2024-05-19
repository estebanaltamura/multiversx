'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//
import Provider from './contexts/Provider';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang='en'>
        <head>
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>My Application</title>
        </head>
        <body
          className={inter.className}
          style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}
        >
          <AppBar
            sx={{
              position: 'static',
              width: '100vw',
              height: '80px',
              padding: '8px 16px',
              backgroundColor: '#121212',
            }}
          >
            <Toolbar
              sx={{
                display: 'grid',
                padding: '0px !important',
                gridTemplateColumns:
                  'fit-content(100px) 1fr fit-content(1000px)',
                gridTemplateRows: '64px',
                gridTemplateAreas: `
          'A B C'
        `,
              }}
            >
              <IconButton
                sx={{
                  display: 'none',
                  padding: 0,
                  gridArea: 'A',
                }}
                size='large'
                color='inherit'
                aria-label='menu'
              >
                <MenuIcon />
              </IconButton>

              <Button
                sx={{
                  color: 'white',
                  gridArea: 'C',
                  width: 'fit-content',
                  height: '18px',
                  padding: '0 15px',
                }}
              >
                <Link href='/login'>Connect</Link>
              </Button>
            </Toolbar>
          </AppBar>
          <main
            style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}
          >
            {children}
          </main>
        </body>
      </html>
    </Provider>
  );
}
