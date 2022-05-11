import {asyncComponent, DefaultPage} from '@app/layout';
import React from 'react';

const SignUp = asyncComponent(() => import('@app/auth/containers/SignUp'));
export default DefaultPage(() => <SignUp />);
