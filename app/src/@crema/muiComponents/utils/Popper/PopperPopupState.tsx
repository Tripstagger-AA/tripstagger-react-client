import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import PopupState, {bindPopper, bindToggle} from 'material-ui-popup-state';
import * as React from 'react';

export default function PopperPopupState() {
  return (
    <PopupState variant='popper' popupId='demo-popup-popper'>
      {popupState => (
        <div>
          <Button variant='contained' {...bindToggle(popupState)}>
            Toggle Popper
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({TransitionProps}) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography sx={{p: 2}}>The content of the Popper.</Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}
