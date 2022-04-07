import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import clsx from 'clsx';
import React, {ReactNode, useState} from 'react';

import {LayoutType} from '../../../../shared/constants/AppEnums';
import {AppContentView} from '../../../index';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import AppThemeSetting from '../../AppThemeSetting';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import BitBucketContainer from './BitBucketContainer';
import BitBucketWrapper from './BitBucketWrapper';

interface BitBucketProperties {
  children: ReactNode;
}

const BitBucket: React.FC<BitBucketProperties> = ({children}) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const {layoutType} = useLayoutContext();

  return (
    <BitBucketContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <BitBucketWrapper
        className={clsx('bitBucketWrapper', {
          bitBucketCollapsed: isCollapsed,
        })}
      >
        <Hidden lgUp>
          <AppHeader />
        </Hidden>
        <AppSidebar isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
        <Box className='mainContent'>
          <AppContentView>{children}</AppContentView>
        </Box>
        <AppThemeSetting />
      </BitBucketWrapper>
    </BitBucketContainer>
  );
};

export default BitBucket;
