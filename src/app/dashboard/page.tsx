'use client';
import {
  useGetAccountInfo,
  useGetAccount,
  useGetAccountProvider,
  useGetIsLoggedIn,
  useGetIsWalletConnectV2Initialized,
  useGetLoginInfo,
  useGetWebsocketEvent,
} from '@multiversx/sdk-dapp/hooks/account';

import { useEffect } from 'react';

const Page: React.FC = () => {
  const isLoggedIn = useGetIsLoggedIn();
  const accountInfo = useGetAccountInfo();

  useEffect(() => {
    if (isLoggedIn && accountInfo) {
      console.log('Account Address:', accountInfo);
    }
  }, [isLoggedIn, accountInfo]);

  return <div> dashboard</div>;
};

export default Page;
