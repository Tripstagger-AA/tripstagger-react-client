import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Collapse from '@mui/material/Collapse';
import Link, {LinkProps} from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem, {ListItemProps} from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {Link as RouterLink, MemoryRouter, Route} from 'react-router-dom';

interface ListItemLinkProperties extends ListItemProps {
  to: string;
  open?: boolean;
}

const breadcrumbNameMap: {[key: string]: string} = {
  '/inbox': 'Inbox',
  '/inbox/important': 'Important',
  '/trash': 'Trash',
  '/spam': 'Spam',
  '/drafts': 'Drafts',
};

function ListItemLink(properties: ListItemLinkProperties) {
  const {to, open, ...other} = properties;
  const primary = breadcrumbNameMap[to];

  let icon;
  if (open) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItem button component={RouterLink as any} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

interface LinkRouterProperties extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (properties: LinkRouterProperties) => (
  <Link {...properties} component={RouterLink as any} />
);

export default function RouterBreadcrumbs() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(previousOpen => !previousOpen);
  };

  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Box sx={{display: 'flex', flexDirection: 'column', width: 360}}>
        <Route>
          {({location}) => {
            const pathnames = location.pathname.split('/').filter(Boolean);

            return (
              <Breadcrumbs aria-label='breadcrumb'>
                <LinkRouter underline='hover' color='inherit' to='/'>
                  Home
                </LinkRouter>
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color='text.primary' key={to}>
                      {breadcrumbNameMap[to]}
                    </Typography>
                  ) : (
                    <LinkRouter underline='hover' color='inherit' to={to} key={to}>
                      {breadcrumbNameMap[to]}
                    </LinkRouter>
                  );
                })}
              </Breadcrumbs>
            );
          }}
        </Route>
        <Box
          sx={{
            bgcolor: 'background.paper',
            mt: 1,
          }}
          component='nav'
          aria-label='mailbox folders'
        >
          <List>
            <ListItemLink to='/inbox' open={open} onClick={handleClick} />
            <Collapse component='li' in={open} timeout='auto' unmountOnExit>
              <List disablePadding>
                <ListItemLink sx={{pl: 4}} to='/inbox/important' />
              </List>
            </Collapse>
            <ListItemLink to='/trash' />
            <ListItemLink to='/spam' />
          </List>
        </Box>
      </Box>
    </MemoryRouter>
  );
}
