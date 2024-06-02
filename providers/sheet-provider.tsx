'use client';

import NewAccountSheet from '@/features/accounts/components/new-account-sheet';
import EditAccountSheet from '@/features/accounts/components/open-account-sheet';
import { useMountedState } from 'react-use';

const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />
    </>
  );
};

export default SheetProvider;
