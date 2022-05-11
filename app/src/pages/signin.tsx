import {asyncComponent, DefaultPage} from '@app/layout';
import React from 'react';

const SignIn = asyncComponent(() => import('@app/auth/containers/SignIn'));
export default DefaultPage(() => <SignIn />);
