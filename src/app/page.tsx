'use client';

import { Box, Typography } from '@mui/material';
import MobileDemoVideo from './_noPages/components/MobileDemoVideo';
import DesktopDemoVideo from './_noPages/components/DesktopDemoVIdeo';
import TickerTapeWidget from './_noPages/components/TickerTapeWidget';
import { useContext, useEffect } from 'react';
import { ModalContext } from './_noPages/contexts/ModalProvider';

const Page = () => {
  const { showModal } = useContext(ModalContext);

  useEffect(() => {
    setTimeout(() => {
      showModal({ type: 'info' });
    }, 2000);
  }, []);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          top: '60px',
          left: '0px',
        }}
      >
        <TickerTapeWidget />
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          marginTop: '140px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
          '@media (min-width: 1200px)': {
            flexDirection: 'row',
            gap: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',

            '@media (min-width: 1200px)': {
              justifyContent: 'right',
              width: '60%',
            },
          }}
        >
          <Typography
            variant='h1'
            sx={{
              fontSize: '25px',
              textAlign: 'center',
              color: 'white',
              fontWeight: '700',
              width: '650px',
              '@media (min-width: 1200px)': {
                textAlign: 'left',
                fontSize: '48px',
                lineHeight: '60px',
                fontWeight: '700',
              },
            }}
          >
            [NAME] is the platform where you can buy and sell tokenized
            commodities, stocks, and ETFs easily!
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', width: '40%', justifyContent: 'center' }}>
          <MobileDemoVideo />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          marginTop: '100px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            textAlign: 'center',
            color: 'white',
            fontWeight: '700',
            '@media (min-width: 1200px)': {
              textAlign: 'center',
              fontSize: '36px',
              lineHeight: '42px',
              fontWeight: '700',
            },
          }}
        >
          Trade like a pro
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            textAlign: 'center',
            color: '#6E6E6E',
            fontWeight: '500',
            '@media (min-width: 1200px)': {
              textAlign: 'center',
              fontSize: '18px',
            },
          }}
        >
          Get our lowest fees, high-speed transactions, powerful APIs, and more.
        </Typography>
        <Box sx={{ marginTop: '30px' }}>
          <DesktopDemoVideo />
        </Box>
      </Box>
    </>
  );
};

export default Page;
