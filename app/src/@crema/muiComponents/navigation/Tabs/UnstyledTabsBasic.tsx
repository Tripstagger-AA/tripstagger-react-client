import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import * as React from 'react';

export default function UnstyledTabsBasic() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsListUnstyled>
        <TabUnstyled>One</TabUnstyled>
        <TabUnstyled>Two</TabUnstyled>
        <TabUnstyled>Three</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled value={0}>First content</TabPanelUnstyled>
      <TabPanelUnstyled value={1}>Second content</TabPanelUnstyled>
      <TabPanelUnstyled value={2}>Third content</TabPanelUnstyled>
    </TabsUnstyled>
  );
}
