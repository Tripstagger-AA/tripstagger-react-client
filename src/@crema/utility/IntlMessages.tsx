import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';

const InjectMassage = (properties: any) => <FormattedMessage {...properties} />;
export default injectIntl(InjectMassage, {
  forwardRef: false,
});
