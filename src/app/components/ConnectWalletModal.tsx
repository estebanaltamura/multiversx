'use client';

import { Box, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import { useContext } from 'react';
import { ProviderContext, ProviderTypes } from '../contexts/Provider';

const ConnectWalletModal: React.FC = () => {
  const { login, logout } = useContext(ProviderContext);

  const loginHandler: (event: React.MouseEvent<HTMLButtonElement>) => void = (
    event
  ) => {
    const providerType = event.currentTarget.id as ProviderTypes;
    login(providerType);
  };

  const logoutHandler = () => {
    logout();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '378px',
        maxHeight: '382px',
        padding: '10px',
        gap: '30px',
      }}
    >
      <CustomButton id={ProviderTypes.EXTENSION} onClickHandler={loginHandler}>
        Login with extension
      </CustomButton>
      <CustomButton id={ProviderTypes.WEB} onClickHandler={loginHandler}>
        Login with web wallet
      </CustomButton>
      <CustomButton
        id={ProviderTypes.WALLET_CONNECT}
        onClickHandler={loginHandler}
      >
        Login with wallet connect
      </CustomButton>
      <CustomButton id={ProviderTypes.LEDGER} onClickHandler={loginHandler}>
        Login with ledger
      </CustomButton>
      <CustomButton onClickHandler={logoutHandler}>LOGOUT</CustomButton>
    </Box>
  );
};

export default ConnectWalletModal;
