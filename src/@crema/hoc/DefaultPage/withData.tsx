import {useAuthUser} from '@app/auth';
import Router, {useRouter} from 'next/router';
import React, {useEffect} from 'react';

import {initialUrl} from '../../../shared/constants/AppConst';
import AppLoader from '../../core/AppLoader';

const withData = ComposedComponent => properties => {
  const {user, isLoading} = useAuthUser();
  const {asPath} = useRouter();
  const queryParameters = asPath.split('?')[1];
  useEffect(() => {
    if (user) {
      console.log('push');
      Router.push(initialUrl + (queryParameters ? '?' + queryParameters : ''));
    }
  }, [user]);
  // if (isLoading) return <AppLoader />;
  // if (user) return <AppLoader />;

  return <ComposedComponent {...properties} />;
};

export default withData;
