import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import {alpha, Box} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import React from 'react';
import {Fonts} from 'shared/constants/AppEnums';

import {
  useLocaleActionsContext,
  useLocaleContext,
} from '../../utility/AppContextProvider/LocaleContextProvide';
import AppTooltip from '../AppTooltip';
import languageData, {LanguageProps as LanguageProperties} from './data';

interface AppLngSwitcherProperties {
  iconOnly?: boolean;
  tooltipPosition?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
}

const AppLngSwitcher: React.FC<AppLngSwitcherProperties> = ({
  iconOnly = false,
  tooltipPosition,
}) => {
  const {locale} = useLocaleContext();
  const {updateLocale} = useLocaleActionsContext();
  const [anchorElementLng, setAnchorElementLng] = React.useState<null | HTMLElement>(null);

  const onClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElementLng(event.currentTarget);
  };
  const changeLanguage = (language: LanguageProperties) => {
    updateLocale(language);
    setAnchorElementLng(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {!iconOnly ? (
        <IconButton
          sx={{
            height: 40,
            fontSize: 16,
            borderRadius: 30,
            padding: '6px 12px',
            color: theme => theme.palette.text.secondary,
            backgroundColor: theme => theme.palette.background.default,
            border: 1,
            borderColor: 'transparent',
            '&:hover, &:focus': {
              color: theme => theme.palette.text.primary,
              backgroundColor: theme => alpha(theme.palette.background.default, 0.9),
              borderColor: theme => alpha(theme.palette.text.secondary, 0.25),
            },
            '& .langText': {
              ml: 2.5,
              fontSize: 16,
              fontWeight: Fonts.REGULAR,
              display: {xs: 'none', sm: 'inline-block'},
            },
            '& svg': {
              fontSize: 20,
            },
          }}
          className='lang-switcher-btn'
          aria-label='account of current user'
          aria-controls='language-switcher'
          aria-haspopup='true'
          onClick={onClickMenu}
          color='inherit'
          size='large'
        >
          <TranslateOutlinedIcon />
          <span className='langText'>{locale.name}</span>
        </IconButton>
      ) : (
        <AppTooltip title='Language' placement={tooltipPosition}>
          <IconButton
            sx={{
              height: 40,
              width: 40,
              borderRadius: '50%',
              padding: '6px 9px',
              color: theme => theme.palette.text.secondary,
              backgroundColor: theme => theme.palette.background.default,
              border: 1,
              borderColor: 'transparent',
              '&:hover, &:focus': {
                color: theme => theme.palette.text.primary,
                backgroundColor: theme => alpha(theme.palette.background.default, 0.9),
                borderColor: theme => alpha(theme.palette.text.secondary, 0.25),
              },
              '& .langText': {
                ml: 2.5,
                fontSize: 16,
                fontWeight: Fonts.REGULAR,
                display: {xs: 'none', sm: 'inline-block'},
              },
              '& svg': {
                fontSize: 20,
              },
            }}
            className='lang-switcher-btn'
            aria-label='account of current user'
            aria-controls='language-switcher'
            aria-haspopup='true'
            onClick={onClickMenu}
            color='inherit'
            size='large'
          >
            <TranslateOutlinedIcon />
          </IconButton>
        </AppTooltip>
      )}
      <Menu
        anchorEl={anchorElementLng}
        id='language-switcher'
        keepMounted
        open={Boolean(anchorElementLng)}
        onClose={() => setAnchorElementLng(null)}
      >
        {languageData.map((language, index) => (
          <MenuItem key={index} onClick={() => changeLanguage(language)}>
            <Box
              sx={{
                width: 160,
              }}
            >
              <Typography
                sx={{
                  mb: 0,
                  fontSize: {xs: 14, sm: 16},
                  fontWeight: Fonts.MEDIUM,
                }}
                component='h4'
                variant='h4'
              >
                {language.name}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AppLngSwitcher;
