import { Button } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import { ProviderTypes } from '../contexts/Provider';

interface ICustomButton {
  children: Readonly<React.ReactNode>;
  onClickHandler: MouseEventHandler;
  id?: any;
}

const CustomButton: React.FC<ICustomButton> = ({
  children,
  onClickHandler,
  id,
}) => {
  return (
    <Button
      onClick={onClickHandler}
      id={id}
      sx={{
        width: '358px',
        height: '68px',
        backgroundColor: '#005575',
        border: '1px solid #00A8E8',
        padding: '16px 24px',
        borderRadius: '8px',
        lineHeight: '24px',
        color: '#FFF',
        fontWeight: '500',
        '&:hover': { backgroundColor: 'black', color: 'white' },
        '&:active': { backgroundColor: 'black', color: 'white' },
        '&:visited': {
          textDecoration: 'none',
          backgroundColor: 'black',
          color: 'white',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
