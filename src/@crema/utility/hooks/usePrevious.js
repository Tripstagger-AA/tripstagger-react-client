import React from 'react';

export const usePrevious = value => {
  const reference = React.useRef();
  React.useEffect(() => {
    reference.current = value;
  });
  return reference.current;
};
