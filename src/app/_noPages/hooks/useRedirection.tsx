'use client';

import { useRouter } from 'next/navigation';

const useRedirection = () => {
  const router = useRouter();

  const redirection = (url: string) => {
    router.push(url);
  };

  return {
    redirection,
  };
};

export default useRedirection;
