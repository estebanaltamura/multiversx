import { Button } from '@mui/material';
import { MouseEventHandler } from 'react';

interface ICustomButton {
  children: Readonly<React.ReactNode>;
  onClickHandler: MouseEventHandler;
}

const ConnectButton: React.FC<ICustomButton> = ({
  children,
  onClickHandler,
}) => {
  return (
    <Button
      onClick={onClickHandler}
      sx={{
        width: '110px',
        height: '44px',
        backgroundColor: '#005575',
        border: '1px solid #00A8E8',
        borderRadius: '8px',
        color: '#FFF',
        fontWeight: '500',
        '@media (min-width: 1200px)': {
          width: '180px',
        },
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

export default ConnectButton;
