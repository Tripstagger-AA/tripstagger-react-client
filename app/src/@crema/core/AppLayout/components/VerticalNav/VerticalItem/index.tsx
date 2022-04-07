import {useAuthUser} from '@app/auth';
import AppBadge from '@crema/core/AppBadge';
import {Icon, ListItemText} from '@mui/material';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useMemo} from 'react';

import {RouterConfigData} from '../../../../../../modules/routesConfig';
import {checkPermission} from '../../../../../utility/helper/RouteHelper';
import IntlMessages from '../../../../../utility/IntlMessages';
import VerticalNavItem from './VerticalNavItem';

interface VerticalItemProperties {
  item: RouterConfigData;
  level: number;
}

const VerticalItem: React.FC<VerticalItemProperties> = ({level, item}) => {
  const {user} = useAuthUser();
  const hasPermission = useMemo(
    () => checkPermission(item.permittedRole, user.role),
    [item.permittedRole, user.role],
  );
  if (!hasPermission) {
    return null;
  }

  const router = useRouter();
  return (
    <Link href={item.url!} as={item.as}>
      <a style={{textDecoration: 'none'}}>
        <VerticalNavItem active={item.url === router.pathname} level={level} exact={item.exact}>
          {item.icon && (
            <Box component='span'>
              <Icon
                sx={{
                  fontSize: 18,
                  display: 'block',
                  mr: 4,
                }}
                className={clsx('nav-item-icon', 'material-icons-outlined')}
                color='action'
              >
                {item.icon}
              </Icon>
            </Box>
          )}
          <ListItemText
            className='nav-item-content'
            primary={<IntlMessages id={item.messageId} />}
            classes={{primary: 'nav-item-text'}}
          />
          {item.count && (
            <Box sx={{mr: 3.5}} className='menu-badge'>
              <AppBadge count={item.count} color={item.color} />
            </Box>
          )}
        </VerticalNavItem>
      </a>
    </Link>
  );
};

export default React.memo(VerticalItem);
