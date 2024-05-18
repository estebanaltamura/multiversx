'use client';

import React from 'react';
import ConnectWalletModal from './components/ConnectWalletModal';
import Image from 'next/image';
import useScreenWidth from './hooks/useScreenWidth';

const Page = () => {
  const { width } = useScreenWidth();

  function ResponsiveImage() {
    return (
      <>
        {width <= 768 ? (
          <img
            src='/images/landing-place-holder-mobile.jpg'
            alt='Placeholder for mobile'
            width='100%'
          />
        ) : (
          <img
            src='/images/landing-place-holder-desktop.jpg'
            alt='Placeholder for desktop'
            width='100%'
          />
        )}
      </>
    );
  }

  return (
    <div>
      <ResponsiveImage />
    </div>
  );
};

export default Page;
