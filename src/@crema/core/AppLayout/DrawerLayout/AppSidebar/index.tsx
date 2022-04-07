import {useSidebarContext} from '@app/crema/utility/AppContextProvider/SidebarContextProvider';
import {toggleNavCollapsed} from '@app/redux/actions/Setting';
import {AppState} from '@app/redux/store';
import Drawer from '@mui/material/Drawer';
import clsx from 'clsx';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AppScrollbar from '../../../AppScrollbar';
import MainSidebar from '../../components/MainSidebar';
import UserInfo from '../../components/UserInfo';
import VerticalNav from '../../components/VerticalNav';
import StandardSidebarWrapper from './StandardSidebarWrapper';

interface AppSidebarProperties {
  position?: 'left' | 'top' | 'right' | 'bottom';
  variant?: string;
}

const AppSidebar: React.FC<AppSidebarProperties> = ({variant = '', position = 'left'}) => {
  const dispatch = useDispatch();
  const navCollapsed = useSelector<AppState, AppState['settings']>(
    ({settings}) => settings,
  ).navCollapsed;

  const {sidebarTextColor} = useSidebarContext();

  const handleToggleDrawer = () => {
    dispatch(toggleNavCollapsed());
  };

  return (
    <>
      <Drawer
        anchor={position}
        open={navCollapsed}
        onClose={() => handleToggleDrawer()}
        classes={{
          root: clsx(variant),
          paper: clsx(variant),
        }}
        style={{position: 'absolute'}}
      >
        <StandardSidebarWrapper className='standard-sidebar'>
          <MainSidebar>
            <UserInfo color={sidebarTextColor} />
            <AppScrollbar
              sx={{
                py: 2,
                height: 'calc(100vh - 70px) !important',
              }}
              scrollToTop={false}
            >
              <VerticalNav />
            </AppScrollbar>
          </MainSidebar>
        </StandardSidebarWrapper>
      </Drawer>
    </>
  );
};
export default AppSidebar;
