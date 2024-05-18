import { Button } from '@mui/material';
import React from 'react';

interface ICustomButton {
  children: Readonly<React.ReactNode>;
  onClickHandler: () => void;
}

const CustomButton: React.FC<ICustomButton> = ({
  children,
  onClickHandler,
}) => {
  return (
    <Button
      onClick={onClickHandler}
      sx={{
        padding: '16px 24px',
        borderRadius: '8px',
        lineHeight: '16px',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: '600',
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
