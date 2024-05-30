'use client';

import { FC, ReactNode, createContext, useContext } from 'react';
import { ExtensionProvider } from '@multiversx/sdk-extension-provider/out';
// import { WalletConnectV2Provider } from '@multiversx/sdk-wallet-connect-provider';
// import { HWProvider } from '@multiversx/sdk-hw-provider';
// import { WalletProvider } from '@multiversx/sdk-web-wallet-provider';
import { SignClientTypes } from '@walletconnect/types';
import { AuthContext } from './AuthProvider';

export enum ProviderTypes {
  WEB = 'web',
  LEDGER = 'ledger',
  EXTENSION = 'extension',
  WALLET_CONNECT = 'wallet_connect',
}

export type ProviderTypesSDK = ExtensionProvider;
// | WalletConnectV2Provider
// | HWProvider
// | WalletProvider;

interface IClientConnect {
  onClientLogin: () => void;
  onClientLogout: () => void;
  onClientEvent: (event: { name: string; data: any }) => void;
}

const isPlainObject = (value: any): boolean =>
  Object.prototype.toString.call(value) === '[object Object]';
const isString = (value: any): boolean => typeof value === 'string';
const isParameterMissing = (value: any): boolean =>
  typeof value === 'undefined';
const isPresentInObject = (object: any, value: string): boolean => {
  if (!isPlainObject(object))
    throw new Error('Parameter object should be a plain object');
  return Object.values(object).includes(value);
};

const validateParameters = (providerType: any) => {
  if (isParameterMissing(providerType))
    throw new Error('ProviderType is required');
  if (!isString(providerType))
    throw new Error('ProviderType should be a string');
  if (!isPresentInObject(ProviderTypes, providerType))
    throw new Error('Invalid providerType');
};

export const ConnectionContext = createContext<any>(null);

const ConnectionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { setAddress } = useContext(AuthContext);
  class ProviderHandler {
    private static _instance: ProviderHandler = new ProviderHandler();
    private providerType: ProviderTypes | null = null;
    private provider: ProviderTypesSDK | null = null;
    private address: string | null = null;

    private constructor() {
      if (ProviderHandler._instance) {
        throw new Error(
          'Error: Instantiation failed: Use ProviderHandler.getInstance() instead of new.'
        );
      }
      ProviderHandler._instance = this;
    }

    public static getInstance(): ProviderHandler {
      return ProviderHandler._instance;
    }

    public async login(providerType: ProviderTypes) {
      try {
        validateParameters(providerType);
        await this._init(providerType);
        await this._login(providerType);
      } catch (error) {
        console.error(error);
      }
    }

    public async logout() {
      if (this.provider === null) throw new Error('No active provider');
      if (this.providerType === null)
        throw new Error('No providerType defined');

      await this.provider.logout();
      this.provider = null;
      this.providerType = null;
      setAddress(null);
    }

    public getAddress = () => this.address;

    private async _init(providerType: ProviderTypes) {
      validateParameters(providerType);

      switch (providerType) {
        case ProviderTypes.EXTENSION:
          if (typeof window !== 'undefined') {
            this.provider = ExtensionProvider.getInstance();
            await (this.provider as ExtensionProvider).init();
          }
          break;
        // case ProviderTypes.WALLET_CONNECT:
        //   const onClientConnect: IClientConnect = {
        //     onClientLogin: () => {
        //       console.log('Client logged in');
        //     },
        //     onClientLogout: () => {
        //       console.log('Client logged out');
        //     },
        //     onClientEvent: (event) => {
        //       console.log('Client event:', event);
        //     },
        //   };
        //   const chainId = '1';
        //   const walletConnectV2Relay = 'wss://relay.walletconnect.org';
        //   const walletConnectV2ProjectId = '85a62864c3d95a4630e06b18e56f2d07';
        //   const walletConnectProvider = new WalletConnectV2Provider(
        //     onClientConnect,
        //     chainId,
        //     walletConnectV2Relay,
        //     walletConnectV2ProjectId
        //   );
        //   await walletConnectProvider.init();
        //   this.provider = walletConnectProvider;
        //   break;
        // case ProviderTypes.LEDGER:
        //   if (
        //     typeof window !== 'undefined' &&
        //     typeof navigator !== 'undefined'
        //   ) {
        //     this.provider = new HWProvider(/* params necesarios */);
        //     await (this.provider as HWProvider).init();
        //   }
        //   break;
        // case ProviderTypes.WEB:
        //   if (typeof window !== 'undefined') {
        //     const walletURL = 'https://wallet.multiversx.com';
        //     this.provider = new WalletProvider(walletURL);
        //     // No hay método init() en WalletProvider
        //   }
        //   break;
        default:
          throw new Error('Invalid providerType');
      }

      this.providerType = providerType;
    }

    private async _login(providerType: ProviderTypes) {
      if (this.provider === null) throw new Error('No active provider');
      if (this.providerType !== providerType)
        throw new Error('ProviderType mismatch');

      this.address = await this.provider.login();
      setAddress(this.address); // Asegúrate de que setAddress se invoca
    }
  }

  const providerHandler = ProviderHandler.getInstance();

  const login = (providerType: ProviderTypes) => {
    providerHandler.login(providerType);
  };
  const logout = () => {
    providerHandler.logout();
  };

  const getAddress = () => {
    providerHandler.getAddress();
  };

  return (
    <ConnectionContext.Provider value={{ login, logout, getAddress }}>
      {children}
    </ConnectionContext.Provider>
  );
};

export default ConnectionProvider;
