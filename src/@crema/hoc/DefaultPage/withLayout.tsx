import {useRouter} from 'next/router';
import React, {useEffect} from 'react';

import {useLayoutActionsContext} from '../../utility/AppContextProvider/LayoutContextProvider';
import {useSidebarActionsContext} from '../../utility/AppContextProvider/SidebarContextProvider';
import DefaultLayout from './DefaultLayout';

const withLayout = ComposedComponent => properties => {
  const {updateNavStyle} = useLayoutActionsContext();
  const {updateMenuStyle, setSidebarBgImage} = useSidebarActionsContext();
  const router = useRouter();

  useEffect(() => {
    if (router.query.layout) updateNavStyle(router.query.layout as string);
    if (router.query.menuStyle) updateMenuStyle(router.query.menuStyle as string);
    if (router.query.sidebarImage) setSidebarBgImage(true);
  }, []);

  return (
    <DefaultLayout>
      <ComposedComponent {...properties} />
    </DefaultLayout>
  );
};

export default withLayout;
