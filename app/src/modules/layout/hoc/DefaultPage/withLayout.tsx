import React from 'react';

import {DefaultLayout} from './DefaultLayout';

const withLayout = ComposedComponent => properties => {
  return (
    <DefaultLayout>
      <ComposedComponent {...properties} />
    </DefaultLayout>
  );
};

export default withLayout;
