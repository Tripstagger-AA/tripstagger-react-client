import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import {Instance} from '@popperjs/core';
import * as React from 'react';

export default function AnchorElementTooltips() {
  const positionReference = React.useRef<{x: number; y: number}>({
    x: 0,
    y: 0,
  });
  const popperReference = React.useRef<Instance>(null);
  const areaReference = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    positionReference.current = {x: event.clientX, y: event.clientY};

    if (popperReference.current != undefined) {
      popperReference.current.update();
    }
  };

  return (
    <Tooltip
      title='Add'
      placement='top'
      arrow
      PopperProps={{
        popperRef: popperReference,
        anchorEl: {
          getBoundingClientRect: () => {
            return new DOMRect(
              positionReference.current.x,
              areaReference.current!.getBoundingClientRect().y,
              0,
              0,
            );
          },
        },
      }}
    >
      <Box
        ref={areaReference}
        onMouseMove={handleMouseMove}
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          p: 2,
        }}
      >
        Hover
      </Box>
    </Tooltip>
  );
}
