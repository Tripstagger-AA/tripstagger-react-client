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
import UserMiniHeaderContainer from './UserMiniHeaderContainer';
import UserMiniHeaderWrapper from './UserMiniHeaderWrapper';

interface UserMiniHeaderProperties {
  children: ReactNode;
}

const UserMiniHeader: React.FC<UserMiniHeaderProperties> = ({children}) => {
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <UserMiniHeaderContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <UserMiniHeaderWrapper
        className={clsx('mini-sidebar-collapsed', {
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
      </UserMiniHeaderWrapper>
    </UserMiniHeaderContainer>
  );
};

export default UserMiniHeader;
