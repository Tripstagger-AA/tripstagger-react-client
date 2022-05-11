import {AppLoader} from '@app/shared/components';
import dynamic from 'next/dynamic';
import React from 'react';

export const asyncComponent = (importComponent) => {
  return dynamic(importComponent, {
    loading: () => <AppLoader />,
  });
};
