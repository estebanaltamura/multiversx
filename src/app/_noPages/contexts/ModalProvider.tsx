import { Box } from '@mui/material';
import { createContext, useEffect, useState } from 'react';

interface IModalContext {
  triggerModal: {
    standard: {
      info: (message: string) => Promise<void>;
      warning: (message: string) => Promise<void>;
      error: (message: string) => Promise<void>;
    };
    decision: (message: string) => Promise<void>;
  };
}

const modalContextInitialValue: IModalContext = {
  triggerModal: {
    standard: {
      info: async () => {},
      warning: async () => {},
      error: async () => {},
    },
    decision: async () => {},
  },
};

export const ModalContext = createContext<IModalContext>(
  modalContextInitialValue
);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [type, setType] = useState<string>(''); // despues va a consumir de un enum
  const [promiseResolver, setPromiseResolver] = useState<any>(null);

  // Dispararlos desde cualquier punto de la aplicacion
  // 2 tipos. error | info | advertencia y disyuntiva. Siempre retorna una promesa
  // error | info | advertencia por default un solo boton que los cierra. Opcionalmente puede recibir callback y redireccion
  // disyuntiva por default un boton cancelar que los cierra y un aceptar que opcionalmente puede recibir callback y redireccion, sino cierra por default tambien

  const showModal: (
    type: string,
    title: string,
    content: string
  ) => Promise<void> = (type, title, content) => {
    return new Promise((resolve) => {
      setType(type);
      setOpen(true);
      // setTimeout(() => {
      //   setPromiseResolver(() => resolve);
      // }, 1000);
    });
  };

  const title = 'titulo';

  const triggerModal = {
    standard: {
      info: (message: string) => showModal('info', title, message),
      warning: (message: string) => showModal('warning', title, message),
      error: (message: string) => showModal('error', title, message),
    },
    decision: (message: string) => showModal('decision', title, message),
  };

  const hideModal = () => {
    setOpen(false);
    setPromiseResolver(null);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <ModalContext.Provider value={{ triggerModal }}>
      <Box
        sx={{
          position: 'absolute',
          display: open ? 'flex' : 'none',
          width: '100vw',
          height: '100vh',
          top: '0',
          left: '0',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(50, 50, 50, 0.8)',
        }}
      ></Box>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
