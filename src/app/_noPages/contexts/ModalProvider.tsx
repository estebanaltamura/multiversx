import { Box } from '@mui/material';
import { createContext, useEffect, useState, ReactNode } from 'react';
import ModalManager from '../components/molecules/modals/ModalManager';

export interface ITriggerModalParameters {
  type: string;
  title: string;
  content: string;
  optionalParametersMainButton?: {
    callback?: () => void;
    redirectUrl?: string;
  };
}

interface IModalStandard {
  info: (
    title: string,
    message: string,
    optionalParametersMainButton?: {
      callback?: () => void;
      redirectUrl?: string;
    }
  ) => Promise<void>;
}

interface IModalModule {
  standard: IModalStandard;
}

interface ITriggerModal {
  triggerModal: IModalModule;
}

const modalContextInitialValue: ITriggerModal = {
  triggerModal: {
    standard: {
      info: async () => Promise.resolve(),
    },
  },
};

export const ModalContext = createContext<ITriggerModal>(
  modalContextInitialValue
);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [props, setProps] = useState<ITriggerModalParameters | null>(null);
  const [promiseResolver, setPromiseResolver] = useState<(() => void) | null>(
    null
  );

  function showModal(
    type: string,
    title: string,
    content: string,
    optionalParametersMainButton?: {
      callback?: () => void;
      redirectUrl?: string;
    }
  ): Promise<void> {
    setProps({ type, title, content, optionalParametersMainButton });
    setOpen(true);
    return new Promise((resolve) => {
      setPromiseResolver(() => resolve);
    });
  }

  const triggerModal: IModalModule = {
    standard: {
      info: (
        title: string,
        content: string,
        optionalParametersMainButton?: {
          callback?: () => void;
          redirectUrl?: string;
        }
      ) => showModal('info', title, content, optionalParametersMainButton),
    },
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
      >
        <ModalManager
          props={props}
          setOpen={setOpen}
          setPromiseResolver={setPromiseResolver}
        />
      </Box>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
