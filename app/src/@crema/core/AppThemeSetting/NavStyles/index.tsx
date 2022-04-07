import Box from '@mui/material/Box';
import React from 'react';

import {navStyles} from '../../../services/db/navigationStyle';
import {
  useLayoutActionsContext,
  useLayoutContext,
} from '../../../utility/AppContextProvider/LayoutContextProvider';
import IntlMessages from '../../../utility/IntlMessages';
import AppSelectedIcon from '../../AppSelectedIcon';
import {CustomizerItemWrapper} from '../index.style';

const NavStyles = () => {
  const {updateNavStyle} = useLayoutActionsContext();
  const {navStyle} = useLayoutContext();

  const onNavStyleChange = (navStyle: string) => {
    updateNavStyle(navStyle);
  };

  return (
    <CustomizerItemWrapper
      sx={{
        pb: 1,
      }}
    >
      <Box component='h4' sx={{mb: 3}}>
        <IntlMessages id='customizer.navigationStyles' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          mx: -1.25,
        }}
      >
        {navStyles.map(navLayout => {
          return (
            <Box
              sx={{
                px: 1.25,
                mb: 1.25,
              }}
              key={navLayout.id}
            >
              <Box
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => onNavStyleChange(navLayout.alias)}
              >
                <img src={navLayout.image} alt='nav' />
                {navStyle === navLayout.alias ? <AppSelectedIcon /> : null}
              </Box>
            </Box>
          );
        })}
      </Box>
    </CustomizerItemWrapper>
  );
};

export default NavStyles;