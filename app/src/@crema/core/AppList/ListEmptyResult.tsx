import {Box, Button, CircularProgress, Typography} from '@mui/material';
import React, {ReactNode} from 'react';

import {Fonts} from '../../../shared/constants/AppEnums';
import IntlMessages from '../../utility/IntlMessages';

interface ListEmptyResultProperties {
  title?: string | ReactNode;
  actionTitle?: string | ReactNode;
  onClick?: () => void;
  loading?: boolean;
  loader?: boolean;
  placeholder?: ReactNode;
  content?: string;
}

const ListEmptyResult: React.FC<ListEmptyResultProperties> = ({
  loader,
  placeholder,
  loading,
  title = <IntlMessages id='common.noRecordFound' />,
  actionTitle,
  content,
  onClick,
}) => {
  return loading || loader ? (
    <React.Fragment>
      {placeholder ? (
        placeholder
      ) : (
        <Box
          sx={{
            flexDirection: 'row',
            minHeight: '450px',
            height: '100%',
            flex: 1,
            display: 'flex',
            p: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'transparent',
            borderRadius: '4px',
            textAlign: 'center',
          }}
        >
          <CircularProgress size={16} />
          <Box component='span' sx={{ml: 2}}>
            Loading...
          </Box>
        </Box>
      )}
    </React.Fragment>
  ) : (
    <Box
      sx={{
        flexDirection: 'column',
        minHeight: '450px',
        height: '100%',
        flex: 1,
        display: 'flex',
        p: 5,
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
        borderColor: 'transparent',
        borderRadius: '4px',
        textAlign: 'center',
      }}
    >
      {title ? (
        <Typography
          sx={{
            fontSize: 14,
            color: theme => theme.palette.text.secondary,
            fontWeight: Fonts.MEDIUM,
            mb: 2,
          }}
          component='h4'
          variant='h4'
        >
          {title}
        </Typography>
      ) : null}
      <Typography
        sx={{
          fontSize: 14,
          color: theme => theme.palette.text.secondary,
        }}
      >
        {content}
      </Typography>

      {actionTitle ? (
        <Button
          color='primary'
          variant='contained'
          sx={{mt: 7.5, height: 45, minWidth: 150}}
          onClick={onClick}
        >
          {actionTitle}
        </Button>
      ) : null}
    </Box>
  );
};

export default ListEmptyResult;