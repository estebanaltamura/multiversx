import { Box, Typography } from '@mui/material';
import MobileDemoVideo from './components/MobileDemoVideo';
import DesktopDemoVideo from './components/DesktopDemoVIdeo';
import TickerTapeWidget from './components/TickerTapeWidget';

const Page = () => {
  return (
    <div>
      <Box
        sx={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <TickerTapeWidget />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          marginTop: '70px',
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
    </div>
  );
};

export default Page;
