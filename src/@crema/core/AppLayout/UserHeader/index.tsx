import Box from '@mui/material/Box';
import clsx from 'clsx';
import React, {ReactNode} from 'react';

import {LayoutType} from '../../../../shared/constants/AppEnums';
import {AppContentView} from '../../../index';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import AppThemeSetting from '../../AppThemeSetting';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import UserHeaderContainer from './UserHeaderContainer';
import UserHeaderWrapper from './UserHeaderWrapper';

interface UserHeaderProperties {
  children: ReactNode;
}

const UserHeader: React.FC<UserHeaderProperties> = ({children}) => {
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <UserHeaderContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <UserHeaderWrapper
        className={clsx('userHeaderWrapper', {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
        })}
      >
        <AppHeader />
        <Box className='mainContent'>
          <AppSidebar />
          <AppContentView>{children}</AppContentView>
          <AppFixedFooter />
        </Box>
        <AppThemeSetting />
      </UserHeaderWrapper>
    </UserHeaderContainer>
  );
};

export default UserHeader;
