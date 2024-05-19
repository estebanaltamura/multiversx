import { Box, Typography } from '@mui/material';
import MobileDemoVideo from './components/MobileDemoVideo';
import DesktopDemoVideo from './components/DesktopDemoVIdeo';

const Page = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          marginTop: '50px',
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
            '@media (min-width: 1200px)': {
              justifyContent: 'right',
              width: '60%',
            },
          }}
        >
          <Typography
            variant='h1'
            sx={{
              fontSize: '32px',
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
          marginTop: '150px',
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
        <Box sx={{ marginTop: '30px' }}>
          <DesktopDemoVideo />
        </Box>
      </Box>
    </div>
  );
};

export default Page;
