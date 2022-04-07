import AppLoader from '@crema/core/AppLoader';
import React, {ReactNode} from 'react';

interface AppSuspenseProperties {
  children: ReactNode;
}

const AppSuspense: React.FC<AppSuspenseProperties> = ({children}) => {
  return <React.Suspense fallback={<AppLoader />}>{children}</React.Suspense>;
};

export default AppSuspense;
