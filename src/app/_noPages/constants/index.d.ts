// ** WEB WALLET
export const WEB_WALLET_CAONTANTS = {
  WALLET_PROVIDER_MAINNET: 'https://wallet.multiversx.com/dapp/init',
  WALLET_PROVIDER_DEVNET: 'https://devnet-wallet.multiversx.com/dapp/init',
  WALLET_PROVIDER_TESTNET: 'https://testnet-wallet.multiversx.com/dapp/init',
  XALIAS_PROVIDER_MAINNET: 'https://xalias.com',
  XALIAS_PROVIDER_DEVNET: 'https://devnet.xalias.com',
  XALIAS_PROVIDER_TESTNET: 'https://testnet.xalias.com',
  WALLET_PROVIDER_CONNECT_URL: 'hook/login',
  WALLET_PROVIDER_DISCONNECT_URL: 'hook/logout',
  WALLET_PROVIDER_SEND_TRANSACTION_URL: 'hook/transaction',
  WALLET_PROVIDER_SIGN_TRANSACTION_URL: 'hook/sign',
  WALLET_PROVIDER_GUARD_TRANSACTION_URL: 'hook/2fa',
  WALLET_PROVIDER_SIGN_MESSAGE_URL: 'hook/sign-message',
  WALLET_PROVIDER_CALLBACK_PARAM: 'walletProviderStatus',
  WALLET_PROVIDER_CALLBACK_PARAM_TX_SIGNED: 'transactionsSigned',
};

// ** HARDWARE WALLET
export const HARWARE_WALLET_CONTANTS = {
  // Since this version, the MultiversX Ledger App only supports signing a hash of the transaction - tx.options = 0b0001.
  LEDGER_TX_HASH_SIGN_MIN_VERSION: '1.0.11',
  // Since this version, the MultiversX Ledger App supports guarded transactions - tx.options = 0b00(0|1)1.
  LEDGER_TX_GUARDIAN_MIN_VERSION: '1.0.22',
  TRANSACTION_VERSION_WITH_OPTIONS: 2,
  TRANSACTION_OPTIONS_TX_HASH_SIGN: 0b0001,
  TRANSACTION_OPTIONS_TX_GUARDED: 0b0010,
};

// ** WALLET CONNECT
const SIGN_TRANSACTION = 'mvx_signTransaction';
const SIGN_TRANSACTIONS = 'mvx_signTransactions';
const SIGN_MESSAGE = 'mvx_signMessage';
const SIGN_LOGIN_TOKEN = 'mvx_signLoginToken';
const SIGN_NATIVE_AUTH_TOKEN = 'mvx_signNativeAuthToken';
const CANCEL_ACTION = 'mvx_cancelAction';

export const WALLET_CONNECT_CONSTANTS: {
  WALLETCONNECT_MULTIVERSX_NAMESPACE: 'mvx';
  WALLETCONNECT_MULTIVERSX_METHODS: [
    SIGN_TRANSACTION,
    SIGN_TRANSACTIONS,
    SIGN_MESSAGE
  ];

  WALLETCONNECT_MULTIVERSX_OPTIONAL_METHODS: [
    SIGN_LOGIN_TOKEN,
    SIGN_NATIVE_AUTH_TOKEN,
    CANCEL_ACTION
  ];

  // Delay the sign login token action for 500ms to allow the UI to update properly
  WALLETCONNECT_SIGN_LOGIN_DELAY: 500;
};
