import {useAuthUser} from '@app/auth/hooks';
import Router, {useRouter} from 'next/router';
import React, {useEffect} from 'react';

import AppLoader from '../../core/AppLoader';

const withData = ComposedComponent => properties => {
  const {user, isLoading} = useAuthUser();
  const {asPath} = useRouter();
  const queryParameters = asPath.split('?')[1];
  useEffect(() => {
    if (!user && !isLoading) {
      Router.push('/signin' + (queryParameters ? '?' + queryParameters : ''));
    }
  }, [user, isLoading]);
  if (!user || isLoading) return <AppLoader />;

  return <ComposedComponent {...properties} />;
};

export default withData;
