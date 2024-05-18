'use client';

import { Box, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import { useContext } from 'react';
import { ProviderContext, ProviderTypes } from '../contexts/Provider';

const ConnectWalletModal: React.FC = () => {
  const { login, logout } = useContext(ProviderContext);

  const loginHandler = (providerType: ProviderTypes) => () =>
    login(providerType);
  const logoutHandler = () => logout();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '480px',
        height: 'fit-content',
        padding: '20px',
        borderRadius: '16px',
        fontSize: '18px',
        fontWeight: '700',
        backgroundColor: '#d7d8d8',
        margin: 'auto',
        marginTop: '100px',
      }}
    >
      <Typography margin='auto' variant='h5' color='black'>
        Connect your wallet
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
          gap: '10px',
        }}
      >
        <CustomButton onClickHandler={loginHandler(ProviderTypes.EXTENSION)}>
          Login with extension
        </CustomButton>
        <CustomButton onClickHandler={loginHandler(ProviderTypes.WEB)}>
          Login with web wallet
        </CustomButton>
        <CustomButton
          onClickHandler={loginHandler(ProviderTypes.WALLET_CONNECT)}
        >
          Login with wallet connect
        </CustomButton>
        <CustomButton onClickHandler={loginHandler(ProviderTypes.LEDGER)}>
          Login with ledger
        </CustomButton>
        <CustomButton onClickHandler={logoutHandler}>LOGOUT</CustomButton>
      </Box>
    </Box>
  );
};

export default ConnectWalletModal;
