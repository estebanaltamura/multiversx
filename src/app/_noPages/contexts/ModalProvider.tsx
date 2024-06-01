import { Box } from '@mui/material';
import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import ModalManager from '../components/molecules/modals/ModalManager';
import { useRouter } from 'next/navigation';
import { functionControllers } from '../functionControllers';

type StandardModalTypes = 'info' | 'warning' | 'error';
type CustomModalTypes = 'decision' | 'multiversex';
type CallbackType = () => unknown | Promise<unknown>;

export interface IButtonParameters {
  callback?: CallbackType;
  redirectUrl?: string;
}

type ModalStandardFunction = (
  title: string,
  content: string,
  mainButtonParameters?: IButtonParameters
) => Promise<void>;

type ModalCustomFunction = (
  title: string,
  content: string,
  mainButtonParameters: IButtonParameters,
  secondaryButtonParameters?: IButtonParameters,
  multipleButtons?: IButtonParameters[]
) => Promise<void>;

interface ITriggerModalModule {
  standard: { [key in StandardModalTypes]: ModalStandardFunction };
  custom: { [key in CustomModalTypes]: ModalCustomFunction };
}

export interface IModalManagerProps {
  type: StandardModalTypes | CustomModalTypes;
  title: string;
  content: string;
  mainButtonParameters?: IButtonParameters;
  secondaryButtonParameters?: IButtonParameters;
  multipleButtons?: IButtonParameters[];
  setOpen: Dispatch<SetStateAction<boolean>>;
  resolver: (value: void | PromiseLike<void>) => void;
  redirection: (url: string) => void;
  //router: NextRouter;
}

interface IModalContext {
  triggerModal: ITriggerModalModule;
  property: { a: number };
}

const defaultValues: IModalContext = {
  triggerModal: {
    standard: {
      info: async (title, content, optionalParametersMainButton) => {
        return Promise.resolve();
      },
      warning: async (title, content, optionalParametersMainButton) => {
        return Promise.resolve();
      },
      error: async (title, content, optionalParametersMainButton) => {
        return Promise.resolve();
      },
    },
    custom: {
      decision: async (title, content, optionalParametersMainButton, optionalParametersSecondaryButton) => {
        return Promise.resolve();
      },
      multiversex: async (title, content, optionalParametersMainButton, optionalParametersSecondaryButton) => {
        return Promise.resolve();
      },
    },
  },
  property: { a: 1 },
};

// Create a context for the modal
export const ModalContext = createContext<IModalContext>(defaultValues);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [props, setProps] = useState<IModalManagerProps | null>(null);
  const [promiseResolver, setPromiseResolver] = useState<(() => void) | null>(null);

  const router = useRouter();

  const redirection = (url: string) => {
    router.push(url);
  };

  const showModal: (
    type: StandardModalTypes | CustomModalTypes,
    title: string,
    content: string,
    mainButtonParameters?: IButtonParameters,
    secondaryButtonParameters?: IButtonParameters,
    multipleButtons?: IButtonParameters[]
  ) => void = async (type, title, content, mainButtonParameters, secondaryButtonParameters, multipleButtons) => {
    return new Promise<void>((resolve) => {
      const props: IModalManagerProps = {
        type,
        title,
        content,
        mainButtonParameters,
        secondaryButtonParameters,
        multipleButtons,
        setOpen,
        resolver: resolve,
        redirection,
      };
      setProps(props);
      setOpen(true);
    });
  };

  const triggerModal: ITriggerModalModule = {
    standard: {
      info: async (title, content, mainButtonParameters, ...rest) => {
        const functionControllerResult = functionControllers.info(title, content, mainButtonParameters, rest);
        if (functionControllerResult) showModal('info', title, content, mainButtonParameters);
      },

      warning: async (title, content, mainButtonParameters, ...rest) => {
        const functionControllerResult = functionControllers.warning(title, content, mainButtonParameters, rest);
        if (functionControllerResult) showModal('warning', title, content, mainButtonParameters);
      },

      error: async (title, content, mainButtonParameters, ...rest) => {
        const functionControllerResult = functionControllers.error(title, content, mainButtonParameters, rest);
        if (functionControllerResult) showModal('error', title, content, mainButtonParameters);
      },
    },
    custom: {
      decision: async (title, content, mainButtonParameters, secondaryButtonParameters, ...rest) => {
        if (rest.length > 0) throw new Error('The arguments are more than the requests');

        showModal('decision', title, content, mainButtonParameters, secondaryButtonParameters);
      },

      multiversex: async (title, content, mainButtonParameters, secondaryButtonParameters, ...rest) => {
        if (rest.length > 0) throw new Error('The arguments are more than the requests');
        showModal('multiversex', title, content, mainButtonParameters, secondaryButtonParameters);
      },
    },
  };

  const property: { a: number } = {
    a: 1,
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <ModalContext.Provider value={{ triggerModal, property }}>
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
        <ModalManager props={props} />
      </Box>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
