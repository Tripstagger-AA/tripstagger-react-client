import {ROUTES} from '@app/shared/constants';
import Router, {useRouter} from 'next/router';
import React, {useEffect} from 'react';

const withData = ComposedComponent => properties => {
  const {user, isLoading} = {user: null, isLoading: false};
  const {asPath} = useRouter();
  const queryParameters = asPath.split('?')[1];
  useEffect(() => {
    if (user) {
      Router.push(ROUTES.initial + (queryParameters ? '?' + queryParameters : ''));
    }
  }, [user]);
  // if (isLoading) return <AppLoader />;
  // if (user) return <AppLoader />;

  return <ComposedComponent {...properties} />;
};

export default withData;
