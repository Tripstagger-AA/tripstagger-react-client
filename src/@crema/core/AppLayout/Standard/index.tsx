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
import StandardContainer from './StandardContainer';
import StandardWrapper from './StandardWrapper';

interface StandardProperties {
  children: ReactNode;
}

const Standard: React.FC<StandardProperties> = ({children}) => {
  const {footer, layoutType, footerType} = useLayoutContext();

  return (
    <StandardContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <StandardWrapper
        className={clsx('standardWrapper', {
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
      </StandardWrapper>
    </StandardContainer>
  );
};

export default Standard;
