import Grid from '@mui/material/Grid';
import React from 'react';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import ControlledAccordionsSource from '!raw-loader!./ControlledAccordions';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import CustomizedAccordionsSource from '!raw-loader!./CustomizedAccordions';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleAccordionSource from '!raw-loader!./SimpleAccordion';

import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import ControlledAccordions from './ControlledAccordions';
import CustomizedAccordions from './CustomizedAccordions';
import SimpleAccordion from './SimpleAccordion';

const Accordion = () => {
  return (
    <>
      <AppComponentHeader
        title='Accordion'
        description='Accordions contain creation flows and allow lightweight editing of an element'
        refUrl='https://mui.com/components/accordion/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Controlled Accordions'
            component={ControlledAccordions}
            source={ControlledAccordionsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Customized Accordions'
            component={CustomizedAccordions}
            source={CustomizedAccordionsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Basic accordion'
            component={SimpleAccordion}
            source={SimpleAccordionSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Accordion;
