'use client';

import { useContext, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { AuthContext } from '../_noPages/contexts/AuthProvider';

const Page = () => {
  const { address, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    console.log(address, isAuthenticated);
  }, [address, isAuthenticated]);

  return (
    <>
      <Typography variant='h6' sx={{ color: 'white' }}>
        {address}
      </Typography>
      <Typography variant='h6' sx={{ color: 'white' }}>
        {isAuthenticated}
      </Typography>
    </>
  );
};

export default Page;
