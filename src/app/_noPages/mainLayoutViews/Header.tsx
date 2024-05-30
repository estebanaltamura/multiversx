'use client';

import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import ConnectButton from '../components/ConnectButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../contexts/AuthProvider';
import { useContext } from 'react';
import { ConnectionContext } from '../contexts/ConnectionProvider';

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { logout } = useContext(ConnectionContext);

  const clickHandler = () => {
    if (isAuthenticated) logout();
    //if (!isAuthenticated) showModal crear context de modales
  };

  return (
    <AppBar
      sx={{
        position: 'static',
        width: '100%',
        height: '60px',
        padding: '8px 24px',
        backgroundColor: '#121212',
      }}
    >
      <Toolbar
        sx={{
          display: 'grid',
          height: '44px !important',
          minHeight: '44px !important',
          padding: '0px !important',
          gridTemplateColumns: 'fit-content(100px) 1fr fit-content(1000px)',
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

        <Box
          sx={{
            position: 'relative',
            color: 'white',
            gridArea: 'C',
            width: 'fit-content',
            height: 'fit-content',
          }}
        >
          <ConnectButton onClickHandler={clickHandler}>
            {isAuthenticated ? 'Disconnect' : 'Connect'}
          </ConnectButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
