import AuthWrapper from '@app/auth/components/AuthWrapper';
import React from 'react';
import {AppLoader} from "@app/shared/components";

const Signin = () => {
  return (
    <AuthWrapper>
      <AppLoader/>
    </AuthWrapper>
  );
};

export default Signin;
