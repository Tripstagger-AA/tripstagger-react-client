import Box from '@mui/material/Box';
import clsx from 'clsx';
import React, {ReactNode, useState} from 'react';

import {LayoutType} from '../../../../shared/constants/AppEnums';
import {AppContentView} from '../../../index';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import AppThemeSetting from '../../AppThemeSetting';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import MiniSidebarContainer from './MiniSidebarContainer';
import MiniSidebarWrapper from './MiniSidebarWrapper';

interface MiniSidebarProperties {
  children: ReactNode;
}

const MiniSidebar: React.FC<MiniSidebarProperties> = ({children}) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const {footer, layoutType, headerType, footerType} = useLayoutContext();

  return (
    <MiniSidebarContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <MiniSidebarWrapper
        className={clsx('miniSidebarWrapper', {
          'mini-sidebar-collapsed': isCollapsed,
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
          appMainFixedHeader: headerType === 'fixed',
        })}
      >
        <AppSidebar />
        <Box className='mainContent'>
          <AppHeader setCollapsed={setCollapsed} isCollapsed={isCollapsed} />
          <AppContentView>{children}</AppContentView>
          <AppFixedFooter />
        </Box>
        <AppThemeSetting />
      </MiniSidebarWrapper>
    </MiniSidebarContainer>
  );
};

export default MiniSidebar;
