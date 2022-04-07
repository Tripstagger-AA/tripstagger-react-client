import React from 'react';

import AppPage from '../@crema/hoc/DefaultPage/index';
import asyncComponent from '../@crema/utility/asyncComponent';

const SignIn = asyncComponent(() => import('@app/auth/views/Signin/index'));
export default AppPage(() => <SignIn />);
