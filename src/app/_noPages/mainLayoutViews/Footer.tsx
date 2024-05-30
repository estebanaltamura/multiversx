import { Box, Divider, Typography } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <Divider sx={{ backgroundColor: 'white' }} />
      <Box
        sx={{
          height: '300px',
          '@media (min-width: 1200px)': {
            height: '120px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            paddingTop: '30px',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
            gap: '10px',

            '@media (min-width: 1200px)': {
              width: '100%',
              flexDirection: 'row',
              padding: '50px 0',
              gap: '0px',
            },
          }}
        >
          <Typography variant='body2' sx={{ marginRight: '8px' }}>
            © 2024 Your Company, Inc.
          </Typography>

          <Box
            sx={{
              marginRight: '8px',
              textDecoration: 'none',
            }}
          >
            <Link href='#'>Terms</Link>
          </Box>

          <Box
            sx={{
              marginRight: '8px',
              textDecoration: 'none',
            }}
          >
            <Link href='#'>Privacy</Link>
          </Box>

          <Box
            sx={{
              marginRight: '8px',
              textDecoration: 'none',
            }}
          >
            {' '}
            <Link href='#'>Security</Link>
          </Box>

          <Box
            sx={{
              marginRight: '8px',
              textDecoration: 'none',
            }}
          >
            <Link href='#'>Status</Link>
          </Box>

          <Box
            sx={{
              marginRight: '8px',
              textDecoration: 'none',
            }}
          >
            <Link href='#'>Docs</Link>
          </Box>

          <Box
            sx={{
              marginRight: '8px',
              textDecoration: 'none',
            }}
          >
            <Link href='#'>Contact</Link>
          </Box>

          <Box
            sx={{
              marginRight: '8px',
              textDecoration: 'none',
            }}
          >
            <Link href='#'>Manage cookies</Link>
          </Box>

          <Box
            sx={{
              marginRight: '8px',
              textDecoration: 'none',
            }}
          >
            <Link href='#'>Do not share my personal information</Link>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
