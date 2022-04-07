import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const options = ['View More', 'Update Data', 'Clear Data'];
const AppMenu = () => {
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <IconButton
        style={{height: 30, width: 30}}
        aria-label='more'
        onClick={handleClick}
        size='large'
      >
        <MoreVertIcon />
      </IconButton>
      <Menu id='long-menu' anchorEl={anchorElement} keepMounted open={open} onClose={handleClose}>
        {options.map(option => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AppMenu;
