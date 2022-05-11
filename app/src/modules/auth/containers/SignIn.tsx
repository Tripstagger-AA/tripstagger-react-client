import AuthWrapper from '@app/auth/components/AuthWrapper';
import {AppLoader} from '@app/shared/components';
import React from 'react';

const SignIn = () => {
  return (
    <AuthWrapper>
      <AppLoader />
    </AuthWrapper>
  );
};

export default SignIn;
