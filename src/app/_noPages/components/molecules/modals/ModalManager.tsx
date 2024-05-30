'use client';

import { Box, Button } from '@mui/material';
import ModalInfo from './ModalInfo';
import { useEffect } from 'react';
import { TwentyFourMpTwoTone } from '@mui/icons-material';

//Se van a llamar desde opciones de un enum como modalTypes.warning, .error, .info .[custom]

const ModalManager = ({ type }: { type: string }) => {
  useEffect(() => {
    console.log(type);
  }, [type]);

  if (type === 'info') return <ModalInfo />;
};

export default ModalManager;
