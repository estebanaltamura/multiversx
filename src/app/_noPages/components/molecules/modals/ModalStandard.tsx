import { Description } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { FiInfo } from 'react-icons/fi';
import { IoWarningOutline } from 'react-icons/io5';
import { VscError } from 'react-icons/vsc';

interface IModalStandard {
  type: 'info' | 'warning' | 'error';
  title: string;
  content: string;
}

const ModalStandard: React.FC<IModalStandard> = ({ type, title, content }) => {
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
          minHeight: '55px',
          maxHeight: '55px',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        {type === 'info' && (
          <FiInfo style={{ width: '45px', height: '45px', color: '#007BFF' }} />
        )}
        {type === 'warning' && (
          <IoWarningOutline
            style={{ width: '45px', height: '45px', color: '#e5de00' }}
          />
        )}
        {type === 'error' && (
          <VscError
            style={{ width: '45px', height: '45px', color: '#de0a26' }}
          />
        )}
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
          {title}{' '}
        </Typography>
      </Box>

      {/*Description*/}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          margin: '10px 0 20px 0',
        }}
      >
        <Typography
          sx={{
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
          {content}
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
            width: '125px',
            borderRadius: '8px',
            backgroundColor: '#005575',
            color: 'white',
          }}
        >
          OK
        </Button>
      </Box>
    </Box>
  );
};

export default ModalStandard;
