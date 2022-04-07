import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import {useLayoutContext} from '../../../../utility/AppContextProvider/LayoutContextProvider';
import FooterWrapper from './FooterWrapper';

const AppFooter = () => {
  const {footer, footerType, navStyle} = useLayoutContext();

  return (
    <>
      {footer &&
      footerType === 'fluid' &&
      navStyle !== 'h-default' &&
      navStyle !== 'hor-light-nav' &&
      navStyle !== 'hor-dark-layout' ? (
        <FooterWrapper className='footer'>
          <div className='footerContainer'>
            <Typography>Copy right @crema 2021</Typography>
            <Box sx={{ml: 'auto'}}>
              <Button
                sx={{
                  px: 5,
                }}
                color='primary'
              >
                Buy Now
              </Button>
            </Box>
          </div>
        </FooterWrapper>
      ) : null}
    </>
  );
};

export default AppFooter;
