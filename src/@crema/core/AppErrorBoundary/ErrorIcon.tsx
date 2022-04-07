import {useTheme} from '@mui/material';
import React from 'react';

// @ts-ignore
import Logo from '../../../assets/icon/something-wrong.svg';

const ErrorIcon = () => {
  const theme = useTheme();
  return <Logo fill={theme.palette.primary.main} />;
};

export default ErrorIcon;
