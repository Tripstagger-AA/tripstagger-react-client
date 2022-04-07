import React, {CSSProperties, ReactNode} from 'react';

import GridFooter from './GridFooter';
import GridView from './GridView';

interface AppCardProperties {
  loading?: boolean;
  border?: boolean;
  footerProps?: {
    loading: boolean;
    footerText: string;
  };
  containerStyle?: CSSProperties;
  ListEmptyComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
  data: any[];
  onEndReached?: () => void;
  renderRow: (item: any, index: number) => ReactNode;

  [x: string]: any;
}

const AppGrid: React.FC<AppCardProperties> = ({footerProps, ...rest}) => {
  return (
    <GridView
      {...rest}
      ListFooterComponent={
        footerProps ? (
          <GridFooter loading={footerProps.loading} footerText={footerProps.footerText} />
        ) : null
      }
    />
  );
};

export default AppGrid;
