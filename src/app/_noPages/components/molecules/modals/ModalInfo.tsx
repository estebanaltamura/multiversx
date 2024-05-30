import { Box, Button, Typography } from '@mui/material';
import { FiInfo } from 'react-icons/fi';

const ModalInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '450px',
        height: 'fit-content',
        padding: '20px 40px',
        borderRadius: '16px',
        border: '1px solid black',
        backgroundColor: 'white',
      }}
    >
      {/*Main*/}
      {/*Icon*/}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '70px',
          maxHeight: '70px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FiInfo style={{ width: '45px', height: '45px', color: '#007BFF' }} />
      </Box>

      {/*Title*/}
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '22px',
            lineHeight: '30px',
            height: 'fit-content',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            wordBreak: 'break-word',
          }}
        >
          Podes encontrar
        </Typography>
      </Box>

      {/*Description*/}

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          margin: '10px 0 20px 0',
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: '28px',
            height: 'fit-content',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            wordBreak: 'break-word', // Fuerza el corte de palabras largas
          }}
        >
          En nuestra coleccion productos random vas a poder encontrar todo tipo
          de mambos al mejor precio En nuestra coleccion productos random vas a
          poder encontrar todo tipo de mambos al mejor precio En nuestra
          coleccion productos random vas a poder encontrar todo tipo de mambos
          al mejor precio En nuestra coleccion productos random vas a poder
          encontrar todo tipo de mambos al mejor precio En nuestra coleccion
          productos random vas a poder encontrar todo tipo de mambos al mejor
          precio En nuestra coleccion productos random vas a poder encontrar
          todo tipo de mambos al mejor precio En nuestra coleccion productos
          random vas a poder encontrar todo tipo de mambos al mejor precio
        </Typography>
      </Box>

      {/*Buttons container */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '43px',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <Button
          sx={{
            height: '43px',
            width: '105px',
            borderRadius: '8px',
            backgroundColor: '#005575',
            color: 'white',
          }}
        >
          OK
        </Button>
        <Button
          sx={{
            height: '43px',
            width: '105px',
            borderRadius: '8px',
            backgroundColor: '#005575',
            color: 'white',
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ModalInfo;
