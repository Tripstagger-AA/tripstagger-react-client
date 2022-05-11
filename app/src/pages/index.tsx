import {asyncComponent, DefaultPage} from '@app/layout';
import React from 'react';

const SignIn = asyncComponent(() => import('@app/auth/containers/Signin'));
export default DefaultPage(() => <SignIn />);
