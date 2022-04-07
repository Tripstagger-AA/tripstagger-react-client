import {AppLoader} from '@app/crema';
import PropTypes from 'prop-types';
import React, {ReactNode} from 'react';

import {useAuthUser} from '../hooks/AuthHooks';

interface AuthRoutesProperties {
  children: ReactNode;
}

const AuthRoutes: React.FC<AuthRoutesProperties> = ({children}) => {
  const {isLoading} = useAuthUser();
  return isLoading ? <AppLoader /> : <>{children}</>;
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
