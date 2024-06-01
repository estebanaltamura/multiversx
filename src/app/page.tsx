'use client';

import { Box, Typography } from '@mui/material';
import MobileDemoVideo from './_noPages/components/MobileDemoVideo';
import DesktopDemoVideo from './_noPages/components/DesktopDemoVIdeo';
import TickerTapeWidget from './_noPages/components/TickerTapeWidget';
import { useContext, useEffect } from 'react';
import { ModalContext } from './_noPages/contexts/ModalProvider';
import { useRouter } from 'next/router';

const Page = () => {
  const { triggerModal } = useContext(ModalContext);

  const title = 'TITULO';
  const message = 'Descripcion larguisiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiima';

  const fetchCharacter = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const character = await response.json();
      console.log(character);
      return character;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };
  const redirectUrl = '/dashboard';

  useEffect(() => {
    triggerModal.standard.info('Hola', 'Mensaje', { callback: fetchCharacter });
  }, []);

  // callback
  // url
  // trigerModal.standard.error(title, content, callback, url)
  // trigerModal.custom1(title, content, {callback, url}, {callback, url})

  // Se llama por ejemplo trigerModal.standard.error(parameters) o trigerModal.custom1(parameters) o o trigerModal.loginWithFederativesServices(parameters)
  // Hay tres estandares que son info, error y warnin y despues custums. Tambien hay varios estilos diseñados
  // title, message, [main button] ?{ callback, redirectUrl }, [seconday button], ?{ callback, redirectUrl }, [por defecto 1] ?styleModelNumber, ?backgroundColor, ?color

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
            variant="h1"
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
            [NAME] is the platform where you can buy and sell tokenized commodities, stocks, and ETFs easily!
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
