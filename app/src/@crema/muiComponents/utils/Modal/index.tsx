import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BasicModalSource from '!raw-loader!./BasicModal';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ModalUnstyledDemoSource from '!raw-loader!./ModalUnstyledDemo';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import NestedModalSource from '!raw-loader!./NestedModal';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ServerModalSource from '!raw-loader!./ServerModal';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import TransitionsModalSource from '!raw-loader!./TransitionsModal';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import BasicModal from './BasicModal';
import ModalUnstyledDemo from './ModalUnstyledDemo';
import NestedModal from './NestedModal';
import ServerModal from './ServerModal';
import TransitionsModal from './TransitionsModal';

const Modal = () => {
  return (
    <>
      <AppComponentHeader
        title='Modal'
        description='The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.'
        refUrl='https://mui.com/components/modal/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Modal'
            component={BasicModal}
            source={BasicModalSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ModalUnstyledDemo'
            component={ModalUnstyledDemo}
            source={ModalUnstyledDemoSource}
            description='The modal also comes with an unstyled version. Its ideal for doing heavy customizations and minimizing bundle size.'
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Nested Modal'
            component={NestedModal}
            source={NestedModalSource}
            description='Modals can be nested, for example a select within a dialog, but stacking of more than two modals, or any two modals with a backdrop is discouraged. '
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Transitions Modal'
            component={TransitionsModal}
            source={TransitionsModalSource}
            description=''
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Server Modal'
            component={ServerModal}
            source={ServerModalSource}
            description="React doesn't support the createPortal() API on the server. In order to display the modal, you need to disable the portal feature with the disablePortal prop:"
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Modal;
